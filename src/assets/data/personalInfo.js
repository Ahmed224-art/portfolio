import rms from '../images/projects/rms.png'
import staywo from '../images/projects/staywo.png'
import frusiya from '../images/projects/frusiya.png'
import satafood from '../images/projects/satafood.png'


import news1 from '../images/example/news1.png'
import news2 from '../images/example/news2.png'
import news3 from '../images/example/news3.png'
import news4 from '../images/example/news4.png'
import news5 from '../images/example/news5.png'
import news6 from '../images/example/news6.png'
import news7 from '../images/example/news7.png'
import news8 from '../images/example/news8.png'

///////////////////////////////////////
import commerce1 from '../images/example/commerce1.png'
import commerce2 from '../images/example/commerce2.png'
import commerce3 from '../images/example/commerce3.png'
import commerce4 from '../images/example/commerce4.png'
import commerce5 from '../images/example/commerce5.png'
//////////////////////////////////////////////
import dentunity from '../images/example/dentunity.png'
/////////////////////////////////////////////
import todograph from '../images/example/todograph.png'
//////////////////////////////////////////////
import chatai from '../images/example/cahtai.png'
//////////////////////////////////////////////
import devops1 from '../images/example/SCREENSHOT01.png'
import devops2 from '../images/example/SCREENSHOT02.png'
import devops3 from '../images/example/SCREENSHOT03.png'
import devops4 from '../images/example/SCREENSHOT04.png'
import devops5 from '../images/example/SCREENSHOT05.png'
import devops6 from '../images/example/SCREENSHOT06.png'
import devops7 from '../images/example/SCREENSHOT07.png'
import devops8 from '../images/example/SCREENSHOT08.png'
import devops9 from '../images/example/SCREENSHOT09.png'
import devops10 from '../images/example/SCREENSHOT10.png'
import devops11 from '../images/example/SCREENSHOT11.jpg'
import devops12 from '../images/example/SCREENSHOT12.jpg'
import { certificatesData } from './certificates'

const newsPics = [news7, news1, news2, news3, news4, news5, news6, news8]
const news = newsPics[Math.floor(Math.random() * newsPics.length)];
const commercePics = [commerce1, commerce2, commerce3, commerce4, commerce5]
const commerce = commercePics[Math.floor(Math.random() * commercePics.length)];
const devopsPics = [devops1, devops2, devops3, devops4, devops5, devops6, devops7, devops8, devops9, devops10, devops11, devops12]
const devops = devopsPics[Math.floor(Math.random() * devopsPics.length)];

export const personalInfo = {
  personalProfile: [
    {
      firstName: "Abdo",
      lastName: "Gomaa",
      occupation: "Back-end Developer",
      city: "Cairo",
      country: "Egypt",
      email: "abdo20010d0@gmail.com",
      phone: "+201151761416",
      socialMediaLinks: {
        linkedInUrl: "https://www.linkedin.com/in/abdo-gomaa-672763119",
        githubUrl: "https://github.com/abdo20010dx",
      },
    },
  ],
  education: [
    // {
    //   id: 1,
    //   schoolName: "Alexandria University",
    //   degree: "Master's Degree",
    //   speciality: `Mediation and Conflict Resolution`,
    //   city: "Bucharest",
    //   year: {
    //     start: "2014",
    //     end: "2015",
    //   },
    // },
    {
      id: 2,
      schoolName: `Alexandria University`,
      degree: `Bachelor's Degree In management information systems`,
      speciality: `The Faculty of business`,
      city: "Alexandria",
      year: {
        start: "2018",
        end: "2021",
      },
    },
  ],

  jobs: [
    {
      id: "job1",
      title: "Backend Developer",
      company: "Degital Zone",
      type: "full-time",
      year: {
        start: "2021",
        end: "2022",
      },
      city: "Cairo",
      description: [
        "Design Erd.",
        "Create server-sdie apps",
        "problem-solving",
        " Daily website maintenance.",
        "Custom API integrations.",
        "Creating Restaurant management system , point of sale , inventory management system , webscrapping app"
      ],
    },
    {
      id: "job2",
      title: "Backend Developer",
      company: "Dafa",
      type: "full-time",
      year: {
        start: "2022",
        end: "2023",
      },
      city: "Cairo",
      description: [
        "Design Erd.",
        "Create server-sdie apps",
        "problem-solving",
        " Daily website maintenance.",
        "Custom API integrations.",
        "worked on apps that related to the activities of the international horse race held at King Abdulaziz Racetrack in Riyadh, Saudi Arabia. It is the richest horse race ever held, with a $20 million purse. It is the main highlight race of the Saudi Cup Night"

      ],

    },
    {
      id: "job3",
      title: "Backend Developer",
      company: "Degital Zone",
      type: "part-time",
      year: {
        start: "2022",
        end: "present",
      },
      city: "Cairo",
      description: [
        "Design Erd.",
        "Create server-sdie apps",
        "problem-solving",
        " Daily website maintenance.",
        "Custom API integrations.",
        "Creating Restaurant management system , point of sale , inventory management system , webscrapping app"

      ],
    },

    {
      id: "job4",
      title: "Senior Backend Developer",
      company: "Sata Technology",
      type: "full-time",
      year: {
        start: "2023",
        end: "2024",
      },
      city: "Cairo",
      description: [
        " Developed and implemented commercial strategies according to company goals and objectives aimed to accelerate growth.",
        "Managed the day-to-day business operations, with an initial focus on sales.",
        "Market analysis and research to create business plans on commercial opportunities (expansion, business development).",
      ],
    },
    // {
    //   id: "job5",
    //   title: "Senior Sales Agent",
    //   company: "ALEEA TRADING S.R.L.",
    //   year: {
    //     start: "2014",
    //     end: "2014",
    //   },
    //   city: "Bucharest",
    //   description: [

    //     "Worked closely with the owner to improve quality standards for customer satisfaction.",
    //     "Was trusted with special projects to help my team sell better and be more motivated.",
    //     "Maintained good connections with all suppliers in the market.",
    //   ],
    // },
    // {
    //   id: "job6",
    //   title: "Pawnbroker Assistant",
    //   company: "ROGEF LUCKY GOLD IFN",
    //   year: {
    //     start: "2010",
    //     end: "2013",
    //   },
    //   city: "Slatina",
    //   description: [
    //     "Managed and optimized the contract database.",
    //     "Analyzed and processed returns.",
    //     "Advised clients on how to obtain loans.",
    //   ],
    // },
  ],

  skills: {
    codingSkills: [
      {
        id: "skills1",
        category: "Front-End",
        languages: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React JS",
          "React Hooks",
          "React Router",
          "Redux",
          "REST APIs",
          "Material UI",
          "Bootstrap",
          "Next.JS"
        ],
      },
      {
        id: "skills2",
        category: "Back-End",
        languages: ["Nest.JS", "Node.JS", "Java", "Spring-Boot", "REST APIs", "GraphQl", "websocket", "RabbitMQ", "swagger"],
      },
      {
        id: "skills3",
        category: "Databases",
        languages: ["PostgreSQL", "MySql", "mongodb", "mongoose", "migration", "orm (typeorm , prisma)"],
      },
      {
        id: "skills4",
        category: "Source Control",
        languages: ["Git", "GitHub"],
      },
    ],
    languages: [
      {
        id: "lang1",
        title: "Arabic",
        level: "mother tongue",
      },
      {
        id: "lang2",
        title: "English",
        level: "Professional",
      },
    ],
    softSkills: [
      `Highly motivated`,
      `Analytical, proactive and creative thinking`,
      `Results and solutions-oriented`,
      `Great ability to work with a team`,
      `Excellent communication skills`,
      `Research oriented`,
      `Problem solver`,
    ],

    courses: certificatesData,
  },

  projects: [
    {
      title: "restaurant management system",
      // githubUrl: "#",
      url: "http://104.248.47.7/",
      image: rms,
      description: `
      Restaurant Management System and Small and Medium Enterprises Management
      The Mofwter system is an integrated system that can meet the needs of restaurants in addition to managing small and medium-sized companies in a smooth and easy-to-use manner for customers.
      ............
      Best Solutions for All Restaurant Types
      We offer comprehensive solutions for managing restaurants of various sizes, ranging from cafes and small restaurants to large chains and upscale dining establishments. We understand the importance of effective restaurant management to achieve success and meet customer needs.
      `,
    },
    {
      title: "online booking hotels ,  properties ",
      // githubUrl: "#",
      url: "https://www.staywo.com/",
      image: staywo,
      description: "online booking hotels ,  properties and a rental property B2C provider, where we connect hosts with travelers to get the rental property no matter where they go and make their travelling experience a bliss",
    },

    {
      title: "frusiya websites for horses races in ksa",
      // githubUrl: "#",
      url: "https://www.frusiya.com/index.php?language=en",
      image: frusiya,
      description: '        related to the activities of the international horse race held at King Abdulaziz Racetrack in Riyadh, Saudi Arabia. It is the richest horse race ever held, with a $20 million purse. It is the main highlight race of the Saudi Cup Night'
    },
    {
      title: "e-commerce and online food ordering company ",
      // githubUrl: "#",
      url: "https://www.sata-food.com/en",
      image: satafood,
      description: `
      It is a new, innovative and advanced technology in the food industry and supermarkets, and we deliver medicines through its basic system via smart phones.
      .............
      Why Order From Sata Food ?
      Throughout saving multiple perks for both users and providers. About users, The company displays a broad collection of restaurants, supermarkets, and pharmacies for SATA FOOD users to choose the best Moreover, spot delivery with a low cost. In addition to offering discount coupons and gifts continuously.
      .............
      What Does Sata Food Offer ?
      All of that to provide our customers with the best services, so, we decided to release SATA FOOD company that collects between the welfare of new advanced technology and low expenses.
              `,
    },
    {
      title: "News worldwide website | latest news | sports | national| tech | business | etc...",
      // githubUrl: "#",
      // url: "#",
      image: news,
      description: `
      using reactjs ,material ui, nextjs , nestjs , orm (typeorm) , database (postgres) , swagger api docs  for rest api,
      a world news website is a digital platform that provides timely and relevant news coverage on global events and issues, aiming to inform and engage readers from around the world.
      
      `,
    },
    {
      title: "e-commerce website where you can buy and sell and purchase orders online",
      githubUrl: "https://github.com/abdo20010dx/e-commerce-example",
      // url: "#",
      image: commerce,
      description: `
      using ejs , bootstrap ,mongoose ,mongodb , nodejs ...
      creating a sample e-commerce website where you can  buying and selling of goods, products, or services over the internet or other electronic networks. It involves conducting commercial transactions electronically, without the need for physical interactions between buyers and sellers.

`,
    },
    {
      title: "Deploy frontend , backend to aws using CI/CD tools",
      githubUrl: "https://github.com/abdo20010dx/udapeople-cicd",
      // url: "#",
      image: devops,
      description: `
      Deploy frontend , backend to aws using CI/CD tools
      DevOps ci/cd with Prometheus/ ansible / circle ci , aws / alert manager,
`,
    },
    {
      title: "backend for medical care service , e-learning service and online-shop",
      githubUrl: "https://github.com/abdo20010dx/dentunity",
      // url: "#",
      image: dentunity,
      description: `
      using nestjs , typeorm (mysql) ,swagger api docs  , class-validator for validation ,jwt for authentication ...
      creating a sample backend for medical care service and e-learning service and online-shop that helps student_doctors communicate with patients to treat,learn and graduate . also helps doctors to sell thier tools online

`,
    },
    {
      title: "sample todo graphql backend",
      githubUrl: "https://github.com/abdo20010dx/todolist",
      // url: "#",
      image: todograph,
      description: `
      using nestjs , typeorm (mysql) ,graphql docs  ...
      creating a sample todo graphql backend  

`,
    }, {
      title: "sample Chat Ai",
      githubUrl: "https://github.com/abdo20010dx/chat-ai",
      // url: "#",
      image: chatai,
      description: `
      using nestjs , ejs , bootstrap , open ai   ...
      creating a sample chat ai integration 

`,
    },



  ],
  hobbies: [
    "Technology",
    "Watching Movies",
    "Football",
    "Playstation",
    "Running",
    "Chess",
  ],
};
