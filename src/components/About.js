import AboutImg from '../assets/about.png'

export default function About() {
    const config = {
        line1: 'Hi!  I m Surendhar Thanigaivel, a passionate Front-End Developer with a strong interest in building responsive and user-friendly web applications.I enjoy turning ideas into real-world applications using HTML, CSS, Bootstrap, JavaScript, Tailwind CSS and React.',
        line2: 'I have completed a Full Stack Java course at Besant Technologies and a B.Sc. in Computer Science. I am currently focused on sharpening my skills through real-time projects and continuously learning new technologies to grow as a developer',
    }

    return <section className='flex flex-col md:flex-row bg-gray-900 px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-[gray-100] mb-5 w-[170px] font-bold'>About Me</h1>
            <p  className='text-lg leading-relaxed mt-2'>{config.line1}</p>
            <p className="text-lg leading-relaxed mt-4">{config.line2}</p>
        </div>
            
        </div>
    </section>
}