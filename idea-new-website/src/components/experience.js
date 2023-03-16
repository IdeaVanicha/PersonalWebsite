export const Experience = () => {
    
    const experiences = [
        {
            role: 'Software Engineer Intern @ Honey Insurance 🍯',
            date: 'Feb 2023 - Now'
        },
        {
            role: 'Software Engineer (Frontend) Intern @ Canva 💻',
            date: 'Nov 2022 - Feb 2023'
        },
        {
            role: 'Software Engineer Intern @ Accenture 🚀',
            date: 'Dec 2021 - Feb 2022 & Jun 2022 - Nov 2022'
        },
        {
            role: 'Data Adminsitrator & Junior Developer @ Adviser Ratings 📊',
            date: 'Jun 2021 - Dec 2021 & Feb 2022 - Jun 2022'
        },

    ]
    return <>
        <div className='experience-container'>
            <div className='experience-box'>
                {
                    experiences.map(value => <div className='experience-job'>
                        <h1>{value.role}</h1>
                        <h3>{value.date}</h3>
                        </div>)
                }
            </div>
        </div>
        <style jsx>{`
            .experience-container {
                display: flex;
                flex-direction: row;
                padding: 120px 80px;
            }

            .experience-box {
                flex: 1;
                text-align: left;
            }

            .experience-job {
                margin: 10px 0px;
            }
        `}</style>
    </>
}