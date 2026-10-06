export type SearchItem = {
  title: string
  description: string
  category: string
  href: string
  keywords: string[]
}

export const searchData: SearchItem[] = [
  {
    title: "কংক্রিটের স্লাম্প পরীক্ষা",
    description:
      "তাজা কংক্রিটের কাজের উপযোগিতা ও নমনীয়তা নির্ণয়ের একটি গুরুত্বপূর্ণ পরীক্ষা।",
    category: "কংক্রিট",
    href: "/knowledge/concrete/slump-test",
    keywords: [
      "স্লাম্প",
      "কংক্রিট",
      "slump",
      "concrete",
      "workability",
    ],
  },

  {
    title: "কংক্রিট মিক্স ডিজাইন",
    description:
      "নির্দিষ্ট শক্তি ও কাজের প্রয়োজন অনুযায়ী কংক্রিটের উপাদানের অনুপাত নির্ধারণ।",
    category: "কংক্রিট",
    href: "/knowledge/concrete/mix-design",
    keywords: [
      "মিক্স ডিজাইন",
      "কংক্রিট",
      "mix design",
      "concrete",
    ],
  },

  {
    title: "রড বা রিবার",
    description:
      "রিইনফোর্সড কংক্রিটে রডের ব্যবহার, প্রকারভেদ এবং প্রয়োজনীয় বিষয়।",
    category: "স্ট্রাকচারাল",
    href: "/knowledge/structural/rebar",
    keywords: [
      "রড",
      "রিবার",
      "rebar",
      "reinforcement",
      "স্টিল",
    ],
  },

  {
    title: "মাটির পরীক্ষা",
    description:
      "নির্মাণের আগে মাটির বৈশিষ্ট্য ও বহনক্ষমতা সম্পর্কে ধারণা পাওয়ার পদ্ধতি।",
    category: "সয়েল",
    href: "/knowledge/soil/field-test",
    keywords: [
      "মাটি",
      "soil",
      "field test",
      "bearing capacity",
    ],
  },

  {
    title: "সার্ভেয়িং ও লেভেলিং",
    description:
      "জমি ও নির্মাণ সাইটের উচ্চতা, দূরত্ব এবং অবস্থান নির্ধারণের মৌলিক ধারণা।",
    category: "সার্ভেয়িং",
    href: "/knowledge/surveying/leveling",
    keywords: [
      "সার্ভে",
      "survey",
      "surveying",
      "level",
      "leveling",
    ],
  },

  {
    title: "বিল্ডিং নির্মাণ",
    description:
      "ভিত্তি থেকে ছাদ পর্যন্ত একটি ভবন নির্মাণের গুরুত্বপূর্ণ ধাপগুলো।",
    category: "নির্মাণ",
    href: "/knowledge/building/construction",
    keywords: [
      "বিল্ডিং",
      "building",
      "construction",
      "ভবন",
    ],
  },

  {
    title: "অটোCAD 2D",
    description:
      "সিভিল ইঞ্জিনিয়ারিংয়ের প্রয়োজনীয় 2D ড্রইং ও ডিজাইনের মৌলিক ধারণা।",
    category: "অটোCAD",
    href: "/knowledge/autocad/2d",
    keywords: [
      "অটোক্যাড",
      "autocad",
      "2d",
      "drawing",
      "ড্রইং",
    ],
  },

  {
    title: "এস্টিমেট ও কস্টিং",
    description:
      "নির্মাণ প্রকল্পের পরিমাণ নির্ণয়, উপকরণ এবং আনুমানিক খরচ হিসাবের ধারণা।",
    category: "এস্টিমেট",
    href: "/knowledge/estimation/costing",
    keywords: [
      "এস্টিমেট",
      "estimate",
      "cost",
      "costing",
      "খরচ",
    ],
  },

  {
    title: "স্ট্রাকচারাল ডিজাইন",
    description:
      "ভবনের কাঠামোগত নিরাপত্তা, লোড এবং সদস্যগুলোর ডিজাইন সম্পর্কে প্রাথমিক ধারণা।",
    category: "স্ট্রাকচারাল",
    href: "/services/structural-design",
    keywords: [
      "structural",
      "structure",
      "design",
      "স্ট্রাকচারাল",
    ],
  },

  {
    title: "ভবন নির্মাণ সেবা",
    description:
      "আবাসিক ও বাণিজ্যিক ভবনের পরিকল্পনা এবং নির্মাণ ব্যবস্থাপনা।",
    category: "সেবা",
    href: "/services",
    keywords: [
      "ভবন",
      "নির্মাণ",
      "building",
      "construction",
    ],
  },
]