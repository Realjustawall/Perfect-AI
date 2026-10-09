# saas-marketing — independent recipe

**Domain:** Complete Page & Product Systems  
**Why it exists:** Pricing tiers, features, case studies, trial flow, FAQ and plan decision states.

## Configuration and boundaries
Inputs: product page map, data model, permissions, journeys and error state requirements.

## Step-by-step execution
1. State observable success behavior in one sentence: Pricing tiers, features, case studies, trial flow, FAQ and plan decision states.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

## Required acceptance
1. At least two functional end-to-end user journeys.
2. Every page includes realistic loading/error/empty state.
3. Keyboard/RTL/mobile deep links preserved.

## Example baseline (adapt to this topic)
```tsx
// State matrix matters more than a screenshot of the happy path.
type LoadState<T>={status:'loading'}|{status:'error';message:string}|{status:'empty'}|{status:'success';data:T};
function Content<T>({state,render}:{state:LoadState<T>,render:(data:T)=>React.ReactNode}){
 switch(state.status){case 'loading':return <p role="status">در حال بارگذاری…</p>;case 'error':return <p role="alert">{state.message}</p>;case 'empty':return <p>موردی یافت نشد.</p>;case 'success':return <>{render(state.data)}</>}
}
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [wcag](https://www.w3.org/TR/WCAG22/)
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)
