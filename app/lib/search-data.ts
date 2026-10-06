export type SearchItem = {
  title: string
  description: string
  category: string
  href: string
  keywords: string[]
}

export const searchData: SearchItem[] = [
  {
    title: "ভবন নির্মাণ",
    description:
      "ভিত্তি থেকে ছাদ পর্যন্ত একটি ভবন নির্মাণের গুরুত্বপূর্ণ ধাপ, উপকরণ ও প্রকৌশলগত বিষয়।",
    category: "নির্মাণ",
    href: "/knowledge/building-construction",
    keywords: [
      "বিল্ডিং",
      "building",
      "construction",
      "ভবন",
      "নির্মাণ",
    ],
  },

  {
    title: "কংক্রিটের স্লাম্প পরীক্ষা",
    description:
      "তাজা কংক্রিটের কাজের উপযোগিতা ও নমনীয়তা নির্ণয়ের একটি গুরুত্বপূর্ণ পরীক্ষা।",
    category: "কংক্রিট",
    href: "/knowledge/slump-test",
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
      "নির্দিষ্ট শক্তি ও কাজের প্রয়োজন অনুযায়ী কংক্রিটের উপাদানের অনুপাত নির্ধারণের মৌলিক ধারণা।",
    category: "কংক্রিট",
    href: "/knowledge/mix-design",
    keywords: [
      "মিক্স ডিজাইন",
      "কংক্রিট",
      "mix design",
      "concrete",
    ],
  },

  {
    title: "মাটির পরীক্ষা",
    description:
      "নির্মাণের আগে মাটির বৈশিষ্ট্য, অবস্থা ও বহনক্ষমতা সম্পর্কে ধারণা পাওয়ার গুরুত্বপূর্ণ পদ্ধতি।",
    category: "সয়েল",
    href: "/knowledge/field-test",
    keywords: [
      "মাটি",
      "soil",
      "field test",
      "bearing capacity",
      "soil test",
    ],
  },

  {
    title: "সার্ভেয়িং ও লেভেলিং",
    description:
      "জমি ও নির্মাণ সাইটের উচ্চতা, দূরত্ব এবং অবস্থান নির্ধারণের মৌলিক ধারণা।",
    category: "সার্ভেয়িং",
    href: "/knowledge/leveling",
    keywords: [
      "সার্ভে",
      "survey",
      "surveying",
      "level",
      "leveling",
    ],
  },

  {
    title: "অটোCAD 2D",
    description:
      "সিভিল ইঞ্জিনিয়ারিংয়ের প্রয়োজনীয় 2D ড্রইং ও ডিজাইনের মৌলিক ধারণা।",
    category: "অটোCAD",
    href: "/knowledge/2d",
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
      "নির্মাণ প্রকল্পের পরিমাণ নির্ণয়, উপকরণ এবং আনুমানিক খরচ হিসাবের মৌলিক ধারণা।",
    category: "এস্টিমেট",
    href: "/knowledge/costing",
    keywords: [
      "এস্টিমেট",
      "estimate",
      "cost",
      "costing",
      "খরচ",
      "quantity",
    ],
  },

  {
    title: "হাইওয়ে ইঞ্জিনিয়ারিং",
    description:
      "সড়ক ও মহাসড়ক নির্মাণের পরিকল্পনা, উপকরণ, স্তর এবং গুরুত্বপূর্ণ প্রকৌশলগত বিষয়।",
    category: "হাইওয়ে",
    href: "/knowledge/highway",
    keywords: [
      "হাইওয়ে",
      "highway",
      "road",
      "রাস্তা",
      "সড়ক",
      "pavement",
    ],
  },

  {
    title: "পানি নিষ্কাশন ও ড্রেনেজ",
    description:
      "বৃষ্টির পানি ও অন্যান্য পানি সঠিকভাবে অপসারণের জন্য ড্রেনেজ ব্যবস্থার মৌলিক ধারণা।",
    category: "ড্রেনেজ",
    href: "/knowledge/water-drainage",
    keywords: [
      "ড্রেনেজ",
      "drainage",
      "পানি",
      "water",
      "নিষ্কাশন",
      "storm water",
    ],
  },

  {
    title: "স্ট্রাকচারাল ডিজাইন",
    description:
      "ভবনের কাঠামোগত নিরাপত্তা, লোড এবং বিভিন্ন structural member সম্পর্কে প্রাথমিক ধারণা।",
    category: "স্ট্রাকচারাল",
    href: "/services",
    keywords: [
      "structural",
      "structure",
      "design",
      "স্ট্রাকচারাল",
      "লোড",
      "beam",
      "column",
    ],
  },

  {
    title: "ভবন নির্মাণ সেবা",
    description:
      "আবাসিক ও বাণিজ্যিক ভবনের পরিকল্পনা, নির্মাণ এবং প্রকল্প ব্যবস্থাপনা সংক্রান্ত সেবা।",
    category: "সেবা",
    href: "/services",
    keywords: [
      "ভবন",
      "নির্মাণ",
      "building",
      "construction",
      "service",
      "সেবা",
    ],
  },
]