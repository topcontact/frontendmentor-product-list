# Frontend Project Instructions & Guidelines

For any future frontend projects, keep these rules in mind based on lessons learned from the "Product List with Cart" project:

## General Architecture & Setup
1.  **Data Flow First**: Always establish the core data flow and state management logic (e.g., placing items in a cart, counting quantities) before adding any stylistic CSS. Prove the logic works with raw HTML tags first.
2.  **Vite Asset Strategy**: Be aware of Vite's distinction between `/src` (processed module paths) and `/public` (static root paths).
3.  **Strict React Keys**: Always provide a unique `key` attribute when mapping arrays to prevent reconciliation bugs.

## CSS Best Practices (Performance & Scalability)
1.  **Semantic Containers**: Avoid "div soup". Use semantic tags like `<main>`, `<section>`, `<aside>`, `<ul>`, and `<li>` to ensure layout has meaning.
2.  **Accessibility (A11y)**:
    - Never use a `<p>` tag for a single word/label; use a `<span>` instead.
    - If an image/icon is purely decorative and repeats textual context (e.g., "Add to Cart" icon next to "Add to Cart" text), explicitly hide the image from screen readers using `alt="" aria-hidden="true"`.
3.  **Relative Units Over Fixed Pixels**: Never hardcode button dimensions or fonts with `px`. Always use `rem` (e.g., `width: 10rem` instead of `width: 160px`) to prevent layouts from breaking when users increase default font sizes.
4.  **Targeted Transitions**: Never use `transition: all`. It's bad for performance. Always target specific animating properties such as `transition: border-color 0.2s ease, background-color 0.2s ease`.
5.  **Design Tokens**: Define universal project colors and fonts in `:root` using variables to ensure future-proof theme maintainability.

## Professional Testing System
1.  **Unit Tests (Vitest)**: Write pure function tests to verify pure logic (e.g., mathematical sum of a cart total).
2.  **Integration Tests (React Testing Library)**: Simulate UI interactions to verify component connectivity (e.g., clicking a list item updates a separate sidebar state).
3.  **E2E Tests (Playwright)**: Automate full user journeys across the final browser build to catch regressions in mission-critical flows like checkouts.
