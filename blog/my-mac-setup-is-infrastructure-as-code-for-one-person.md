---
title: My Mac Setup Is Infrastructure as Code for One Person
slug: my-mac-setup-is-infrastructure-as-code-for-one-person
description: A field note on using Homebrew, mise, and chezmoi to make a Mac reproducible without sanding off the human parts.
date: 2026-06-04T00:00:00.000Z
authors: [ambersariya]
tags:
  - macos
  - tooling
  - developer-experience
  - mise
  - chezmoi
---

I have become weirdly happy with my Mac setup.

Not because it is flashy. Not because every prompt, alias, and package has been tuned into some impossible productivity machine. I am happy with it because it has finally become calm.

My laptop feels less like a machine I have to remember how to rebuild and more like a small piece of infrastructure I can describe.

<!-- truncate -->

That is the bit I did not expect. This setup gives me the same feeling I used to get from good server bootstrap code. The old world of Chef cookbooks, Puppet manifests, Ansible playbooks, VM provisioning, and "please do not hand-fix the machine" had one core idea behind it: the machine should not be a mystery.

For some reason, a lot of us accepted that idea for servers years ago and then kept treating our laptops like handcrafted chaos.

My Mac setup now has the same shape as the infrastructure tooling I used to like, just pointed at one person's workstation:

- Homebrew owns the Mac layer.
- [mise](https://mise.jdx.dev/) owns the developer toolchain layer.
- [chezmoi](https://www.chezmoi.io/) owns the home-directory shape.

That split is the whole trick.

## The Setup Is Boring on Purpose

I do not want to remember where a runtime came from. I do not want to wonder whether a tool is being managed by the system, a package manager, a project-local wrapper, or something I installed during a late-night debugging session two laptops ago.

I want boring rules.

Homebrew installs the things that feel like Mac-level things: desktop apps, system packages, fonts, shells, and the bootstrap pieces that need to exist before anything else can work.

mise installs the things that feel like developer tools and runtimes:

```toml
[tools]
runtime-a = "latest"
runtime-b = "latest"
formatter = "latest"
search-tool = "latest"
```

chezmoi manages the files and decisions that make the machine feel like mine: shell startup, aliases, prompt setup, editor defaults, package inventories, and the scripts that check whether reality has drifted from the source.

None of that is clever by itself. The useful part is that each tool has a job and mostly stays in its lane.

When I need a Mac app, I think Homebrew.

When I need a language runtime or project-facing CLI, I think mise.

When I need a shell behavior or dotfile, I think chezmoi.

That is a much nicer mental model than "I probably installed this with whatever the README told me in 2021."

## mise Is the Toolchain Layer

I already wrote about using mise to make [project setup boring](/stop-arguing-with-your-terminal-about-python-versions/), so I will not rehash that whole argument here.

The short version: mise is where the developer toolchain belongs. Language runtimes, formatters, search tools, CLIs, and project-adjacent utilities all live behind one model. The exact list changes over time, but the ownership rule does not.

In this post, the important thing is not any specific tool. It is the boundary. If something is part of the developer toolbox, it goes in the toolchain layer instead of becoming another one-off shell snippet or README memory.

## chezmoi Is the Memory

chezmoi is the part that makes the setup feel like infrastructure instead of a pile of dotfiles.

The workflow is wonderfully unromantic:

```bash
chezmoi diff
chezmoi apply
chezmoi status
```

That is exactly what I want from workstation config. Show me what will change. Apply it when I am ready. Tell me when the rendered machine has drifted.

The other big win is templating. Some parts of a setup should be shared across machines. Some should absolutely not be hardcoded into a repo. The structure can be tracked, while machine-specific values live outside the public source.

That gives me a setup that is reproducible without pretending every context is identical.

The shell setup is where this pays off every day. Bash and zsh can share common interactive behavior. Aliases live in one place. PATH setup has a home. Optional shell helpers get initialized consistently. The rc files stop being junk drawers and start being entry points.

It feels small, but it changes how I edit the setup. I am no longer thinking, "Which file did I hack this into?" I am thinking, "Which layer owns this?"

That is infrastructure thinking, but for a laptop.

## The Old Cookbook Feeling, but Personal

The funny thing is that none of this feels new in spirit.

If you have used Chef cookbooks, Puppet modules, Ansible roles, cloud-init, golden images, or any other bootstrap tooling, the shape is familiar. You describe the desired machine. You stop trusting hand-applied changes. You make rebuilds less dramatic.

The vocabulary was always slightly different. Chef had cookbooks and recipes. Puppet had manifests and modules. Ansible had playbooks and roles. But the emotional payoff was the same: the machine stopped being a collection of remembered commands and became something you could rebuild from a source of truth.

What feels different is the scale.

The production system is not a fleet of servers. It is me. My shell. My editor habits. My prompt. My aliases. My ability to open a new terminal on a Monday morning and not spend the first fifteen minutes negotiating with my own computer.

That makes the setup feel more personal, not less.

There is a temptation to think reproducible setups have to become sterile. I have found the opposite. The more of my setup I can describe cleanly, the more comfortable I am making it mine. I can add a little alias, change a prompt theme, adjust a package list, or move a tool to the right owner because I know where the change belongs.

The machine still has taste. It just has fewer rituals.

## The Doctor Script Is Part of the Mood

One of my favorite pieces is not a package manager or a runtime manager. It is the boring check at the end.

After apply, a doctor script looks around and tells me whether the important pieces are present. Are the expected layers reachable? Did a package inventory drift? Did a rendered file stop matching the source?

This is not sophisticated observability. It is a small health check for a workstation.

But that is exactly why I like it. It turns "something feels off" into a list. It makes drift visible. It gives the setup a feedback loop.

That is another old infrastructure habit that belongs on laptops: do not rely on vibes when a small check will do.

## The Tradeoff Is Maintenance

This setup is not free.

You have to maintain the boundary between Homebrew, mise, and chezmoi. You have to review diffs. You have to resist the urge to paste random installer snippets into shell startup files. You have to update the source when you make a real change.

But that is the right kind of work.

I would rather maintain a visible source of truth than maintain a vague memory of how a machine became useful. I would rather ask "which layer owns this?" once than rediscover the answer every time I replace a laptop.

The goal is not to automate every possible thing. The goal is to make the important parts reviewable, repeatable, and boring enough that they stop occupying my head.

## A Well-Documented Pet

People like to say servers should be cattle, not pets. I understand the point, but I do not really want my laptop to be cattle. It is too personal for that.

I also do not want it to be a mysterious pet that only behaves because I remember the right incantations.

Maybe the right category is a well-documented pet.

It has preferences. It has personality. It has little affordances that make it feel like mine. But if it disappears tomorrow, I have a map. I know which tool owns which layer. I know how to review the change before applying it. I know the setup is not trapped in one physical machine.

That is what makes me happy about this setup.

Not that it is perfect. Not that it is minimal. Not that it is a public template everyone should copy exactly.

It is mine, and it is rebuildable.

That combination is the part I wanted all along.
