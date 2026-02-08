# Accessibility audit checklist (WCAG 2.1 / Sigma 6–oriented)

Use this when auditing for **WCAG 2.1**, **NIST**, or **ISO**-style compliance (e.g. high conformance for an international NGO).

## Perceivable

- [ ] **1.1.1 Non-text content**: All images have text alternatives (`alt` or `aria-label`). Placeholder blocks use `aria-label`.
- [ ] **1.3.1 Info and relationships**: Structure conveyed via semantic HTML (headings, sections, `role="banner"`, `main`, `contentinfo`, `navigation`).
- [ ] **1.3.2 Meaningful sequence**: DOM order matches visual order; no layout-only reordering that breaks meaning.
- [ ] **1.4.1 Use of color**: Information not conveyed by color alone (links underlined, focus visible).
- [ ] **1.4.3 Contrast (AA)**: Text meets 4.5:1 (normal), 3:1 (large). Backgrounds use `--color-text` on `--color-bg` / `--color-surface`.
- [ ] **1.4.4 Resize text**: Layout works up to 200% zoom (fluid typography, no fixed px heights for content).
- [ ] **1.4.10 Reflow (AA)**: No horizontal scroll at 320px width; responsive layout.
- [ ] **1.4.12 Text spacing (AA)**: No loss of content when user applies increased line/paragraph/letter/word spacing (no overflow hidden on text).
- [ ] **1.4.13 Content on hover/focus**: No critical content that appears only on hover/focus without dismissible, hoverable, and persistent behavior (none used).

## Operable

- [ ] **2.1.1 Keyboard**: All functionality available via keyboard (links, buttons, skip link).
- [ ] **2.1.2 No keyboard trap**: Focus not trapped (modal-free design).
- [ ] **2.2.1 Timing**: No time limits; no auto-advance.
- [ ] **2.2.2 Pause, stop, hide**: No auto-updating content that can’t be paused.
- [ ] **2.3.1 Three flashes**: No flashing content.
- [ ] **2.4.1 Bypass blocks**: Skip link to main content.
- [ ] **2.4.2 Page titled**: `<title>` and `h1` describe the page.
- [ ] **2.4.3 Focus order**: Logical tab order (header → main → footer).
- [ ] **2.4.4 Link purpose**: Link text (and context) make purpose clear; external links indicated.
- [ ] **2.4.5 Multiple ways**: Nav and in-page sections provide multiple ways to reach content.
- [ ] **2.4.6 Headings and labels**: Descriptive headings (`aria-labelledby` on sections where needed).
- [ ] **2.4.7 Focus visible**: Visible focus indicator (`:focus-visible` outline with offset).

## Understandable

- [ ] **3.1.1 Language of page**: `lang="en"` on `<html>`.
- [ ] **3.2.1 On focus**: No change of context on focus.
- [ ] **3.2.2 On input**: No change of context on input (except submit).
- [ ] **3.3.1 Error identification**: No forms that require error handling on this landing page (donate links out).
- [ ] **3.3.2 Labels or instructions**: N/A for current content.

## Robust

- [ ] **4.1.1 Parsing**: Valid HTML (use validator).
- [ ] **4.1.2 Name, role, value**: Buttons and links have accessible names; nav has `aria-label`.
- [ ] **4.1.3 Status messages**: N/A unless dynamic messages added later.

## Additional (AAA / best practice)

- [ ] **Reduced motion**: `prefers-reduced-motion: reduce` respected (scroll behavior, transitions).
- [ ] **External links**: `rel="noopener noreferrer"` and “opens in new window” text.
- [ ] **Accessibility statement**: [accessibility.html](accessibility.html) published and linked from footer.

## Quick tests

1. **Keyboard**: Tab through entire page; activate skip link, all nav links, and buttons.
2. **Screen reader**: Navigate by headings and landmarks; confirm link purposes and section names.
3. **Zoom**: 200% at 320px width — no horizontal scroll, no clipped content.
4. **Contrast**: Use DevTools or contrast checker on body text and links.

After filling placeholders (images, real news, schedule), re-check alt text and any new interactive components.
