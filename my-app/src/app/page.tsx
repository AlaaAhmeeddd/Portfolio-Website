import { ReactElement } from 'react';
import { Button } from "@/components/ui/button";
import { FiDownload} from "react-icons/fi"
import { FaGithub , FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

type socialType = {
  id: string,
  icon: ReactElement,
}
const socials: socialType[] = [
  {id: '1', icon: <FaGithub />},
  {id: '2', icon: <FaLinkedinIn />},
  {id: '3', icon: <FaYoutube />},
  {id: '4', icon: <FaTwitter />},
]

export default function Home() {
  return (
    <section className='h-full pb-20'>
      <div className='container mx-auto xl:px-10 h-full'>
        <div className="flex xl:flex-row flex-col-reverse items-center gap-5 justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <p className="text-xl mt-3">Software Developer</p>
            <h1 className="h1 my-4">
              Hello I&apos;m <br/>
              <span className="text-accent">Luke Coleman</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies
            </p>
            <div className="flex xl:flex-row flex-col gap-5 items-center">
              <Button variant={'outline'}>Download CV <FiDownload className="ml-2"/></Button>
              <div>
                <Social socialData={socials}/>
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </div>
        <div className='py-10'>
          <Stats />
        </div>
      </div>
    </section>
  );
}
