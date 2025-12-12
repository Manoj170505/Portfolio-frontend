import React from 'react'
import '../CSSFiles/Experience.css';

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
    <section id="experience" className="experience-section">
        <h2 className="section-title">My Experience</h2>
        <div className="experience-timeline">
            <div className="timeline-line"></div>
            <div className="experience-container">
                {experienceData.map((item, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="year">{item.year}</span>
                            <h3>{item.title}</h3>
                            <h4>{item.company}</h4>
                            <p className="description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experience