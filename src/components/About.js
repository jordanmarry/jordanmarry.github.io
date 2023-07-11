import React from 'react';

const About = () => {

    const skills = [
        "Javascript",
        "Python",
        "React.js",
        "Java",
        "Node.js",
        "HTML & CSS"
    ];

    return (
        <div id='about' className='flex flex-col pb-16'>
            <h1>
                {"// about me"}
            </h1>
            <p className='max-w-full text-2xl text-grey md:max-w-2xl pb-10'>
                I am currently a research engineer at Parallel Software and Systems Group. 
                Currently working on a Python-based tool for analyzing execution traces from
                parallel programs. I also recently just graduated from the University of Maryland - 
                College Park.
            </p>
            <p className='text-3xl text-light-blue'>Some languages and tech I&apos;ve been using:</p>
            <ul className='text-xl xl:text-2xl text-grey grid grid-cols-2 gap-2 max-w-md pb-10'>
                {skills.map(skill => 
                    <li key={skill}>
                        <span className='text-light-blue'>▹ </span>
                        {skill}
                    </li>
                )}
            </ul>
            <p className='max-w-full text-2xl text-grey md:max-w-2xl pb-10'>
                Outside of school and work, I tend to play videos, catch up on the current 
                world of astronomy, and hang out with friends. 
            </p>
        </div>
    )
}

export default About;