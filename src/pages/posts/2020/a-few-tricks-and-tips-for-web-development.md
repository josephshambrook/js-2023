---
layout: ../../../layouts/BlogPost.astro
title: "A few tricks and tips for web development"
publishDate: 2020-10-13 14:06:31 +0000
lastEditDate: 2020-10-21 11:25:45 +0000
categories: advice
description: "Little things I have gathered up in 10 years of web development, and tends to raise interest when others spot them."
tags: ["tricks", "git", "setup"]
---

> I originally posted this article on dev.to, and migrated to my own site at a later point.

I thought my first post could be about little setup tricks that I've gathered during my 10 years of front-end development so far. Little things I don't really think twice about now, but still raise eyebrows when people watch me code (recently, fully virtually).

Let's get to it, I've got standup in a few minutes and some overdue inspiration has struck.

## Git Aliases

Writing `git` commands can get laboursome, sometimes annoying. The "ffs" moment of forgetting which parameter character to type at any given moment, or having to type the same command multiple times a day. To speed this up, I've added some Git aliases to allow me to type this same commands with much smaller keyboard footprint. I keep my current list as a [Gist on GitHub](https://gist.github.com/josephshambrook/dfe089d34f7222e75ca5cf68c95bb423) so I can grab them for any new computer I set up (which is surprisingly often as a contractor).

These are the ones I tend to use on an almost daily basis.

- `git a` = `git add --all`
- `git cm "[commit message]"` = `git commit -m "[commit message]"`
- `git co [branch name]` = `git checkout [branch name]`
- `git cob [new branch name]` = `git checkout -b [new branch name]`
- `git ps` = `git push`
- `git s` = `git status`

My full list also contains some to help with rebasing, which I'm usually doing as opposed to bog standard merges. This list is pretty basic, and may not **seem** like that add much value, but I find them helpful.

To use these aliases or set up your own, here's a step by step:

1. Open `~/.gitconfig` on your machine.
   - I'd recommend using Vim, as it will also auto-create the file if it doesn't exist already. Type `vi ~/.gitconfig` in your command line to use it. Do be aware of [how to save and exit](https://stackoverflow.com/questions/11828270/how-do-i-exit-the-vim-editor) if you never (or rarely) use it.
2. Add a new line at the bottom, and type `[alias]`
3. On individual new lines, type the commands you want to use in the format of `shortcut = command`. For example, `a = add --all`.
4. Save the file, and restart your terminal.

## Use Emmet

It's fine if you haven't heard of it, but you might have used it.

Emmet is a little tool that comes pre-installed in code editors like VS Code, and allows you to write short dynamic CSS snippets that expand to full-length HTML or JSX. For example:

```css
  div.a-class#an-id
```

Hit shift after writing the above in a HTML file or within JSX, and that expands to:

```html
<div class="a-class" id="an-id"></div>
```

That's a relatively basic example, but the real trick here is how powerful Emmet is, and how much it can speed up writing prototypes of code, particularly when it comes to repetition. It also contains shorthands for writing CSS properties.

I created a little [Emmet playground](https://emmet-playground.now.sh/) web app, which gives some examples of what's possible and lets you try out your own Emmet shorthands. I've used them a lot over the last few years, and I think they're worth investing a little practice to save some time in the future.

## Upgrading your terminal theme

The bog standard Terminal on Mac (or Powershell/cmd on Windows) does the job, but leaves some desire for things like themes and plugins. Upgrading your terminal means you gain these things but also get to have a little fun.

I'm not going to go too in-depth about setup instructions and all that, because any instructions I write may become outdated within seconds of me posting them. Instead I'll show off my setup a little, list the tools I use to achieve that, and link to an article I found helpful recently for setting up.

First off, my current setup looks like this:

!["A screenshot of my Terminal, displaying a status bar telling me useful info like what version of Git I'm using"](/assets/images/gfjnawrq20v3kljfezdu.png)

That status bar updates everytime I execute something, and shows my current Git branch and status, plus what version my project has in its `package.json`, plus what Node version I'm using. It also shows what version of Docker I'm using if my project contains a `Dockerfile`.

I'm currently using [Hyper](https://www.iterm2.com/) as my command line application of choice, but I've been a long-term user of [iTerm2](https://www.iterm2.com/) as well. I then use the [ohmyzsh framework](https://github.com/ohmyzsh/ohmyzsh) (which runs on [zsh](https://www.zsh.org/)) to make things work fancy with plugins, and a theme called [Spaceship](https://github.com/denysdovhan/spaceship-prompt) to make things look very fancy (and get those little status things in the screenshot above).

Whether you want to copy my setup or use something different, I'd recommend looking at [this article by Owen Caulfield](https://medium.com/@caulfieldOwen/youre-missing-out-on-a-better-mac-terminal-experience-d73647abf6d7), which goes into detail about what each of those things are and how to install them.

## Autocorrect for the terminal

I love this command line extension wonderfully named [thefuck](https://github.com/nvbn/thefuck). It looks back at your previous command and spots if you made a typo, figures out what you meant to type, and executes it for you. It enables you to have this wonderful experience and a good laugh:

!["A screenshot of a Terminal window. The first command contains a typo for git status, so the terminal returns an error. The second command is fuck, which correctly detected I meant to write git status, and runs it"](/assets/images/hj8ktwyh2czqb7004kpp.png)

## VS Code extensions

Like many other developers, I switched over to [VS Code](https://code.visualstudio.com/) a couple of years ago, and haven't batted an eyelid at other editors since. Unlike [it's bloated cousin](https://visualstudio.microsoft.com/), VS Code provides a great dev experience, especially for front-end developers, along with some cool debugging tools. However, the main attraction for me is the community developing plugins for it, and there's some real value in browsing the Marketplace and finding some extensions to upgrade your day-to-day coding frenetics.

Here's a list of my favourite extensions at the moment that I either actually use, or at least find helpful, on a near-daily basis:

- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - Meaty name for an extension that adds colors to your braces or brackets, to make them more easily scannable.
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Tells you at a glance what's wrong, if anything, with your code. Works well with any linters you may use, such as ESLint.
- [GitHub Theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme) - My favourite theme. Clean and simple.
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Although occasionally overbearing, this is quite a powerful extension for going through Git history and commits line-by-line.
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) - Have been helpful for me to quickly add some React boilerplate code.
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - Some essential and nice icons for nearly every file type imaginable.

---

I hope this is helpful or at least inspriational for other developers out there. A little tip if you want to see more of this - there's a few collections of devs and other professions collating what they use on their own websites, on "uses" pages. Here's a few of those collections:

- [uses.tech](https://uses.tech/)
- [awesome-uses (GitHub)](https://github.com/wesbos/awesome-uses)
- [uses this](https://usesthis.com/)
