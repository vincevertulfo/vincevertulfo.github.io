export const bio = [
    "👋, This is Vince, an experienced data engineer from the Philippines, now based in Melbourne. 🦘 ",
    `With over 5 years of experience in data engineering and a master’s degree in data science, 
    I’ve delivered scalable, high-impact solutions for organisations across healthcare, 
    financial services, energy, tech startups, and non-profits. I specialise in architecting 
    and optimising modern data platforms, integrating big data and advanced analytics to 
    solve complex business problems.`,
    `I have a strong track record in greenfield and transformation projects, working with 
    global teams and applying a consultative approach to ensure solutions align with 
    strategic goals. I’m passionate about building reliable data systems and helping 
    organisations get real value from their data.`,
    "Thanks for stopping by!",

];

export const skills = [
    {
        title: "Languages",
        skillName: "Python, SQL, Shell/Bash",
        color: "1",
        percentage: "100",
    },
    {
        title: "Databases",
        skillName: "SQL Server, PostgreSQL, BigQuery, MySQL",
        color: "6",
        percentage: "100",
    },
    {
        title: "Cloud",
        skillName: "Azure, AWS, GCP",
        color: "6",
        percentage: "100",
    },
    {
        title: "Data Platform",
        skillName: "Snowflake, Databricks, Fabric",
        color: "8",
        percentage: "100",
    },
    {
        title: "Data Processing",
        skillName: "Pandas, PySpark, dbt, duckdb",
        color: "4",
        percentage: "100",
    },
    {
        title: "Orchestration & ETL",
        skillName: "Azure Data Factory, Airflow, Glue, Dagster",
        color: "7",
        percentage: "100",
    },
    {
        title: "Data Visualisation",
        skillName: "Power BI, Tableau, QuickSight, Looker",
        color: "3",
        percentage: "100",
    },
    {
        title: "CI/CD",
        skillName: "Azure Devops, Github Actions",
        color: "5",
        percentage: "100",
    },
    {
        title: "Productivity",
        skillName: "Git, Jira, Miro",
        color: "9",
        percentage: "100",
    },
];

export const projects = {
    independentConsulting: [
        {
            projectName: "[Non-profit Organisation - USA]",
            image: "images/bffp.png",
            summary:
                "[Non-profit Organisation - USA] Transformed offline data collection into a streamlined online process, consolidating diverse sources into a MySQL database, providing actionable insights through data visualisation tools and facilitating global training on usage.",
            preview: "",
            techStack: ["Python", "SQL", "Airflow", "MySQL", "Excel"],
        },
        {
            projectName: "[Fitness Tech Startup - Singapore]",
            image: "images/active8me.png",
            summary:
                "[Fitness Tech Startup - Singapore] Developed and implemented a comprehensive dashboard solution, analysing key metrics and utilising MySQL views to drive executive reporting via AWS QuickSight.",
            preview: "",
            techStack: ["Python", "SQL", "MySQL", "AWS Quicksight", "Amazon Web Services"],
        },
        {
            projectName: "[Enterprise AI Startup - USA]",
            image: "images/dotdata.png",
            summary:
                "[Enterprise AI Startup - USA] Contributed to dashboard design and development, crafting Power BI and Tableau dashboards tailored for the External Sales team's onboarding and client pitching needs.",
            preview: "",
            techStack: ["Microsoft Power BI", "Tableau", "Python"],
        },
        {
            projectName: "[Women Healthcare Startup - Philippines]",
            image: "images/kindred.jpg",
            summary:
                "[Women Healthcare Startup - Philippines] Implemented Python-based ETL syncing Shopify, Google Sheets, Plato data to BigQuery, with pipeline monitoring, deployment on Google Cloud Functions, scheduled via Cloud Scheduler, and Looker Studio dashboards.",
            preview: "",
            techStack: ["Python", "SQL", "Google BigQuery", "Google Clod Functions", "Google Cloud Scheduler", "Looker"],
        },
    ],
    personal: [
        {
            projectName: "PH Stock Tweets Dashboard",
            image: "images/twitter.png",
            summary:
                "Developed an interactive dashboard on PH Stock Tweets Using Tweepy and Streamlit.",
            preview: "https://github.com/vincevertulfo/PHStock-tweets-dashboard",
            techStack: ["Python", "Streamlit", "Twitter API"],
        },
        {
            projectName: "Youtube Scraper",
            image: "images/youtube.png",
            summary:
                "Python scraper that takes a keyword and returns a list of youtube urls related to it.",
            preview: "https://github.com/vincevertulfo/youtube-scraper",
            techStack: ["Python", "Youtube API"],
        },
        {
            projectName: "E-Commerce Customer Segmentation",
            image: "images/scatter.jpg",
            summary:
                "Perfomed KMeans Clustering to group certain customers of an e-commerce store using RFM metrics.",
            preview: "https://github.com/vincevertulfo/customer-segmentation",
            techStack: ["Python", "Machine Learning", "Jupyter"],
        },
    ],
    selfLearning: [
        {
            projectName: "Dockerized ETL Pipeline",
            image: "images/etl.png",
            summary:
                "Containerized data pipeline using Python and MySQL.",
            preview: "https://github.com/vincevertulfo/python_mysql_pipeline",
            techStack: ["Python", "SQL", "Docker", "MySQL", "Microsoft Power BI"],
        },
    ],
    academe: [
        {
            projectName: "Time-to-sail Prediction",
            image: "images/architecture.png",
            summary:
                "Developed a FastAPI app for predicting optimal sailing times, enhancing decision-making for sailors, as part of my master's project deliverable.",
            preview: "https://github.com/vincevertulfo/yacht-tap-fastapi",
            techStack: ["Python", "FastAPI", "Render", "Machine Learning"],
        },
    ],
};

export const experience = [
    {
        title: "D2i Consulting",
        duration: "April 2024 - Present",
        subtitle: "Data Engineering Consultant",
        details: [
            "Pharmaceuticals/Healthcare: Migrated from on-prem SQL Server and Crystal Reports to Snowflake and Power BI.",
            "Energy: Developed Databricks-based data platform and Power BI reports."
        ],
        tags: ["SQL", "Python", "Snowflake", "Databricks", "Microsoft Power BI", "Azure Data Factory", "Azure DevOps", "CI/CD", "Microsoft Fabric", "dbt"],
        icon: "bolt",
    },
    {
        title: "InfoCentric",
        duration: "March 2023 - March 2024",
        subtitle: "Data Engineering Consultant",
        details: [
            "Financial Services: Built a greenfield data platform using Azure services for the v2 release of the company’s mobile app."
        ],
        tags: ["SQL", "Python", "Azure Data Factory", "Microsoft SQL Server", "Azure Functions", "Microsoft Power BI", "Azure DevOps", "CI/CD"],
        icon: "magnifying-glass-chart",
    },
    {
        title: "Synogize",
        duration: "April 2022 - February 2023",
        subtitle: "Data Engineering Consultant",
        details: [
            "Pharmaceuticals: Migrated Tableau reports to Power BI.",
            "Non-Profit: Built an end-to-end ETL pipeline in Azure for donation reporting."
        ],
        tags: ["SQL", "Python", "Azure Data Factory", "Microsoft Power BI", "Databricks", "Microsoft SQL Server", "Microsoft Azure"],
        icon: "lightbulb",
    },
    {
        title: "Luxclusif",
        duration: "June 2021 - February 2023",
        subtitle: "Data Engineer",
        details: [
            "Luxury Retail: Built a greenfield data platform on Azure and Databricks as part of the pioneering data engineering team."
        ],
        tags: ["SQL", "Python", "Azure Data Factory", "Databricks", "Microsoft Power BI", "Azure DevOps", "Microsoft SQL Server"],
        icon: "shirt",
    },
    {
        title: "CodingChiefs",
        duration: "September 2021 - December 2021",
        subtitle: "Senior Data Engineer (Contract)",
        details: [
            "Automotive: Designed and built an end-to-end AWS data pipeline, including architecture and technical documentation, for a Netherlands-based car company."
        ],
        tags: ["SQL", "Python", "AWS Lambda", "AWS Glue", "Amazon Web Services", "PostgreSQL", "PySpark", "GitHub Actions"],
        icon: "chart-line",
    },
    {
        title: "GoodWork.ph",
        duration: "April 2020 - May 2021",
        subtitle: "Product Data Analyst",
        details: [
            "Startup: First data hire post-seed funding, responsible for all data operations including reporting (operational, analytics, investor) and automation."
        ],
        tags: ["SQL", "Python", "Amazon Web Services", "Microsoft Power BI", "Google Cloud Platform"],
        icon: "mobile-screen-button",
    },
    {
        title: "Cobena Business Analytics & Strategy",
        duration: "July 2019 - April 2020",
        subtitle: "Business Analyst",
        details: [
            "Consulting: Delivered geospatial analysis, market research, and interactive dashboards for FMCG, wine, and education sectors."
        ],
        tags: ["Python", "Microsoft Power BI", "Tableau", "Microsoft Excel", "Geospatial Analysis"],
        icon: "chart-simple",
    }
];



export const education = [
    {
        title: "Master of Data Science",
        duration: "2022-2023",
        subtitle: "Swinburne Institute of Technology",
        details: ["George Swinburne Postgraduate Scholar"],
        tags: [],
        icon: "graduation-cap",
    },
    {
        title: "Bachelor of Science in Management Information Systems",
        duration: "2015-2019",
        subtitle: "Ateneo de Manila University",
        details: ["Specialisation in Data Science & Analytics"],
        tags: [],
        icon: "book",
    }
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "GitHub",
                link: "https://github.com/vincevertulfo",
            }
        ],
    },
    // {
    //     label: "Resources",
    //     data: [
    //         {
    //             text: "Enable Dark/Light Mode",
    //             func: "enableDarkMode()",
    //         },
    //         {
    //             text: "Print this page",
    //             func: "window.print()",
    //         },
    //         {
    //             text: "Clone this page",
    //             link: "https://github.com/vincevertulfo/vincevertulfo.github.io",
    //         },
    //     ],
    // },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/vincevertulfo/",
            }
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Vince Vertulfo.",
            "&copy; No Copyrights. (Template originally from @vinaysomawat).",
        ],
    },
];