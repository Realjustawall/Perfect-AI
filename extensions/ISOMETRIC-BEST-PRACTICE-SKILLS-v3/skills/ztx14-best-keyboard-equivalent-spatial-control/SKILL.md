---
name: ztx14-best-keyboard-equivalent-spatial-control
description: Make isometric selection, navigation, drag, and world controls usable without a mouse or precise pointer movement.
---

# Give spatial object interactions keyboard equivalents

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Selectable buildings, SVG diagrams, drag-and-drop placement, panning/zooming, layered figures, or objects that respond to hover.

## Procedure
1. Keep important objects discoverable in a meaningful DOM order with semantic buttons/links or a documented composite-widget pattern.
2. Provide visible focus styling on the actual selectable object or an equivalent control list.
3. Map arrow keys, Enter/Space, Escape, and supported shortcuts to clear actions; document the mapping and avoid stealing keys while typing in forms.
4. Where spatial selection matters, expose the selected object name/state in accessible text and maintain a logical focus target after selection changes.
5. If the full spatial gesture cannot be replicated exactly, provide an outcome-equivalent control, not just an explanatory tooltip.
6. Test focus after object deletion, filtering, or route changes so focus never disappears into an unmounted node.

## Avoid
- Do not require pixel-precise keyboard navigation through a large scene without another selection method.
- Do not bind global shortcuts without checking focus context.
- Do not use tabindex values greater than 0 to force visual ordering.

## Acceptance checks
- [ ] Every essential object action has keyboard access.
- [ ] Focus order remains logical after state changes.
- [ ] Selected state is programmatically conveyed.

## Primary references
- https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html
- https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.
