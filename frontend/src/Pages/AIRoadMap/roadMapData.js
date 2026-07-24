const roadmapData = {
  hero: {
    userName: "Akash",

    targetRole: "Full Stack Developer",

    targetCompanies: [
      "Google",
      "Amazon",
      "Microsoft",
    ],

    progress: 34,

    currentLevel: "Intermediate",

    totalDays: 90,

    remainingDays: 62,
  },

  todayMission: {
    title: "Master React Hooks",

    reason:
      "Your assessment shows weak understanding of React Hooks. Improving this topic can significantly boost your Frontend readiness.",

    estimatedTime: "45 mins",

    difficulty: "Intermediate",

    xp: 120,

    completed: false,
  },

  aiRecommendations: [
    {
      id: 1,

      title: "React Hooks",

      priority: "High",

      impact: "+8% Readiness",

      reason:
        "React Hooks had the lowest assessment score among your frontend skills.",
    },

    {
      id: 2,

      title: "DBMS",

      priority: "High",

      impact: "+12% Readiness",

      reason:
        "Database concepts are essential for your target companies.",
    },

    {
      id: 3,

      title: "Graphs",

      priority: "Medium",

      impact: "+6% Readiness",

      reason:
        "Graph algorithms are frequently asked by product-based companies.",
    },
  ],

  roadmap: [
    {
      week: 1,

      title: "Programming Fundamentals",

      progress: 100,

      topics: [
        {
          name: "HTML",
          completed: true,
        },

        {
          name: "CSS",
          completed: true,
        },

        {
          name: "JavaScript Basics",
          completed: true,
        },
      ],
    },

    {
      week: 2,

      title: "JavaScript Advanced",

      progress: 70,

      topics: [
        {
          name: "Functions",
          completed: true,
        },

        {
          name: "Objects",
          completed: true,
        },

        {
          name: "DOM",
          completed: false,
        },

        {
          name: "Events",
          completed: false,
        },
      ],
    },

    {
      week: 3,

      title: "React",

      progress: 25,

      topics: [
        {
          name: "Components",
          completed: true,
        },

        {
          name: "Props",
          completed: false,
        },

        {
          name: "State",
          completed: false,
        },

        {
          name: "Hooks",
          completed: false,
        },
      ],
    },
  ],

  countdown: {
    totalDays: 90,

    completedDays: 28,

    remainingDays: 62,

    averageTopicsPerDay: 2,

    completionPrediction: "On Track",
  },

  resources: [
    {
      id: 1,

      type: "Video",

      title: "React Hooks Crash Course",

      provider: "YouTube",

      duration: "42 mins",
    },

    {
      id: 2,

      type: "Documentation",

      title: "Official React Docs",

      provider: "React.dev",

      duration: "25 mins",
    },

    {
      id: 3,

      type: "Practice",

      title: "React Hooks Problems",

      provider: "LeetCode",

      duration: "10 Questions",
    },

    {
      id: 4,

      type: "Quiz",

      title: "React Hooks Assessment",

      provider: "Pathlytic AI",

      duration: "15 Questions",
    },
  ],
};

export default roadmapData;