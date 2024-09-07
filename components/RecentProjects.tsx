/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data"
import { PinContainer } from "./ui/Pin"
import { FaLocationArrow } from "react-icons/fa"

const RecentProjects = () => {
  return (
    <div className="py-14 lg:py-20" id="projetos">
        <h1 className="heading">
            Alguns dos meus {' '}
            <span className="text-purple">projetos recentes</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-2 lg:gap-y-8 mt-4 lg:mt-10">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[540px] w-[80vw]">
                <PinContainer title={title} href={link}>
                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                            <img src="/bg.png" alt="bg-img" />
                        </div>
                        <img src={img} alt={title} className="z-10 absolute bottom-0" />
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                    </div>
                </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects
