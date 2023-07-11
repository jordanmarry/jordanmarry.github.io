import React from 'react'
import Image from 'next/image';
import pssg from '../../public/images/PSSG Logo.jpg'
import umdcs from '../../public/images/UMD CS.png'

const Card = ({photo, width, height, title, company, desc}) => {
    return (

      <div className='pb-12'>
        <div className='max-w-3xl flex items-center'>
          <div className='mr-4'>
            <Image 
              src={photo}
              width={width}
              height={height}
              alt={title} 
              className='rounded-3xl hidden sm:block border-4 rounded-3xl border-light-blue p-2'
            />
          </div>
          <div>
            <p className='text-white font-bold text-2xl'>{title} @ <span className='text-light-blue'>{company}</span></p>
            <ul className='text-grey'>
                {desc.map(point =>
                    <li key={point}>
                        <div className='flex'>
                            <span className='text-light-blue pr-1 text-2xl'>▹</span>
                            <span className='text-xl'> {point}</span>
                        </div>
                    </li>
                )}
            </ul>
          </div>
        </div>
      </div>
        
      );
}

const Experience = () => {
  return (
    <div id='experience' className='flex flex-col pb-16'>

        <h1>
            {"// experience"}
        </h1>
        <Card 
            photo={pssg} 
            width={500}
            height={500}
            title='Research Engineer' 
            company='Parallel Software and Systems Group' 
            desc={["Developed a cutting-edge Python tool for analyzing and visualizing traces of parallel programs.",
                    "Implemented an innovative function to see and detect performance bottlenecks in parallel programs.",
                    "Collaborated with our team following best practices for the full software development life cycle, including coding standards, having code reviews, and testing."]}
        />

        <Card
            photo={umdcs}
            width={425}
            height={425}
            title='Student Instructor'
            company='University of Maryland, College Park'
            desc={["Developed and delivered an engaging digital logic design curriculum that emphasized hands-on learning.",
                    "Guided students through project assignments, providing constructive feedback that improved final project scores by an average of 20%.",
                    "Managed classroom logistics and website updates with attention to detail, ensuring seamless delivery of course materials."]}
        />

    </div>
  );
};

export default Experience