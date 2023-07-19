import "./home.scss"
import {NavbarTop, MyPoster} from "../../Components";
import cv from "../../assets/cv_bernard.pdf"
import {UilFacebook, UilLinkedin, UilGithub, UilInstagram, UilTwitter} from "@iconscout/react-unicons";
import {Typewriter} from "react-simple-typewriter";

export const Home =()=>{
    return (
        <div className="home-container">
            <section className="home-content">
               <NavbarTop />
                <div className="home-main">
                    <div className="home-main-left">
                        <p>Hello, it's me.</p>
                        <h1 className="my-name">BERNARD KONAN</h1>
                        <p className="work">And I'm <span className="work">
                            <Typewriter
                                words={['Civil Engineer (Surveyor)', 'Frontend Dev', 'Python - Django Dev','Drone Remote Pilot']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={40}
                                deleteSpeed={40}
                                delaySpeed={2000}
                            />
                        </span></p>
                        <div className="about-me">
                            <p>I am a surveyor with 2 years experience.</p>
                            <p> I like geographic information sciences, maths, computing and sport.</p>
                            <p>New technologies and image analysis frameworks are my passion.</p>
                        </div>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/bernard-koffi-konan-51bbab1b3/"><UilLinkedin size={40}/></a>
                            <a href="https://twitter.com/Mr_Bernard_96"><UilTwitter size={40}  /></a>
                            <a href="https://web.facebook.com/bernardkkn" ><UilFacebook size={40}/></a>
                            <a href="https://github.com/devwithbernard"><UilGithub size={40}/></a>
                            <a href="https://www.instagram.com/bernardkonankoffi/"><UilInstagram size={40}/></a>
                        </div>
                    </div>
                    <div className="home-main-right">
                        <MyPoster/>
                    </div>
                </div>
                <div className="resume">
                    <a href={cv} className="resume-link">Download My Resume</a>
                </div>
            </section>
        </div>
    )
}