---
layout: ../../../layouts/BlogPost.astro
title: "My advice to new developers"
publishDate: 2019-04-02 12:00:00 +0000
categories: advice
description: "A small but broad list of things I would advise any new developer."
tags: ["tips", "mental-health", "katas"]
---

I’ve been imagining recently what advice I would give to folks just starting out as developers. I’m mainly, selfishly, thinking of what advice I would’ve appreciated at the time too, when I was a fresh-faced developer trying to understand why Eclipse maybe wasn’t that useful for writing CSS.

So I’ve put together a small list of things I would tell to any new developer. I’ve tried to broaden it too, rather than making it specific to the area that I know best (Front End Development).

---

## Shit happens

**Every** developer — yes, even the seniors — has made mistakes. Some worse than others, some more basic than others, but everyone has made them. They’re unavoidable, and they can strike down confidence within minutes.

As mentioned, the mistakes range in severity. Some are harmless mistakes caught in Pull Requests and rectified soon after. Some make relatively harmless mistakes that make it to production websites but don’t affect too many customers.

And then, there are the horrendous mistakes. You know, the ones that [cripple websites for hours](https://www.recode.net/2017/3/2/14792636/amazon-aws-internet-outage-cause-human-error-incorrect-command), or the ones that [blow up rockets](https://www.wired.com/2009/07/dayintech-0722/). I myself haven’t blown up a rocket, but I did make a mistake a couple of years back that led to a website losing a few thousand dollars in an hour or so ([I blogged about that separately](/posts/2019/shit-happens)).

Point is, humans make mistakes. You learn from them, you move on. Your peers should know this too and be understanding; if not, you probably shouldn’t be working with them.

## You don’t know everything

This is useful to remember when you’re asked a question, and you don’t know the answer. Don’t pretend you know the answer — no one likes that. It’s okay to admit that you don’t know something, but you’re interested to find out what it is. Take a note to research something you’ve not heard before, or to revise something that has slipped your mind.

## Google is your best friend

Yep, developers Google. A lot. No, it doesn’t show you’re rubbish at programming. I know from my (so far, fairly brief) experience as a Lead Developer that I’d way prefer a team member to Google something and solve it in 1 minute, rather than spending a load of time stuck on a single issue and throwing in the towel after a few hours. Hell, that’s why StackOverflow is as massive as it is. There’s a few key things to remember though, before you go heading to Google at every turn.

The first is to refine what exactly you’re typing into that search bar. If you’re not getting helpful results on the first try, your search term is probably too confusing to be comprehended possibly, or doesn’t reflect what other developers are asking. For instance, if you’re literally typing a question into Google, you may get inferior results to what you’d get when searching by keywords.

The second key point is not to mindlessly copy a solution you find online, without understanding what it is doing. Sure, you may be so desperate to try that solution that you don’t give a sod what it does exactly, but understanding what exactly is happening helps you develop _yourself_ and your own knowledge. It might even help you remember how to solve a similar problem without having to Google it next time.

The final key point, sort of related to the former, is to be able to read documentation about what to use, rather than rush for a random solution on a forum. For example, for developing for the web, [the MDN web docs](https://developer.mozilla.org/) are the premier online documentation for understanding what particular web technologies are expecting, what they return, and what they’re capable of doing.

## Learn those shortcuts

In the early days, you have a lot to learn about fundamentals of programming, but learning shortcuts for the tools you use should be something you learn too. Not only can it save you extremely valuable time during development, but it can also help make the experience less frustrating as a whole. You don’t want to waste time searching for a file desperately in an unending tree of folders, when you could use fuzzy search and save yourself from wasted time and frustration.

The most advantageous place to learn shortcuts is probably your chosen text editor or IDE (especially if you’re using Vim, where you’re basically _reliant_ on using keyboard shortcuts), but learning shortcuts in other common tools can be helpful too, such as Terminal, your preferred web browser, or even a website which supports keyboard shortcuts, such as [Trello](https://trello.com/).

## Do some katas

Code “Katas” are basically short challenges, where you create a programmatic solution to a problem or requirement. They can be completed in different languages (including JavaScript, Java, C# and Python), and usually involve using fundamental features of that language to solve the problem as efficiently as possible. The site usually then runs tests against your solution to check it works across a multitude of possible scenarios, to ensure your code can do its intended job.

They seem pointless sometimes, but they can genuinely help you build knowledge in those languages in practical ways. It’s how I thoroughly learnt of what the immutable Array methods of JavaScript were capable of doing. The services also usually provide solutions submitted by other developers, to compare your own solution with. I recommend [Codewars](https://www.codewars.com/) from personal experience (though it can be painfully slow to load when not paying them).

---

Hopefully these tips help in some form, and I’d love to hear what other people would advise new developers to do as well.
