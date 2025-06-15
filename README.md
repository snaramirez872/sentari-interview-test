# Sentari Interview Template

Welcome candidate! This repository is a **self-contained sandbox**. It does _not_ connect to any Supabase instance or external API; everything you need is already here.

---

## 1 Project Setup
```bash
pnpm install     # install locked dev-dependencies
pnpm lint        # ESLint + Prettier (zero warnings allowed)
pnpm test        # Vitest unit tests – must be green
cp env.example .env  # (optional) add your OpenAI key to run live calls
```

## 2 Domain Types & Mock Data
* `src/lib/types.ts` – exact TypeScript interfaces used in production.
* `Expanded_Diary_Entries.csv` – 200-row fixture at repo root (all DB columns).
* `src/lib/mockData.ts` – loads the CSV at runtime and exports it as `mockVoiceEntries`.
* `src/lib/openai.ts` – optional helper: if `OPENAI_API_KEY` is present it calls the real API, otherwise returns deterministic stubs so tests still pass offline.

> **Note:** the CSV mirrors our current production schema, but you're welcome to add extra columns in your local copy if your solution needs them (e.g. a temporary `score` field). Keep the original columns untouched so our automated checker can still parse the file.

## 3 Your Only Job
Open `src/lib/sampleFunction.ts` and complete the body of `processEntries()`.  
Requirements:
1. Pure & synchronous (no network or file-system side-effects unless you use the provided OpenAI helper).  
2. Must return a `ProcessedResult` object (defined in `types.ts`).  
3. Update / add tests in `tests/sampleFunction.test.ts` so coverage is > 90 %.  

## 4 Rules
✅ Do
* Keep TypeScript `strict` errors at **0**.
* Run `pnpm lint --fix` before commit.
* Document non-trivial logic with JSDoc.

🚫 Don't
* Touch files outside `src/` or modify config files.
* Add runtime dependencies (dev-deps are allowed if justified).
* Commit any secrets – keep your `.env` file local.

## 5 Submit
1. Push your fork / repo to GitHub (public or private link).  
2. Share the repo URL or a `patch.diff` file per the job portal instructions.

That's it — good luck and happy coding!