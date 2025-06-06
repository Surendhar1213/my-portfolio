import ResumeImg from '../assets/resume.jpg'

export default function Resume() {
    return <section id='resume' className='flex flex-col md:flex-row bg-gray-900 px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-[gray-100] mb-5 w-[140px] font-bold'>Resume</h1>
            <p  className='text-lg leading-relaxed mt-2'>You Can View My Resume! <a className ='btn' href="/Surendhar_Resume_Fresher.pdf" download>Download</a></p>
        </div>
            
        </div>
    </section>
}