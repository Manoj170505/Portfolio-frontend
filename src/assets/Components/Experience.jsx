import React from 'react'

const Experience = () => {

    const experienceData = [
        {
            title: "Internship",
            company: "I-BACUS-SOLUTIONS Private Limited ",
            year: "2025",
            description: "Pursuing"
        }
    ]
  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10 text-gray-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0c8cf5] to-[#8b5cf6]">Experience</span>
        </h2>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="relative border-l-4 border-gray-300 dark:border-gray-700 ml-4 md:ml-8 space-y-12">
                {experienceData.map((item, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                         {/* Dot */}
                         <div className="absolute -left-[14px] top-1 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-[#0c8cf5] rounded-full"></div>
                        
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300">
                            <span className="inline-block px-4 py-1 rounded-full bg-[#0c8cf5]/10 text-[#0c8cf5] font-bold text-sm mb-4">
                                {item.year}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                            <h4 className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-3">{item.company}</h4>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experience