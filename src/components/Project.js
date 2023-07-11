import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({github, title, desc, tools}) => {
  return (

    <div className="flex flex-col p-4 bg-dark-blue rounded-lg shadow-md max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-white mr-5">{title}</h2>
        <a 
          target="_blank" 
          href={github} 
          className="text-light-blue hover:text-white"
        >
            <GitHubIcon style={{ fontSize: 21 }}></GitHubIcon>
        </a>
      </div>
      <p className="text-grey text-lg mb-6">{desc}</p>
      <p className='text-grey text-lg'>{tools}</p>
    </div>

  );
}

const Project = () => {
  return (
    <div id='projects' className='flex flex-col pb-16'>
        <h1>
            {"// projects"}
        </h1>
        <div className='grid md:grid-cols-2 gap-x-4 gap-y-4 max-w-3xl'>
          <ProjectCard 
              github={'https://github.com/jordanmarry/Jordan'}
              title={'This Very Own Website!'}
              desc={'This website is meant to hold and display my current projects and my journey in software engineering.'}
              tools={'Next.js, Tailwind CSS'}
          />

          <ProjectCard 
              github={'https://github.com/jordanmarry/csgo-calc'}
              title={'Counter-Strike Investment Tracker'}
              desc={'An investment tracker that calculates your current investments in the game Counter-Strike: Global Offensive giving real-time profit/loss calculations.'}
              tools={'HTML, CSS, JavaScript'}
          />

          <ProjectCard 
              github={'https://github.com/jordanmarry/cs-face-recog'}
              title={'Counter-Strike Facial Recognition'}
              desc={'A Python tool that takes in photos of Counter Strike pros and utilizes OpenCV to recognize their faces in interviews.'}
              tools={'Python, OpenCV'}
          />

          <ProjectCard 
              github={'https://github.com/jordanmarry/fantasy-football'}
              title={'Fantasy Football Android App'}
              desc={'An app that allows you to track your current fantasy football teams and scores. Not only that, it shows you who are your top performing players and which players to sell.'}
              tools={'Kotlin'}
          />

          <ProjectCard
              github={'https://github.com/jordanmarry/Pathfinding-Visualizer'}
              title={'Pathfinding Visualizer'}
              desc={'A GUI that allows the user to see how certain pathfinding algorithms behave and act.'}
              tools={'Python, PyGame'}
          />

          <ProjectCard
              github={'https://github.com/jordanmarry/Twitch-Bot'}
              title={'Discord Twitch Bot'}
              desc={"A Discord bot that tells the discord server that a streamer went live on Twitch from their server's streamer list."}
              tools={'Python, Discord API'}
          />
        </div>
        

    </div>
  )
}

export default Project;
