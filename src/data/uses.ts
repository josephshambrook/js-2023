import { generateAmazonAssociatesLink } from "@src/utils/generators";

export type HardwareItem = {
  name: string;
  description?: string;
  link?: string;
};

export type SoftwareMacItem = {
  name: string;
  description?: string;
  link?: string;
};

export type SoftwarePhoneItem = {
  name: string;
  description?: string;
  link?: string;
};

export const hardware: HardwareItem[] = [
  {
    name: "MacBook Pro M1 (2021)",
    description:
      "Currently a shared laptop between my wife and I, which I use for personal work like this site. The performance on this thing is wonderful.",
  },
  {
    name: "Logitech K380",
    link: generateAmazonAssociatesLink("B013SL1YXO"),
    description:
      "My keyboard of choice for a few years. Cheap, allows easy switching between devices, and small to transport",
  },
  {
    name: "Logitech M720 Triathlon",
    link: generateAmazonAssociatesLink("B01KZVQB42"),
    description:
      "My current mouse, for the same easy switching as the keyboard, and some extra buttons for bringing up App expose on Mac",
  },
  {
    name: "iPhone 14 Pro",
    description: `My current phone. I used Android phones out of spite after Apple <a href="https://www.engadget.com/2016-09-07-courage-is-not-how-you-sell-iphones.html" target="_blank" rel="noopener noreferrer">"courageously"</a> removed the headphone jack, but Apple managed to lure me back a couple of years ago. I love the dynamic island on this one, and the apps are still better.`,
  },
  {
    name: "Bose QuietComfort 35 II",
    link: generateAmazonAssociatesLink("B0756CYWWD"),
    description:
      "I don't even remember when I bought these, but it was a long time ago now and they're still going strong. I replaced the cushions a little while ago, and they're as good as new.",
  },
  {
    name: "Under Armour Storm Recruit backpack",
    description:
      "Another piece of kit I've had for years and still going strong. I've used this for daily commutes, every trip I've been on, carrying tons of gear, and it's still in great condition. Not available anymore as far as I can see, but Under Armour outdid themselves with this one.",
  },
];

export const softwareMac: SoftwareMacItem[] = [
  {
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
    description: `I don't think there's a single developer left out there who hasn't at least tried VS Code. I used to be all-in with Sublime Text, but VS Code won me over eventually. My current theme of choice is <a href="https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2" target="_blank" rel="noopener noreferrer">Cobalt2</a> by Wes Bos.`,
  },
  {
    name: "Hyper",
    link: "https://hyper.is/",
    description:
      "Hyper has some really nice extensions and theming options, and it's pretty easy to use out of the box. I've tried others like iTerm and Warp, and Hyper still wins it for me.",
  },
  {
    name: "Arc",
    link: "https://arc.net/",
    description:
      "A beautiful browser that's fast and privacy-focused, with a nice command palette. Big selling point was having different profiles, so I can separate my work accounts from my personal accounts.",
  },
  {
    name: "1Password",
    link: "https://1password.com/",
    description: "The best password manager of them all.",
  },
  {
    name: "Notion",
    link: "https://www.notion.so/",
    description:
      "I nearly organise my entire life in Notion. Once you get past feeling overwhelmed by what it can do, it's an infinitely useful tool.",
  },
  {
    name: "YNAB (You Need A Budget)",
    link: "https://www.youneedabudget.com/",
    description:
      "I've budgeted money since my very first job as a spotty teenager, and YNAB has been my choice since around 2016. I love the philosophy behind it, and it's helped us plan everything from a wedding, holidays, a baby, a mortgage deposit, the lot.",
  },
  {
    name: "Amphetamine",
    link: "https://apps.apple.com/gb/app/amphetamine/id937984704",
    description:
      "A really nice utility app for keeping the screen display on, which is generously available totally for free.",
  },
  {
    name: "Magnet",
    link: "https://apps.apple.com/gb/app/magnet/id441258766",
    description: "My utility app of choice for window management.",
  },
];

export const softwarePhone: SoftwarePhoneItem[] = [
  {
    name: "Carrot Weather",
    link: "https://apps.apple.com/gb/app/carrot-weather/id961390574",
    description: "Weather with a sense of humour and a great UI.",
  },
  {
    name: "Pocket Casts",
    link: "https://www.pocketcasts.com/",
    description: `Great little independent podcast app, mostly for listening to <a href="https://syntax.fm/" target="_blank" rel="noopener noreferrer">Syntax.fm</a>.`,
  },
  {
    name: "Citymapper",
    link: "https://citymapper.com/",
    description:
      "My favourite transport app for getting around Edinburgh, London and nearly every city I visit.",
  },
  {
    name: "Reeder",
    link: "https://reederapp.com/",
    description:
      "I still use RSS feeds! Reeder has been my favourite iOS app since Google Reader got cut.",
  },
  {
    name: "Duolingo",
    link: "https://www.duolingo.com/",
    description:
      "I've been learning Danish 🇩🇰 for a few years now, and Duolingo has a great gamified way of learning.",
  },
  {
    name: "Spotify",
    link: "https://www.spotify.com/",
    description: "I still prefer Spotify to Apple Music.",
  },
  {
    name: "Apollo",
    link: "https://apps.apple.com/us/app/apollo-for-reddit/id979274575",
    description: "The best way to browse Reddit on iOS and iPadOS.",
  },
  {
    name: "Strava",
    link: "https://www.strava.com/",
    description: "Used whenever I run or cycle.",
  },
];
