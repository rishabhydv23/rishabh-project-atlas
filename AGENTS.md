<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio identity and content in the existing data module; visual redesigns must not replace personal facts.
- Render the interactive technology keyboard using Three.js loaded inside a client effect, with all scene colors sourced from global CSS tokens, to preserve SSR compatibility and centralized theming.
- Mount shared site navigation and footer in the root route so all portfolio pages have consistent navigation.
