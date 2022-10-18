---
layout: ../../../layouts/BlogPost.astro
title: "Some lessons from extreme A/B Testing"
publishDate: 2017-07-21 12:00:00 +0000
categories: lessons
description: "During my most recent job, I engaged in developing a range of A/B tests that challenged my thinking in terms of development and idea brainstorming, at a company that shifted their entire long-term strategy to A/B testing overnight. I took part in this for around 18 months, and learnt a few interesting lessons that I wanted to share."
tags: ["ab-testing"]
---

A/B Testing is a term for where a new variation of a certain element/component on a page is tested against its current version to find whether the change made a positive impact on users. In the case of my most recent employer, the positive impact was if the variation made users significantly more likely to convert (i.e. buy the product), but the end goal could be just to get users to sign up to a product. If the variation was found to significantly increase conversion, then the variation was rolled out as the new default, otherwise revert back to the default and try something else instead.

During my most recent job, I engaged in developing a range of A/B tests that challenged my thinking in terms of development and idea brainstorming, at a company that shifted their entire long-term strategy to A/B testing overnight. I took part in this for around 18 months, and learnt a few interesting lessons that I wanted to share (without revealing too much).

---

## Lesson 1: Expect the unexpected

I wasn’t prepared for what ideas did work and what didn’t work. Many assumptions I’d made about what would be successful and what would be disastrous were proven wrong very quickly.

Take for example, removing steps. In the checkout process, there were a number of steps that the user had to complete in order to complete their purchase, such as filling in contact details and selecting options. We assumed that removing some of these steps, or at least simplifying them, would mean the users find it easier, or quicker, to complete purchases.

Nope.

We actually found the _opposite_ to be true. Adding _more_ steps, and therefore making the buying process more difficult, made users more likely to convert. It was concluded that these hurdles (which gradually became more ridiculous) actually made users more committed to their purchase. We found limits eventually, but this surprised me to no end.

The lesson here was to expect the unexpected. I was forced to open my mind as to what could be a successful test.

## Lesson 2: Small changes only

This is something developers working in a business environment are forced to learn, sometimes the hard way. I learnt it the hard way.

Before A/B Testing became a priority at my previous job, I redesigned 2 key pages of the site from the ground up, to incorporate ideas and assumed benefits to the user’s experience. Both of them took weeks of planning and development. One succeeded, and the base design is still largely in use now. The other was very much the opposite.

The thing with making large changes at one time is that you can’t be sure what was successful and what wasn’t. That successful redesign may only have been successful due to a single small change, or the unsuccessful design may only have been unsuccessful due to a silent bug I hadn’t found or been reported. There was no way of knowing for sure; only assumptions could be made.

Therefore, work in the opposite way. Making small changes means less development time, quicker results, and data that’s easier to assess and make conclusions from.

## Lesson 3: Crazy ideas should be embraced

This loosely stems from “Expect the unexpected”, but it’s a separate thing to learn.

After a while of successful A/B tests, the new ideas being thought of by myself and colleagues started to get more and more… ridiculous. I’m talking annoying modals. Creating queues. Reverse psychology. Weather updates. Scrolling text. Things I initially disregarded as utter shite were being entered as serious ideas to develop and test.

Don’t get me wrong, some of these ideas did turn out to be pretty shite. But the majority turned out to be successful, despite every ounce of my being assuming that, upon seeing these things, users would happily douse their computers or devices in petrol fluid and blow them to smithereens.

Ultimately, some crazy ideas had to be shot down, due to business concerns, impracticality, or other factors. At the very least though, they had to be discussed, just like other ideas — and that’s the lesson here. No matter how crazy an idea may seem, it might just work anyway.

---

A/B testing is more powerful than many businesses seem to understand. It has the ability to change businesses from strugglers to leading powerhouses over just a few months, to instil excitement in developers and product managers, to have long-lasting effects on how successful a business actually is. I learnt a lot of lessons from the whole experience beyond what I’ve written here that I’ll take forward, but these were the most important ones I’d found.
