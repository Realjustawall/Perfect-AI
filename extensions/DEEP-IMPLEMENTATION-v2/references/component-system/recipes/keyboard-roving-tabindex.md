# keyboard-roving-tabindex — independent recipe

**Domain:** Component Architecture & Design System  
**Why it exists:** Use roving tabindex for composite widgets rather than multiple tabbable duplicates.

## Configuration and boundaries
Inputs: props, interaction state diagram, design tokens, headless library selection and target languages.

## Step-by-step execution
1. State observable success behavior in one sentence: Use roving tabindex for composite widgets rather than multiple tabbable duplicates.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: type component contract, semantic DOM, controlled state, focus lifecycle, variants, empty/error/loading success; bind framework adapter to same behavior.

## Required acceptance
1. Semantic names, roles, values and focus are correct.
2. Every variant has loading/error/empty/disabled/keyboard where relevant.
3. Storybook stories cover RTL, themes and narrow containers.

## Example baseline (adapt to this topic)
```tsx
interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { busy?: boolean }
function ActionButton({busy=false,disabled,children,...rest}:ActionButtonProps){
  return <button {...rest} type={rest.type ?? 'button'} disabled={busy || disabled} aria-busy={busy}>{busy ? 'در حال انجام…' : children}</button>
}
// The button remains semantic and keyboard-operable; loading feedback must not erase context.
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [storybook](https://storybook.js.org/docs)
- [radix](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [ark](https://ark-ui.com/docs/overview/introduction)
- [shadcn](https://ui.shadcn.com/docs)
- [headless](https://headlessui.com/)
