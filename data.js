export const bio = [
    "👋, This is Vince, a data engineer from the Philippines based in Melbourne. 🦘 ",
    `Passionate data engineer with a master's degree in data science. Skilled in
    leveraging advanced analytics tools to drive impactful solutions across diverse
    industries such as healthcare, financial services, tech startups, and non-profit
    organisations. Combines hands-on technical expertise with a consultative
    approach to serve clients globally. Committed to specialising in Big Data, Data
    Engineering, and Cloud Computing.`,
    "Thanks for taking the time to learn a little about me!",
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
        title: "Cloud",
        skillName: "Azure, AWS, GCP, Databricks",
        color: "6",
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
        title: "InfoCentric",
        duration: "March 2023 - Present",
        subtitle: "Data Engineering Consultant (Full-time)",
        details: [
            "Work in progress..."
        ],
        tags: ["SQL", "Python", "Git", "Azure DevOps Services", "Azure Data Factory", "Microsoft SQL Server", "Microsoft Azure", "CI/CD", "Azure Functions"],
        icon: "magnifying-glass-chart ",
    },
    {
        title: "Synogize",
        duration: "April 2022 - February 2023",
        subtitle: "Data Engineering Consultant (Part-time)",
        details: [
            ` Deployed to several clients to assist with their data engineering
            requirements and perform tasks that include ETL, query optimisation,
            data modeling, and dashboarding`,
            `Migrated dashboards from Qlik to Power BI.`,
            `Assisted in data modelling a large dataset to fit Power BI’s star schema
            requirement.`,
            `Wrote technical documentation to assist the client with internal board
            approval for resource provisioning.`,
            `Built an ETL pipeline involving Azure Data Factory, ADLS Gen2, Azure SQL.`
        ],
        tags: ["SQL", "Python", "Azure Data Factory", "Microsoft Power BI", "Databricks", "Microsoft SQL Server", "Microsoft Azure"],
        icon: "lightbulb",
    },
    {
        title: "Luxclusif",
        duration: "June 2021 - February 2023",
        subtitle: "Data Engineer (Full-time)",
        details: [
            `Worked as a DE for a luxury brand retailer company, specifically under
            the Re-intelligence team which oversees enriching both the company’s
            current internal and external data.`,
            `Built ETL pipelines for the company’s OLAP system using Python, Azure
            Data Factory, Databricks to handle small to large data sets.`,
            `Migrated tables from Google BigQuery to Azure SQL Server using Azure
            Data Factory.`,
            `Participated in code review for verifying pull requests, deploying code
            changes from development environment to production using Azure
            DevOps.`,
            `Developed a POC to test out different Azure services such as Azure
            Cosmos DB and Azure ADLSGen2 which aided in selecting the team’s
            data lake/landing zone implementation.`,
            `Outlined and presented data models and table structures using
            LucidChart.`,
            `Created a Python class that automates the uploading of photos from an
            endpoint to our Azure Data Lake; deployed the class on Azure Databricks.`
        ],
        tags: ["SQL", "Python", "Git", "Azure DevOps Services", "Azure Data Factory", "Microsoft Power BI", "Databricks", "Microsoft SQL Server", "Microsoft Azure"],
        icon: "shirt",
    },
    {
        title: "CodingChiefs",
        duration: "September 2021 - December 2021",
        subtitle: "Senior Data Engineer (Contract)",
        details: [
            `Provisioned the necessary resources and set up the AWS ecosystem of
            one of the company’s car-company clients based in the Netherlands.`,
            `Proposed and developed a database schema design for the raw JSON
            files ingested in S3.`,
            `Designed an ETL flow from AWS S3 to AWS Aurora Postgres using AWS
            Glue.`,
            `Developed a CICD pipeline using GitHub Actions that automates the
            uploading and updating of .py files to AWS S3.`,
            `Created technical documentation for the company detailing how to
            maintain the ecosystem and why things were implemented as such.`,
        ],
        tags: ["SQL", "Python", "AWS Lambda", "Git", "AWS Glue", "Amazon Web Services", "PySpark", "PostgreSQL", "Github Actions"],
        icon: "chart-line",
    },
    {
        title: "GoodWork.ph",
        duration: "April 2020 - May 2021",
        subtitle: "Product Data Analyst (Full-time)",
        details: [
            `Hired as the first data guy of the company; directly reported to the CEO,
            and Head of Marketing`,
            `Automated the whole ETL process in building reports and monitoring
            company KPIs using Python and external APIs.`,
            `Tasked with consolidating insights from various data sources (Google
                BigQuery, AppsFlyer, MySQL) and sending out weekly performance
                reports for the company.`,
            `Developed a Python automation script that sends out daily email reports
            to easily monitor the performance of the previous days. Deployed the
            script on AWS EC2.`,
            `Analysed in-app events data and identified bottlenecks of the app’s
            customer journey using Google BigQuery and Python.`,
            `Created and designed PowerBI dashboards across different functions of
            the company.`,
        ],
        tags: ["SQL", "Python", "Git", "Amazon Web Services", "PySpark", "Microsoft Power BI", "Google Cloud Platform"],
        icon: "mobile-screen-button",
    },
    {
        title: "Cobena Business Analytics & Strategy",
        duration: "July 2019 - April 2020",
        subtitle: "Business Analyst (Full-time)",
        details: [
            `Implemented a clustering analysis using Python for an FMCG company
            that made use of geospatial factors to determine what the right
            assortment per store type is. The analysis helped the company plan the
            appropriate marketing plans for each assortment.`,
            `Performed a market analysis for a wine company to see and compare
            the growth trend of their brands and their competitors. Built a PowerBI
            dashboard to present the findings.`,
            `Created a Python geocoding script that maps out a list of student
            addresses into their corresponding latitude/longitude location, enabling
            the team to investigate further what kind of area the students from a
            specific institution live in.`
        ],
        tags: ["Python", "Git", "Microsoft Power BI", "Tableau", "Microsoft Excel"],
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