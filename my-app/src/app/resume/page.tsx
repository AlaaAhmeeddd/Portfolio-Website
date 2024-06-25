"use client"
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExperienceTab from '@/components/ExperienceTab'
import EducationTab from '@/components/EducationTab'
import SkillsTab from '@/components/SkillsTab'
import AboutTab from '@/components/AboutTab'

export default function page() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ delay: 2.4, duration: 0.4, ease: 'easeInOut' }}
      className='h-full py-10'
    >
      <div className='container mx-auto xl:px-10'>
        <Tabs defaultValue="experience" className="flex xl:flex-row flex-col gap-[60px]">
          <TabsList className="max-w-[300px] w-full flex flex-col mx-auto xl:mx-0">
            <div className="lg:block hidden m-0">
              <p className='text-4xl font-semibold'>Why hire me?</p>
              <p className='text-white/80 text-sm mt-6 max-w-[300px] leading-loose'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <TabsContent value="experience">
            <ExperienceTab />
          </TabsContent>
          <TabsContent value="education">
            <EducationTab />
          </TabsContent>
          <TabsContent value="skills">
            <SkillsTab />
          </TabsContent>
          <TabsContent value="about">
            <AboutTab />
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  )
}
