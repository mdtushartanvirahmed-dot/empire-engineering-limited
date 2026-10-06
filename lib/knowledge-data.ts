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
    slug: "slump-test",
    title: "কংক্রিটের স্লাম্প পরীক্ষা",
    category: "কংক্রিট",
    description:
      "তাজা কংক্রিটের workability বা কাজের উপযোগিতা সম্পর্কে ধারণা পাওয়ার জন্য ব্যবহৃত গুরুত্বপূর্ণ একটি পরীক্ষা।",
    sections: [
      {
        title: "স্লাম্প পরীক্ষা কী?",
        paragraphs: [
          "স্লাম্প পরীক্ষা তাজা কংক্রিটের workability বা মিশ্রণটি কতটা সহজে পরিবহন, ঢালাই ও compact করা যায় সে সম্পর্কে ধারণা দেওয়ার একটি প্রচলিত field test।",
          "এই পরীক্ষায় নির্দিষ্ট আকৃতির একটি slump cone ব্যবহার করে কংক্রিটের নমুনার উপর পরীক্ষা করা হয়। Cone সরিয়ে নেওয়ার পর কংক্রিট কতটা নিচে নেমে যায় সেটিই মূলত slump হিসেবে বিবেচনা করা হয়।",
        ],
      },
      {
        title: "স্লাম্প পরীক্ষার উদ্দেশ্য",
        points: [
          "তাজা কংক্রিটের workability সম্পর্কে ধারণা পাওয়া।",
          "কংক্রিটের consistency পর্যবেক্ষণ করা।",
          "বিভিন্ন batch-এর consistency তুলনা করা।",
          "ঢালাইয়ের আগে মিশ্রণের আচরণ সম্পর্কে ধারণা পাওয়া।",
        ],
      },
      {
        title: "পরীক্ষায় সাধারণত যা প্রয়োজন",
        points: [
          "Slump cone",
          "Tamping rod",
          "সমতল ও পরিষ্কার base",
          "তাজা কংক্রিটের নমুনা",
          "পরিমাপের জন্য scale বা ruler",
        ],
      },
      {
        title: "পরীক্ষার সাধারণ ধাপ",
        points: [
          "Slump cone পরিষ্কার করে সমতল জায়গায় স্থাপন করা।",
          "Cone-এর ভিতরে তাজা কংক্রিট নির্ধারিত পদ্ধতিতে ভরা।",
          "প্রতিটি layer প্রয়োজনীয়ভাবে compact করা।",
          "উপরের অংশ সমান করে নেওয়া।",
          "Cone ধীরে ও সোজাভাবে উপরে তুলে নেওয়া।",
          "কংক্রিটের slump পরিমাপ করা।",
        ],
      },
      {
        title: "স্লাম্পের ধরন",
        paragraphs: [
          "পরীক্ষার ফলাফলে কংক্রিটের আচরণ দেখে সাধারণভাবে true slump, shear slump এবং collapse slump-এর মতো অবস্থা দেখা যেতে পারে।",
          "অস্বাভাবিক slump দেখা গেলে শুধু সংখ্যাটি দেখে সিদ্ধান্ত না নিয়ে mix proportion, পানি, aggregate, admixture এবং পরীক্ষার পদ্ধতিও বিবেচনা করা প্রয়োজন।",
        ],
      },
      {
        title: "গুরুত্বপূর্ণ সতর্কতা",
        points: [
          "পরীক্ষার যন্ত্রপাতি পরিষ্কার রাখতে হবে।",
          "নমুনা নেওয়ার পর অযথা দেরি করা উচিত নয়।",
          "পরীক্ষার সময় নির্ধারিত পদ্ধতি অনুসরণ করতে হবে।",
          "শুধু slump value দেখে concrete strength নির্ধারণ করা যায় না।",
          "প্রকল্পের specification ও প্রযোজ্য standard অনুসরণ করতে হবে।",
        ],
      },
    ],
  },

  {
    slug: "mix-design",
    title: "কংক্রিট মিক্স ডিজাইন",
    category: "কংক্রিট",
    description:
      "প্রয়োজনীয় strength, workability এবং durability বিবেচনায় কংক্রিটের উপাদানের অনুপাত নির্ধারণের মৌলিক ধারণা।",
    sections: [
      {
        title: "মিক্স ডিজাইন কী?",
        paragraphs: [
          "কংক্রিট মিক্স ডিজাইন হলো নির্দিষ্ট engineering requirement পূরণের জন্য cementitious material, পানি, fine aggregate, coarse aggregate এবং প্রয়োজনীয় admixture-এর উপযুক্ত পরিমাণ নির্ধারণের প্রক্রিয়া।",
          "সঠিক mix design-এর মাধ্যমে প্রয়োজনীয় strength, workability এবং durability অর্জনের চেষ্টা করা হয়।",
        ],
      },
      {
        title: "যে বিষয়গুলো বিবেচনা করা হয়",
        points: [
          "Required compressive strength",
          "Water-cement ratio",
          "Aggregate-এর grading ও quality",
          "Workability",
          "Exposure condition",
          "Cement বা binder-এর বৈশিষ্ট্য",
          "Admixture-এর প্রয়োজনীয়তা",
        ],
      },
      {
        title: "Water-Cement Ratio",
        paragraphs: [
          "Water-cement ratio কংক্রিটের গুরুত্বপূর্ণ একটি parameter। সাধারণভাবে অতিরিক্ত পানি concrete-এর strength ও durability-এর ওপর নেতিবাচক প্রভাব ফেলতে পারে।",
          "প্রয়োজনীয় workability পাওয়ার জন্য project specification এবং অনুমোদিত mix design অনুসরণ করা উচিত।",
        ],
      },
      {
        title: "Trial Mix",
        paragraphs: [
          "ল্যাবরেটরিতে trial mix তৈরি করে fresh concrete-এর workability এবং hardened concrete-এর strength পরীক্ষা করা হতে পারে। প্রয়োজন অনুযায়ী mix proportion সমন্বয় করা হয়।",
        ],
      },
    ],
  },

  {
    slug: "field-test",
    title: "মাটির মাঠ পরীক্ষা",
    category: "সয়েল ও ফাউন্ডেশন",
    description:
      "নির্মাণের আগে site soil সম্পর্কে প্রাথমিক ধারণা পাওয়ার জন্য ব্যবহৃত বিভিন্ন field investigation-এর পরিচিতি।",
    sections: [
      {
        title: "মাটি পরীক্ষা কেন প্রয়োজন?",
        paragraphs: [
          "একটি ভবনের foundation সরাসরি মাটির ওপর load transfer করে। তাই foundation design-এর আগে মাটির প্রকৃতি, strength, density এবং অন্যান্য engineering properties সম্পর্কে নির্ভরযোগ্য তথ্য প্রয়োজন।",
        ],
      },
      {
        title: "Field Investigation",
        points: [
          "Site reconnaissance",
          "Trial pit",
          "Borehole investigation",
          "Standard Penetration Test (SPT)",
          "Groundwater level observation",
        ],
      },
      {
        title: "SPT সম্পর্কে ধারণা",
        paragraphs: [
          "Standard Penetration Test বা SPT একটি বহুল ব্যবহৃত in-situ soil test। এর মাধ্যমে মাটির resistance সম্পর্কে field data পাওয়া যায় এবং geotechnical investigation-এ এটি গুরুত্বপূর্ণ ভূমিকা রাখে।",
        ],
      },
      {
        title: "Foundation-এর সঙ্গে সম্পর্ক",
        paragraphs: [
          "মাটির bearing characteristics, settlement এবং groundwater condition-এর মতো বিষয় foundation selection ও design-কে প্রভাবিত করতে পারে।",
        ],
      },
    ],
  },

  {
    slug: "leveling",
    title: "সার্ভেয়িং ও লেভেলিং",
    category: "সার্ভেয়িং",
    description:
      "নির্মাণ সাইটে বিভিন্ন point-এর elevation বা উচ্চতার পার্থক্য নির্ণয়ের মৌলিক ধারণা।",
    sections: [
      {
        title: "লেভেলিং কী?",
        paragraphs: [
          "Surveying-এর একটি গুরুত্বপূর্ণ অংশ হলো leveling। এর মাধ্যমে বিভিন্ন point-এর relative elevation নির্ণয় করা হয়।",
          "Building construction, road construction, drainage এবং site development-এ level information অত্যন্ত গুরুত্বপূর্ণ।",
        ],
      },
      {
        title: "লেভেলিংয়ের ব্যবহার",
        points: [
          "Foundation level নির্ধারণ",
          "Floor level নির্ধারণ",
          "Road formation level নির্ধারণ",
          "Drainage slope নির্ধারণ",
          "Site grading",
        ],
      },
      {
        title: "প্রধান যন্ত্রপাতি",
        points: [
          "Auto level",
          "Digital level",
          "Levelling staff",
          "Tripod",
          "Measuring accessories",
        ],
      },
    ],
  },

  {
    slug: "2d",
    title: "AutoCAD 2D ড্রইং",
    category: "অটোCAD",
    description:
      "সিভিল ইঞ্জিনিয়ারিংয়ের floor plan, elevation, section এবং বিভিন্ন technical drawing তৈরির মৌলিক ধারণা।",
    sections: [
      {
        title: "AutoCAD 2D কী?",
        paragraphs: [
          "AutoCAD 2D ব্যবহার করে বিভিন্ন technical drawing তৈরি করা যায়। সিভিল ইঞ্জিনিয়ারিংয়ে building plan, elevation, section, site plan এবং detailing-এর কাজে এটি ব্যাপকভাবে ব্যবহৃত হয়।",
        ],
      },
      {
        title: "সিভিল ড্রইংয়ে গুরুত্বপূর্ণ বিষয়",
        points: [
          "Drawing units",
          "Layers",
          "Dimensions",
          "Text ও annotation",
          "Line types",
          "Blocks",
          "Scale",
          "Plot settings",
        ],
      },
      {
        title: "ভালো drawing-এর বৈশিষ্ট্য",
        points: [
          "পরিষ্কার ও consistent layer ব্যবহার।",
          "সঠিক dimensioning।",
          "Drawing scale বজায় রাখা।",
          "Readable text ও annotation।",
          "Drawing standard অনুসরণ।",
        ],
      },
    ],
  },

  {
    slug: "costing",
    title: "এস্টিমেট ও কস্টিং",
    category: "এস্টিমেট",
    description:
      "নির্মাণকাজের quantity, material এবং সম্ভাব্য ব্যয় নির্ণয়ের মৌলিক ধারণা।",
    sections: [
      {
        title: "এস্টিমেট কী?",
        paragraphs: [
          "Construction estimate হলো একটি প্রকল্প সম্পন্ন করতে প্রয়োজনীয় কাজের পরিমাণ ও সম্ভাব্য খরচ নির্ণয়ের একটি পরিকল্পিত প্রক্রিয়া।",
          "সঠিক estimate project budgeting, procurement এবং planning-এ সহায়তা করে।",
        ],
      },
      {
        title: "Quantity Takeoff",
        points: [
          "Earthwork",
          "Concrete",
          "Brickwork",
          "Reinforcement",
          "Plaster",
          "Flooring",
          "Painting",
          "Other finishing works",
        ],
      },
      {
        title: "কস্টিংয়ে যেসব বিষয় বিবেচনা করা হয়",
        points: [
          "Material cost",
          "Labour cost",
          "Equipment cost",
          "Transportation",
          "Site overhead",
          "Wastage",
          "Contingency",
        ],
      },
      {
        title: "গুরুত্বপূর্ণ বিষয়",
        paragraphs: [
          "Material price, labour rate, project location এবং specification অনুযায়ী construction cost পরিবর্তিত হতে পারে। তাই বাস্তব project estimate তৈরির সময় বর্তমান বাজারদর ও project-specific information ব্যবহার করা প্রয়োজন।",
        ],
      },
    ],
  },
]