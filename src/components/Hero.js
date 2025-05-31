import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin} from "react-icons/ai";

export default function Hero() {    
     const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            twitter: 'https://x.com/',
            facebook: 'https://www.facebook.com/',
            linkedin: 'https://www.linkedin.com/in/surendhar-thanigaivel-5199b3290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary  justify-center'>
        <div className='w1/2 flex flex-col'>
            <h1 className=' text-white text-5xl font-pop-font'>Hi, <br />I'm <span className='text-blue-800 animate-slidein'>
                Surendhar Thanigaivel</span>
            <p className='text-2xl'>Im a Front-end Developer</p>
        </h1>
        <div className='flex py-10 '>
            <a href={config.social.twitter} className='pr-5 text-blue-400 hover:text-white' ><AiOutlineTwitter size={45} /></a>
            <a href={config.social.twitter} className='pr-5  text-blue-400 hover:text-white'><AiOutlineFacebook size={45} /></a>
            <a href={config.social.linkedin} className=' text-blue-400 hover:text-white'><AiOutlineLinkedin size={45}/></a>
        </div>

        </div>
        
        <img className='md:w-1/3' src={HeroImg} />
    </section>

}