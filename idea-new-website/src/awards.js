export const Awards = () => {

    const awards = [
        {
            name: 'CBS Case Competition 1st Place 2023',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            name: 'Google Generation Award 2022',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            name: 'Macquarie Coding Fest Award 2022',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            name: 'AWS ECIP Case Competition 1st Place',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            name: 'Tech For Social Good 2nd Place',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
            name: 'Faculty of Engineering Leadership Scholarship',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },

    ]
    
   
    return <>
        <div className='awards-container'>
            <div className='awards-box'>
            {
                    awards.map(value => <div className='experience-job'>
                        <h3>{value.name}</h3>
                        {/* <p>{value.description}</p> */}
                        </div>)
                }
            </div>
            
        </div>
        <style jsx>{`
            .awards-container {
                display: flex;
                flex-direction: row;
                height: 60vh;
                padding: 80px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .awards-box {
                flex: 1;
                text-align: center;
            }
        `}</style>
    </>
}