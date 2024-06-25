import { describe } from "node:test"

export const navList = [
    { id: '1', href: '/', title: 'Home' },
    { id: '2', href: '/services', title: 'Services' },
    { id: '3', href: '/resume', title: 'Resume' },
    { id: '4', href: '/work', title: 'Work' },
    { id: '4', href: '/contact', title: 'Contact' },
]

export const servicesData = [
    {
        number: '01', 
        skill: 'Web Development', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: ''
    },
    {
        number: '02', 
        skill: 'UI/UX Design', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: ''
    },
    {
        number: '03', 
        skill: 'Logo Design', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: ''
    },
    {
        number: '04', 
        skill: 'SEO', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        href: ''
    }
]

export const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    info: [
        {
        fieldName: "Name",
        fieldValue: "Luke Coleman"
        },
        {
        fieldName: "Phone",
        fieldValue: "(+40) 321 654 678"
        },
        {
        fieldName: "Experience",
        fieldValue: "12+ Years"
        },
        {
        fieldName: "Skype",
        fieldValue: "Luke.01"
        },
        {
        fieldName: "Nationality",
        fieldValue: "American"
        },
        {
        fieldName: "Email",
        fieldValue: "Luke.01@gmail.com"
        },
        {
        fieldName: "Freelance",
        fieldValue: "Available"
        },
        {
        fieldName: "Language",
        fieldValue: "English, Spanish"
        },
    ]
}

export const experience = {
    icon: "/resume/badge.svg",
    title: "My experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    items: [
        {
        company: "Tech Solution Inc.",
        position: "Full Stack Developer",
        duration: "2022 - Present"
        },
        {
        company: "Web Design Studio",
        position: "Front-End Developer Intern",
        duration: "Summer 2021"
        },
        {
        company: "E-commerce Startup",
        position: "Freelance Web Developer",
        duration: "2020 - 2021"
        },
        {
        company: "Tech Academy",
        position: "Teaching Assistant",
        duration: "2019 - 2020"
        },
        {
        company: "Digital Agency",
        position: "UI/UX Designer",
        duration: "2018 - 2019"
        },
        {
        company: "Software Developer Firm",
        position: "Junior Developer",
        duration: "2017 - 2018"
        },
    ]
}

export const education = {
    icon: "/resume/cap.svg",
    title: "My education",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    items: [
        {
        institution: "Online Course Platform",
        position: "Full Stack Web Development Bootcamp",
        duration: "2023"
        },
        {
        institution: "Codecademy",
        position: "Front-End Track",
        duration: "2022"
        },
        {
        institution: "Online Course",
        position: "Programming Course",
        duration: "2020 - 2021"
        },
        {
        institution: "Tech Institute",
        position: "Certified Web Developer",
        duration: "2019"
        },
        {
        institution: "Design School",
        position: "Diploma in Graphic Design",
        duration: "2016 - 2018"
        },
        {
        institution: "Community College",
        position: "Associate Degree in Computer Science",
        duration: "2014 - 2015"
        },
    ]
}

export const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Lorem ipsum dolor sit amet consectetr adipisicing elit. Cupiditate magnam modi.",
        stack: [{name: "Html 5"}, {name: "Css3"}, {name: "Javascript"}],
        image: "/work/thumb1.png",
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: "Lorem ipsum dolor sit amet consectetr adipisicing elit. Cupiditate magnam modi.",
        stack: [{name: "Next.js"}, {name: "Tailwind.css"}, {name: "Node.js"}],
        image: "/work/thumb2.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "frontend",
        title: "project 3",
        description: "Lorem ipsum dolor sit amet consectetr adipisicing elit. Cupiditate magnam modi.",
        stack: [{name: "Next.js"}, {name: "Tailwind.css"}],
        image: "/work/thumb3.png",
        live: "",
        github: "",
    }
]
