import React from 'react';
import '../CSSFiles/Education.css';

const Education = () => {
    const educationData = [
        {
            title: "10th Grade",
            year: "2021",
            institution: "Migros KIDS Matric. Hr. Sec. School",
            score: "Completed with Excellence"
        },
        {
            title: "12th Grade",
            year: "2023",
            institution: "Migros KIDS Matric. Hr. Sec. School",
            score: "Completed with Excellence"
        },
        {
            title: "B.Sc. Computer Science",
            year: "2023 - Present",
            institution: "Bharathidasan College of Arts & Science",
            score: "Pursuing"
        }
    ];

    return (
        <section id="education" className="education-section">
            <h2 className="section-title">My Education</h2>
            <div className="education-timeline">
                <div className="timeline-line"></div>
                <div className="education-container">
                    {educationData.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="year">{item.year}</span>
                                <h3>{item.title}</h3>
                                <h4>{item.institution}</h4>
                                <p className="score">{item.score}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;