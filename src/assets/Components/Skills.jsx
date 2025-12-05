import React from 'react'
import { Icon } from '@iconify/react'

const Skills = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen ">
        <div className="">
            <ul className='flex flex-row'>
                <li><Icon icon="flowbite:html-solid" className="text-8xl text-orange-600"/></li>
                <li><Icon icon="flowbite:css-solid" className="text-8xl text-blue-600"/></li>
                <li><Icon icon="ri:javascript-fill" className="text-8xl text-yellow-400"/></li>
                <li><Icon icon="hugeicons:react" className="text-8xl text-cyan-400"/></li>
                <li><Icon icon="ri:bootstrap-fill" className="text-8xl text-purple-600"/></li>
                <li><Icon icon="flowbite:tailwind-solid" className="text-8xl text-cyan-500"/></li>
                <li className='text-8xl'>style<span className='text-blue-500'>X</span></li>
            </ul>
        </div>
        <div className="">
            <ul className='flex flex-row'>
                <li><Icon icon="akar-icons:node-fill" className="text-8xl text-green-600" /></li>
                <li><Icon icon="flowbite:mongo-db-solid" className="text-8xl text-green-500" /></li>
                <li><Icon icon="lineicons:expressjs" className="text-8xl text-gray-600" /></li>
                <li><Icon icon="lineicons:oracle" className="text-8xl text-red-600" /></li>
                <li><Icon icon="lineicons:prisma" className="text-8xl text-blue-500" /></li>
            </ul>
        </div>
        <div className="">
            <ul className='flex flex-row'>
                <li><Icon icon="solar:figma-bold" className="text-8xl text-purple-500" /></li>
                <li><Icon icon="devicon-plain:xd" className="text-8xl text-pink-600" /></li>
                <li><Icon icon="mage:illustrator" className="text-8xl text-orange-500" /></li>
                <li><Icon icon="file-icons:inkscape" className="text-8xl text-yellow-500" /></li>
                <li><Icon icon="circum:penpot" className="text-8xl text-blue-600" /></li>
                <li><Icon icon="lineicons:canva" className="text-8xl text-cyan-500" /></li>
                <li><Icon icon="streamline-logos:affinity-logo-block" className="text-8xl text-red-500" /></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
