export const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    // { name: "Experience", link: "/experience" },
    { name: "Approach", link: "/approach" },
    // { name: "Testimonials", link: "/testimonials" },
    { name: "Contact", link: "/contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "AI Resume Builder",
        des: "Build your professional resume using AI",
        img: "/projects/ai-resume-builder.png",
        stack: [
            { img: "/next.svg", name: 'Next JS' },
            { img: "/tail.svg", name: 'Tailwind CSS' },
            { img: "/ts.svg", name: "TypeScript" },
            { img: "/c.svg", name: 'Clerk' },
            { img: "/sanity.svg", name: 'Sanity.io' },
            { img: "/shadcn-ui.svg", name: 'ShadCN UI' }
        ],
        link: "https://ai-resume-builder-client.vercel.app",
    },
    {
        id: 2,
        title: "Anime Hub",
        des: "All your anime related contents and information is one search away.",
        img: "/projects/anime-hub.png",
        stack: [
            { img: "/next.svg", name: 'Next JS' },
            { img: "/tail.svg", name: 'Tailwind CSS' },
            { img: "/ts.svg", name: "TypeScript" },
            { img: "/prisma.svg", name: "Prisma" },
            { img: "/c.svg", name: 'Clerk' },
            { img: '/react-query.svg', name: 'React Query' },
            { img: "/shadcn-ui.svg", name: 'ShadCN UI' },
            { img: '/postgresql.svg', name: 'PostgreSQL' },
        ],
        link: "https://anime-hub-lime.vercel.app",
    },
    {
        id: 3,
        title: "Anime Hub - Admin",
        des: "An admin dashboard to manage all the data of the Anime Hub",
        img: "/projects/anime-hub-admin.png",
        stack: [
            { img: "/next.svg", name: 'Next JS' },
            { img: "/tail.svg", name: 'Tailwind CSS' },
            { img: "/ts.svg", name: "TypeScript" },
            { img: "/prisma.svg", name: "Prisma" },
            { img: "/c.svg", name: 'Clerk' },
            { img: '/react-query.svg', name: 'React Query' },
            { img: "/shadcn-ui.svg", name: 'ShadCN UI' },
            { img: '/postgresql.svg', name: 'PostgreSQL' },
        ],
        link: "https://anime-hub-admin.vercel.app",
    },
    {
        id: 4,
        title: "Taskify",
        des: "A prductivity tool to make lists of notes and share among your team.",
        img: "/projects/taskify.png",
        stack: [
            { img: "/next.svg", name: 'Next JS' },
            { img: "/tail.svg", name: 'Tailwind CSS' },
            { img: "/ts.svg", name: "TypeScript" },
            { img: "/prisma.svg", name: "Prisma" },
            { img: "/c.svg", name: 'Clerk' },
            { img: "/shadcn-ui.svg", name: 'ShadCN UI' },
            { img: '/postgresql.svg', name: 'PostgreSQL' },
        ],
        link: "https://taskify-sepia-gamma.vercel.app",
    },
    {
        id: 5,
        title: "Tech People",
        des: "A blog website for all the tech people",
        img: "/projects/tech-people.png",
        stack: [
            { name: 'Astro', img: "/astro.svg" },
            { img: "/tail.svg", name: 'Tailwind CSS' },
            { img: "/ts.svg", name: "TypeScript" },
            { img: "/markdown.svg", name: 'MarkDown' }
        ],
        link: "https://astro-blog-wheat-psi.vercel.app",
    },
    {
        id: 6,
        title: "Topojo",
        des: "A blog website for all the movie fans, anime lovers, and pop culture fans.",
        img: "/projects/topmojo.png",
        stack: [
            { img: "/next.svg", name: 'Next JS' },
            { img: "/tail.svg", name: 'Tailwind CSS' },
            { img: "/ts.svg", name: "TypeScript" },
            { img: "/sanity.svg", name: 'Sanity.io' },
        ],
        link: "https://topmojo.vercel.app",
    },
    {
        id: 7,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/projects/apple-store.png",
        stack: [
            { img: "/next.svg", name: 'Next JS' },
            { img: "/tail.svg", name: 'Tailwind CSS' },
            { img: "/ts.svg", name: "TypeScript" },
            { img: "/three.svg", name: "Three JS" },
            { img: "/gsap.svg", name: 'GSAP' }
        ],
        link: "https://apple-store-landing-page.vercel.app",
    },
    {
        id: 8,
        title: "Rocket Todo",
        des: "A simple apllicaion to manage your tasks.",
        img: "/projects/rocket-todo.png",
        stack: [
            { img: "/next.svg", name: 'Next JS' },
            { img: "/tail.svg", name: 'Tailwind CSS' },
            { img: "/ts.svg", name: "TypeScript" },
            { img: "/mongo.svg", name: "MongoDB" },
            { img: "/rust.svg", name: 'Rust' }
        ],
        link: "https://rocket-todo-client.vercel.app",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const approaches = [
    {
        title: "Planning & Strategy",
        order: "Phase One",
        description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
        containerClass: "bg-emerald-900",
        animationSpeed: 5.1,
    },
    {
        title: "Development & Progress Update",
        order: "Phase Two",
        description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
        containerClass: "bg-black",
        animationSpeed: 3,
        colors: [
            [236, 72, 153],
            [232, 121, 249],
        ],
        dotSize: 2
    },
    {
        title: "Development & Launch",
        order: "Phase Three",
        description: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
        containerClass: "bg-sky-600",
        animationSpeed: 3,
        colors: [
            [125, 211, 252]
        ],
    },
]

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/Amal221200"
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/amal-murikkoli"
    },
];