const pandaemonium = [
  {
    type: "category",
    label: "P1S - Erichthonios",
    items: [
      {type: "doc", id: "savage/pandaemonium/p1s/p1s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P2S - Hippokampos",
    items: [
      {type: "doc", id: "savage/pandaemonium/p2s/p2s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P3S - Phoinix",
    items: [
      {type: "doc", id: "savage/pandaemonium/p3s/p3s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P4S - Hesperos",
    items: [
      {type: "doc", id: "savage/pandaemonium/p4s/p4s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P5S - Proto-Carbuncle",
    items: [
      {type: "doc", id: "savage/pandaemonium/p5s/p5s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P6S - Hegemone",
    items: [
      {type: "doc", id: "savage/pandaemonium/p6s/p6s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P7S - Agdistis",
    items: [
      {type: "doc", id: "savage/pandaemonium/p7s/p7s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P8S - Hephaistos",
    items: [
      {type: "doc", id: "savage/pandaemonium/p8s/p8s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P9S - Kokytos",
    items: [
      {type: "doc", id: "savage/pandaemonium/p9s/p9s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P10S - Pandaemonium",
    items: [
      {type: "doc", id: "savage/pandaemonium/p10s/p10s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P11S - Themis",
    items: [
      {type: "doc", id: "savage/pandaemonium/p11s/p11s", label: "Intro"}
    ]
  },
  {
    type: "category",
    label: "P12S - Athena",
    items: [
      {type: "doc", id: "savage/pandaemonium/p12s/p12s_p1", label: "Intro (Phase 1)"},
      {type: "doc", id: "savage/pandaemonium/p12s/p12s_p2", label: "Intro (Phase 2)"}
    ]
  }
];

const endwalker_ex = [
  {
    type: "category",
    label: "EX6 - Golbez",
    items: [
      {type: "doc", id: "extreme/endwalker/ex6/ex6", label: "Intro"}
    ]
  }
]

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  /*tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],*/
  mySideBar: [
    {type: 'doc', id: 'Home', label: 'Home'},
    {type: 'doc', id: 'About this website', label: 'About this website'},
    {
      type: 'category',
      label: 'Savage',
      items: [
        {type: "category", label: "Pandaemonium", items: pandaemonium}
      ]
    },
    {
      type: 'category',
      label: 'Extreme',
      items: [
        {type: "category", label: "Endwalker", items: endwalker_ex}
      ]
    },
    {
      type: 'category',
      label: 'Criterion',
      items: [
        {
          type: "category", label: "Mount Rokkon", items: [
            {type: "doc", id: "criterion/mount_rokkon/mount_rokkon", label: "Intro"}
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
