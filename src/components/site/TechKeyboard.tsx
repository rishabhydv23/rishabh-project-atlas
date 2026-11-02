import { useEffect, useRef, useState } from "react";

const technologies = ["JS", "TS", "React", "Next", "Node", "CSS", "HTML", "Express", "Mongo", "Git", "Docker", "Linux", "SQL", "Java", "C++"];

export default function TechKeyboard() {
  const host = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState("React");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let disposed = false;
    let cleanup = () => {};
    async function initialize() {
      const THREE = await import("three");
      const { RoundedBoxGeometry } = await import("three/addons/geometries/RoundedBoxGeometry.js");
      if (disposed || !element) return;
      const css = getComputedStyle(element);
      const token = (name: string) => css.getPropertyValue(name).trim();
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(33, 1, 0.1, 100);
      camera.position.set(0, 7.8, 10.5);
      camera.lookAt(0, 0, 0);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      element.appendChild(renderer.domElement);
      const group = new THREE.Group();
      group.rotation.y = -0.24;
      group.rotation.z = -0.06;
      scene.add(group);
      scene.add(new THREE.HemisphereLight(token("--scene-light"), token("--scene-base"), 3));
      const light = new THREE.DirectionalLight(token("--scene-light"), 5);
      light.position.set(-3, 8, 4);
      scene.add(light);
      const rim = new THREE.DirectionalLight(token("--scene-cyan"), 2);
      rim.position.set(5, 2, -4);
      scene.add(rim);
      const materials: InstanceType<typeof THREE.Material>[] = [];
      const textures: InstanceType<typeof THREE.Texture>[] = [];
      const geometries: InstanceType<typeof THREE.BufferGeometry>[] = [];
      const baseGeo = new RoundedBoxGeometry(6.65, 0.48, 4.3, 4, 0.16);
      const baseMat = new THREE.MeshStandardMaterial({ color: token("--scene-base"), roughness: 0.32, metalness: 0.45 });
      geometries.push(baseGeo);
      materials.push(baseMat);
      const base = new THREE.Mesh(baseGeo, baseMat);
      base.position.y = -0.36;
      group.add(base);
      const keyGeo = new RoundedBoxGeometry(1.04, 0.65, 1.04, 4, 0.12);
      const faceGeo = new THREE.PlaneGeometry(0.87, 0.87);
      geometries.push(keyGeo, faceGeo);
      const colors = ["--scene-yellow", "--scene-blue", "--scene-cyan", "--scene-ink", "--scene-green", "--scene-cyan", "--scene-coral", "--scene-ink", "--scene-green", "--scene-coral", "--scene-blue", "--scene-ink", "--scene-blue", "--scene-pink", "--scene-yellow"];
      const keys: InstanceType<typeof THREE.Mesh>[] = [];
      technologies.forEach((name, index) => {
        const color = token(colors[index] ?? "--scene-blue");
        const material = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.12 });
        materials.push(material);
        const key = new THREE.Mesh(keyGeo, material);
        key.position.set((index % 5 - 2) * 1.17, 0.18, (Math.floor(index / 5) - 1) * 1.17);
        key.userData["name"] = name;
        group.add(key);
        keys.push(key);
        const canvas = document.createElement("canvas");
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 256, 256);
        ctx.fillStyle = token("--scene-label");
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        if (name === "React") {
          ctx.lineWidth = 7;
          ctx.strokeStyle = token("--scene-label");
          for (let angle = 0; angle < 3; angle++) {
            ctx.beginPath();
            ctx.ellipse(128, 128, 85, 32, angle * Math.PI / 3, 0, Math.PI * 2);
            ctx.stroke();
          }
          ctx.beginPath(); ctx.arc(128, 128, 11, 0, Math.PI * 2); ctx.fill();
        } else {
          ctx.font = `bold ${name.length > 4 ? 43 : name.length > 2 ? 54 : 85}px Arial`;
          ctx.fillText(name, 128, 128);
        }
        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        textures.push(texture);
        const faceMat = new THREE.MeshBasicMaterial({ map: texture });
        materials.push(faceMat);
        const face = new THREE.Mesh(faceGeo, faceMat);
        face.rotation.x = -Math.PI / 2;
        face.position.y = 0.331;
        key.add(face);
      });
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2(10, 10);
      let hovered: InstanceType<typeof THREE.Mesh> | undefined;
      let targetX = 0;
      let targetY = -0.24;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      function move(event: PointerEvent) {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
        targetY = -0.24 + pointer.x * 0.12;
        targetX = pointer.y * 0.045;
      }
      function leave() { pointer.set(10, 10); targetY = -0.24; targetX = 0; }
      function select() { if (hovered) setSelected(String(hovered.userData["name"])); }
      function press(event: PointerEvent) {
        move(event);
        raycaster.setFromCamera(pointer, camera);
        hovered = raycaster.intersectObjects(keys, false)[0]?.object as typeof hovered;
        select();
      }
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      element.addEventListener("pointerdown", press);
      const resize = new ResizeObserver(() => {
        if (!element) return;
        const width = element.clientWidth;
        const height = element.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      });
      resize.observe(element);
      renderer.setAnimationLoop((time) => {
        group.rotation.y += (targetY - group.rotation.y) * 0.05;
        group.rotation.x += (targetX - group.rotation.x) * 0.05;
        group.position.y = reduced ? 0 : Math.sin(time * 0.0007) * 0.07;
        raycaster.setFromCamera(pointer, camera);
        hovered = raycaster.intersectObjects(keys, false)[0]?.object as typeof hovered;
        keys.forEach((key) => { key.position.y += ((key === hovered ? 0.04 : 0.18) - key.position.y) * 0.2; });
        element.style.cursor = hovered ? "pointer" : "default";
        renderer.render(scene, camera);
      });
      setReady(true);
      cleanup = () => {
        resize.disconnect();
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
        element.removeEventListener("pointerdown", press);
        renderer.setAnimationLoop(null);
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        textures.forEach((texture) => texture.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
    }
    initialize().catch(() => setReady(false));
    return () => { disposed = true; cleanup(); };
  }, []);

  return <div className="tech-scene-wrap">
    <div ref={host} className="tech-scene" role="img" aria-label="Interactive 3D keyboard featuring Rishabh's technology stack" />
    {!ready && <div className="scene-fallback" aria-hidden="true">{technologies.slice(0, 5).map((name) => <span key={name}>{name}</span>)}</div>}
    <div className="scene-caption"><span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-success" />{selected}</span><span>MY EVERYDAY TOOLKIT</span></div>
  </div>;
}