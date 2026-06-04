---
title: My Mac Setup Is Infrastructure as Code for One Person
slug: my-mac-setup-is-infrastructure-as-code-for-one-person
template: pattern-note
tags:
  - macos
  - tooling
  - developer-experience
  - mise
  - chezmoi
---

## Core claim

A developer laptop can be treated like a small piece of infrastructure when
Homebrew, mise, and chezmoi each own a clear layer of the setup.

## Allowed material

- Homebrew owns the Mac package and app layer
- mise owns the developer toolchain layer
- chezmoi owns shell setup, dotfiles, templates, and reviewable apply/diff workflows
- Old VM bootstrap tooling and cookbook/playbook patterns as an analogy
- The machine remains personal while becoming rebuildable
- Drift checks as a small workstation feedback loop

## Avoid

- Machine-specific paths
- Real account details
- Exact tool inventories
- Sensitive operational setup details
- Exact organisation or workplace context
- Unpublished setup history beyond the approved article idea
