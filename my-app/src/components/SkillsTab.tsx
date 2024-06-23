import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

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
export default function SkillsTab() {
    return (
        <>
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-3xl font-bold">{skills.title}</h1>
                <p className='text-white/80 text-sm mx-auto xl:mx-0 leading-loose max-w-[550px]'>{skills.description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mt-10">
                {
                skills.skillsList.map((skill, index)=>(
                    <li key={index}>
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                        <TooltipTrigger className="bg-[#27272c] w-full h-[130px] rounded-xl group flex items-center justify-center">
                            <div className="group-hover:text-accent text-6xl transition-all duration-300">
                            {skill.icon}
                            </div>
                        </TooltipTrigger>
                            <TooltipContent>
                            <p>{skill.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    </li>
                ))
                }
            </ul>
        </>
    )
}
