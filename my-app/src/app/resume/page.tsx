"use client"
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { education, about, experience } from '@/components/data'

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  skillsList: [
      {
          icon: <FaHtml5 />,
          name: 'HTML 5',
      },
      {
          icon: <FaCss3 />,
          name: 'CSS 3',
      },
      {
          icon: <FaJs />,
          name: 'JavaScript',
      },
      {
          icon: <FaReact />,
          name: 'React.JS',
      },
      {
          icon: <SiNextdotjs />,
          name: 'Next.JS',
      },
      {
          icon: <SiTailwindcss />,
          name: 'Tailwind.CSS',
      },
      {
          icon: <FaFigma />,
          name: 'Figma',
      },
      {
          icon: <FaNodeJs />,
          name: 'Node.Js',
      },
  ]
}

export default function page() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        delay: 2.4,
        duration: 0.4,
        ease: 'easeInOut'
      }}
      className='h-full'
    >
      <div className='container mx-auto xl:px-10'>
        page
      </div>
    </motion.div>
  )
}
