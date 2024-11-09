export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
   
  export const myProjects = [

    {
      title: 'Horizon - Online Banking Platform',
      desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
      subdesc:
        'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
      href: 'https://banking-black-three.vercel.app/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Nextjs',
          path: '/assets/next.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'AppWrite',
          path: '/assets/app.png',
        },
      ],
    },
    {
      title: 'Travel Tour Website',
      desc: 'This is a Travel Website project that allows users to explore and book travel destinations. It provides information about various travel packages, services, and a gallery of beautiful destinations.',
      subdesc:
        'Here I used Html, Css & Javascript To create the front end part of the website and for storing the Contact Information in the Database we used php as a backend language.',
      href: 'https://spontaneous-travesseiro-b88e19.netlify.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Html',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: '/assets/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.png',
        },
        {
          id: 4,
          name: 'php',
          path: '/assets/php.png',
        },
      ],
    },
    {
      title: 'Weather Application',
      desc: 'This is a simple weather application built using HTML, CSS, and JavaScript. It fetches weather data from the OpenWeatherMap API and displays the current weather information for a specified location.',
      subdesc:
        'Technologies Used - HTML, CSS, JavaScript, OpenWeatherMap API(for fetching weather data)',
      href: 'https://kundan-weather-app.netlify.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Html',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: '/assets/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.png',
        },
        {
          id: 4,
          name: 'Api',
          path: '/assets/api.png',
        },
      ],
    },
    {
      title: 'Course Management System Using Chat-Gpt',
      desc: 'Used ChatGPT to build a full-stack educational application with features like authentication, course browsing, and user profile management, leveraging ChatGPT capabilities to accelerate development and streamline the coding process.',
      subdesc:
        'This is a project made to use the power of ChatGPT to build course application.',
      href: 'https://course-app-taupe.vercel.app/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'chatgpt',
          path: '/assets/chat.png',
        },
        {
          id: 2,
          name: 'TCSS',
          path: '/assets/tcss.png',
        },
        {
          id: 3,
          name: 'supabase',
          path: '/assets/supa.png',
        },
        {
          id: 4,
          name: 'Nextjs',
          path: '/assets/next.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 2,
      name: 'Fidelity Investments',
      pos: 'SDE Apprentice',
      duration: '2025 - Present',
      title: "As a Software developer, I bring enthusiasm and a passion for continuous learning to my role as an Apprentice at Fidelity Investments. with a dedication to mastering the latest technologies and a drive to contribute meaningfully, I'm excited to embark on this journey of growth and development in the tech industry.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Education',
      pos: 'Bachelor of Engineering',
      duration: '2019 - 2023',
      title: "I completed my Bachelor of Engineering in Electronics and Communication at N.M.A.M. Institute of Technology, Nitte, Karnataka, where I gained a strong foundation through coursework in Object-Oriented Programming in Java, Python Programming, Database Management Systems, Embedded Linux, and Software Engineering Practices.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];