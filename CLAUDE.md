# Works in Prod — Claude Instructions

## Project overview

Docusaurus 3 blog site. Blog plugin is configured with `routeBasePath: "/"`, so posts are served at `/<slug>/`, not `/blog/<slug>/`.

## Blog file naming

Blog post filenames **must** use `kebab-case.md`, matching the `slug` frontmatter field exactly.

```
blog/the-blockers-dont-care-that-youre-using-ai.md   ✓
blog/The Blockers Dont Care That Youre Using AI.md   ✗
```

Docusaurus derives an implicit slug from the filename when no `slug` field is set. Keeping filename and slug aligned avoids drift.

## Blog frontmatter

Every post requires:

```md
---
title: "Title of the Post"
slug: title-of-the-post
date: 2026-01-01T00:00:00.000Z
authors: [ambersariya]
tags:
  - kebab-case-tag
---
```

- `slug` must be lowercase kebab-case with no apostrophes, no special characters.
- `date` must be an ISO 8601 timestamp.
- `authors` must reference a key defined in `blog/authors.yml`.
- Add `last_updated: YYYY-MM-DDThh:mm:ss.000Z` when editing an existing post.

## Linking between posts

Because `routeBasePath: "/"`, internal links to other posts use `/<slug>/` — **no `/blog/` prefix**.

```md
See [TDD and agents](/tdd-was-solving-the-agent-problem-before-agents-existed/)   ✓
See [TDD and agents](/blog/tdd-was-solving-the-agent-problem-before-agents-existed/)  ✗
```

Docusaurus is configured with `onBrokenLinks: "throw"`, so a wrong prefix will fail the build.

## Build

```bash
pnpm build   # fails hard on broken links — fix before pushing
pnpm start   # local dev
```

Pre-push hook runs `pnpm build`. Fix broken links rather than disabling the hook or setting `onBrokenLinks: "warn"`.
