
import websiteImg1 from '../assets/cmsproject.avif';
import websiteImg2 from '../assets/wheather_converted.png';
import websiteImg3 from '../assets/resume.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A full-stack CMS application that allows admins and users to manage blog posts and content. Features include authentication, role-based access, and media management',
                link: 'https://github.com/surendarthanigaivel/'
            },
            {
                image: websiteImg2,
                description: 'A responsive weather forecasting app built using React that fetches real-time weather data from a public API and displays location-based weather updates',
                link: 'https://github.com/jvlcode/food'
            },
            {
                image: websiteImg3,
                description: 'portfolio Resume  Using HTML, CSS A personal portfolio to showcase my work and resume',
                link: 'https://delicate-wisp-72c092.netlify.app/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}
