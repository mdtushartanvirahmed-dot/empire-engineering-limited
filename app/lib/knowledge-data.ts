export type KnowledgeSection = {
  title: string
  paragraphs?: string[]
  points?: string[]
}

export type KnowledgeArticle = {
  slug: string
  title: string
  description: string
  category: string
  sections: KnowledgeSection[]
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "building-construction",
    title: "ভবন নির্মাণ",
    category: "ভবন নির্মাণ",
    description:
      "ভিত্তি, কলাম, বিম, স্ল্যাব থেকে ছাদ পর্যন্ত ভবন নির্মাণের গুরুত্বপূর্ণ বিষয়গুলোর মৌলিক ধারণা।",
    sections: [
      {
        title: "ভবন নির্মাণের প্রধান ধাপ",
        paragraphs: [
          "একটি ভবন নির্মাণের আগে জমির অবস্থা, মাটি পরীক্ষা, architectural drawing, structural design এবং প্রয়োজনীয় অনুমোদন নিশ্চিত করা গুরুত্বপূর্ণ।",
          "সাধারণভাবে site preparation, foundation, column, beam, slab, wall, roof এবং finishing ধাপে কাজ সম্পন্ন করা হয়।",
        ],
        points: [
          "সাইট প্রস্তুতকরণ ও layout",
          "মাটি পরীক্ষা ও foundation নির্বাচন",
          "ভিত্তি নির্মাণ",
          "কলাম ও বিম নির্মাণ",
          "স্ল্যাব নির্মাণ",
          "দেয়াল ও ছাদ নির্মাণ",
          "প্লাস্টার ও finishing কাজ",
        ],
      },
      {
        title: "ভিত্তি নির্মাণ",
        paragraphs: [
          "ভবনের load নিরাপদে মাটিতে স্থানান্তরের জন্য foundation অত্যন্ত গুরুত্বপূর্ণ। মাটির bearing capacity, ভবনের load এবং site condition অনুযায়ী foundation-এর ধরন নির্বাচন করা হয়।",
        ],
        points: [
          "Isolated footing",
          "Combined footing",
          "Strip footing",
          "Raft foundation",
          "Pile foundation",
        ],
      },
      {
        title: "কলাম, বিম ও স্ল্যাব",
        paragraphs: [
          "Reinforced concrete building-এ column, beam এবং slab একটি structural system হিসেবে কাজ করে। প্রতিটি structural member-এর dimension, reinforcement এবং concrete grade structural design অনুযায়ী নির্ধারণ করা উচিত।",
        ],
      },
      {
        title: "গুণগত মান নিয়ন্ত্রণ",
        paragraphs: [
          "নির্মাণকাজে concrete, reinforcement, brick, sand এবং অন্যান্য materials-এর quality যাচাই করা প্রয়োজন। Concrete casting-এর সময় proper mixing, placing, compaction এবং curing নিশ্চিত করা গুরুত্বপূর্ণ।",
        ],
        points: [
          "Material quality পরীক্ষা",
          "Reinforcement placement যাচাই",
          "Concrete workability পরীক্ষা",
          "Proper compaction",
          "সঠিক curing নিশ্চিত করা",
        ],
      },
    ],
  },

  {
    slug: "slump-test",
    title: "স্লাম্প টেস্ট",
    category: "কংক্রিট",
    description:
      "Fresh concrete-এর workability নির্ণয়ের জন্য ব্যবহৃত বহুল প্রচলিত slump test সম্পর্কে বিস্তারিত ধারণা।",
    sections: [
      {
        title: "স্লাম্প টেস্ট কী?",
        paragraphs: [
          "Slump test হলো fresh concrete-এর workability বা consistency নির্ণয়ের একটি সাধারণ field test। এটি concrete কতটা সহজে place ও compact করা যাবে সে সম্পর্কে ধারণা দেয়।",
        ],
      },
      {
        title: "পরীক্ষার মূল ধাপ",
        points: [
          "Slump cone সমতল জায়গায় স্থাপন করা",
          "Concrete নির্দিষ্ট ধাপে cone-এ ভরা",
          "প্রতিটি layer যথাযথভাবে compact করা",
          "Cone ধীরে vertical direction-এ উঠানো",
          "Concrete-এর slump পরিমাপ করা",
        ],
      },
      {
        title: "Slump-এর ধরন",
        points: [
          "True slump",
          "Shear slump",
          "Collapse slump",
        ],
      },
    ],
  },

  {
    slug: "mix-design",
    title: "কংক্রিট মিক্স ডিজাইন",
    category: "কংক্রিট",
    description:
      "প্রয়োজনীয় strength ও workability অনুযায়ী concrete mix design করার মৌলিক ধারণা।",
    sections: [
      {
        title: "মিক্স ডিজাইনের উদ্দেশ্য",
        paragraphs: [
          "Concrete mix design-এর উদ্দেশ্য হলো নির্দিষ্ট strength, durability এবং workability অর্জনের জন্য cement, water, fine aggregate ও coarse aggregate-এর উপযুক্ত অনুপাত নির্ধারণ করা।",
        ],
      },
      {
        title: "প্রধান বিষয়",
        points: [
          "Required compressive strength",
          "Water-cement ratio",
          "Aggregate grading",
          "Workability",
          "Durability",
          "Material properties",
        ],
      },
    ],
  },

  {
    slug: "field-test",
    title: "ফিল্ড টেস্ট",
    category: "সাইট পরীক্ষা",
    description:
      "নির্মাণ সাইটে মাটি, বালি, aggregate ও concrete-এর গুণগত মান যাচাইয়ের গুরুত্বপূর্ণ পরীক্ষাগুলো।",
    sections: [
      {
        title: "ফিল্ড টেস্টের গুরুত্ব",
        paragraphs: [
          "নির্মাণকাজে ব্যবহৃত materials-এর quality site-এই প্রাথমিকভাবে যাচাই করার জন্য বিভিন্ন field test করা হয়। এতে নিম্নমানের material ব্যবহারের ঝুঁকি কমানো যায়।",
        ],
      },
      {
        title: "গুরুত্বপূর্ণ পরীক্ষা",
        points: [
          "Concrete slump test",
          "Field density test",
          "Sand replacement test",
          "Aggregate impact test",
          "Moisture content test",
          "Soil compaction test",
        ],
      },
    ],
  },

  {
    slug: "leveling",
    title: "লেভেলিং",
    category: "সার্ভেয়িং",
    description:
      "জমির বিভিন্ন point-এর elevation নির্ণয় ও construction level নির্ধারণের মৌলিক surveying ধারণা।",
    sections: [
      {
        title: "লেভেলিং কী?",
        paragraphs: [
          "Surveying-এর একটি গুরুত্বপূর্ণ অংশ হলো leveling। এর মাধ্যমে বিভিন্ন point-এর relative elevation বা reduced level নির্ণয় করা হয়।",
        ],
      },
      {
        title: "ব্যবহৃত যন্ত্র",
        points: [
          "Auto level",
          "Dumpy level",
          "Digital level",
          "Levelling staff",
          "Tripod",
        ],
      },
      {
        title: "সাধারণ হিসাব",
        paragraphs: [
          "Rise and fall method অথবা Height of instrument method ব্যবহার করে বিভিন্ন point-এর reduced level নির্ণয় করা যায়।",
        ],
      },
    ],
  },

  {
    slug: "2d",
    title: "AutoCAD 2D ডিজাইন",
    category: "AutoCAD",
    description:
      "Civil engineering drawing, floor plan, section, elevation এবং dimensioning-এর জন্য AutoCAD 2D-এর মৌলিক ধারণা।",
    sections: [
      {
        title: "AutoCAD 2D কী কাজে ব্যবহার হয়?",
        paragraphs: [
          "Civil engineering-এ AutoCAD 2D ব্যবহার করে floor plan, elevation, section, site plan, structural drawing এবং বিভিন্ন construction drawing তৈরি করা হয়।",
        ],
      },
      {
        title: "গুরুত্বপূর্ণ কমান্ড",
        points: [
          "Line",
          "Polyline",
          "Circle",
          "Rectangle",
          "Offset",
          "Trim",
          "Extend",
          "Fillet",
          "Hatch",
          "Dimension",
        ],
      },
      {
        title: "Drawing-এর গুরুত্বপূর্ণ বিষয়",
        points: [
          "সঠিক scale ব্যবহার",
          "Layer management",
          "Dimensioning",
          "Text ও annotation",
          "Title block",
          "Drawing standards",
        ],
      },
    ],
  },

  {
    slug: "costing",
    title: "কনস্ট্রাকশন কস্টিং",
    category: "এস্টিমেশন",
    description:
      "নির্মাণকাজের quantity, rate এবং মোট সম্ভাব্য খরচ নির্ণয়ের মৌলিক ধারণা।",
    sections: [
      {
        title: "কস্টিং কী?",
        paragraphs: [
          "Construction costing-এর মাধ্যমে কোনো নির্মাণ প্রকল্পে materials, labour, equipment এবং অন্যান্য খরচ বিবেচনা করে সম্ভাব্য মোট ব্যয় নির্ণয় করা হয়।",
        ],
      },
      {
        title: "প্রধান ধাপ",
        points: [
          "Drawing ও specification পর্যালোচনা",
          "Quantity takeoff",
          "Material rate সংগ্রহ",
          "Labour cost নির্ণয়",
          "Equipment ও অন্যান্য খরচ",
          "Total project cost হিসাব",
        ],
      },
    ],
  },

  {
    slug: "highway",
    title: "হাইওয়ে ইঞ্জিনিয়ারিং",
    category: "হাইওয়ে",
    description:
      "রাস্তা ও highway planning, pavement এবং traffic-related engineering-এর মৌলিক ধারণা।",
    sections: [
      {
        title: "হাইওয়ে ইঞ্জিনিয়ারিং",
        paragraphs: [
          "Highway engineering-এর মধ্যে road planning, geometric design, pavement construction, drainage এবং traffic management-এর বিভিন্ন বিষয় অন্তর্ভুক্ত।",
        ],
      },
      {
        title: "রাস্তার গুরুত্বপূর্ণ অংশ",
        points: [
          "Carriageway",
          "Shoulder",
          "Median",
          "Camber",
          "Drainage",
          "Pavement layers",
        ],
      },
    ],
  },

  {
    slug: "water-drainage",
    title: "পানি ও ড্রেনেজ",
    category: "পানি ও ড্রেনেজ",
    description:
      "ভবন ও অবকাঠামোর stormwater drainage, surface water management এবং basic drainage system সম্পর্কে ধারণা।",
    sections: [
      {
        title: "ড্রেনেজের প্রয়োজনীয়তা",
        paragraphs: [
          "নির্মাণ এলাকায় পানি জমে থাকলে soil condition, pavement এবং building foundation ক্ষতিগ্রস্ত হতে পারে। তাই পরিকল্পিত drainage system অত্যন্ত গুরুত্বপূর্ণ।",
        ],
      },
      {
        title: "ড্রেনেজ ব্যবস্থার উপাদান",
        points: [
          "Surface drain",
          "Catch basin",
          "Culvert",
          "Pipe drainage",
          "Manhole",
          "Outfall",
        ],
      },
    ],
  },
]