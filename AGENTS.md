## Pointers to installed rulebooks

- **UI/UX Guidelines:** Read `.agents/rules/UIUX_GUIDELINES.md` before making layout, design, or styling changes.
- **Product Scope (PRD):** Read `.agents/rules/PRD.md` for feature boundaries and scope. Do not create unrequested components.
- **Copywriting Rules:** Read `.agents/rules/COPYWRITING_GUIDELINES.md` when writing or editing text content.
- **antislop skills:** Read `.opencode/plugins/` and `.agents/skills/` for active guardrails.
- **Ponytail:** (`@dietrichgebert/ponytail`) controls minimal-code intensity via `/ponytail lite|full|ultra|off`.

# Anti-slop & zero-fluff directives

These directives are always active for every agent, every task, in this workspace.

## Never

- No meta-talk about being an AI/model/LLM.
- No fluff intros or closers ("Great question!", "Hope this helps!").
- No restating the user's request before acting, no summary-of-the-summary.
- No redundant code comments restating obvious behavior; comments only for non-obvious invariants, workarounds, or traps.
- No broad type suppressions (`any`, `@ts-ignore`, `eslint-disable` without a scoped inline reason).
- No speculative code for future requirements (YAGNI).
- No invented specifics: fabricated stats, testimonials, benchmarks, version numbers, citations.
- No voice-slop vocabulary ("delve", "unlock", "elevate", "seamlessly", "robust suite", "game-changer"), rule-of-three padding, synonym cycling, emoji in code/docs/commits.
- No generating build/dist outputs or temporary packages inside `.opencode/` or source tree without automatic clean-up.
- **NEVER run long-running background server processes or preview servers (e.g., `npm run preview`, `vite preview`, `Start-Process`) during task execution.**

## Always

- Answer directly first; elaborate only if asked.
- Prefer editing existing files, prefer deleting code over adding it.
- For large tasks: one-line plan, then execute.
- Report results as: what changed, where (file:line), how verified.
- Don't echo file contents; reference by path and line numbers.
- Ignore `node_modules`, `dist`, `.vercel`, and `.opencode` directories during workspace file indexing or context gathering.
- **ALWAYS run `npx lint` or `npm run lint` on every prompt/turn before finalizing code changes to verify clean execution.**

## Project specifics (nongslab-com)

- Vite + React 19 + Tailwind 3 marketing site. `src/component/` (sic) and `src/component/section/` hold the page sections; keep new sections consistent with that layout.
- Run `npm run dev` for the dev server, `npm run build` to verify a production build.
- No `.DS_Store` or stray build junk in commits.

## Pointers to installed rulebooks

- **UI/UX Guidelines:** Read `.agents/rules/UIUX_GUIDELINES.md` before making layout, design, or styling changes.
- **Product Scope (PRD):** Read `.agents/rules/PRD.md` for feature boundaries and scope. Do not create unrequested components.
- **Copywriting Rules:** Read `.agents/rules/COPYWRITING_GUIDELINES.md` when writing or editing text content.
- **antislop skills:** Read `.opencode/plugins/` and `.agents/skills/` for active guardrails.
- **Ponytail:** (`@dietrichgebert/ponytail`) controls minimal-code intensity via `/ponytail lite|full|ultra|off`.