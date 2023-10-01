import React from "react";
import "../sass/homepage.scss";
import eduardDEV from "../images/dev_eduard.jpg";
import { useState, useEffect } from "react";
import  Aos  from "aos";
import "aos/dist/aos.css";
import {AiFillHtml5} from "react-icons/ai";
import {BiLogoCss3} from "react-icons/bi";
import {SiSass} from "react-icons/si";
import {BiLogoJavascript} from "react-icons/bi";
import {BiLogoReact} from "react-icons/bi";
import {SiPhp} from "react-icons/si";
import esdCoding from "../images/esd_coding.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



const Homepage = () => {

    const [hobbies, setHobbies] = useState([
        {
            id: 1,
            url: "https://img.freepik.com/premium-vector/programmer-work-with-code-develop-application-website-computer-freelance-writing-code_258153-639.jpg",
            desc: "LEARN TO CODE",
        },
        {
            id: 2,
            url: "https://3.bp.blogspot.com/-qD7JIBDiXMI/UXqPJNaEGLI/AAAAAAAAAVA/HzFj9_I9rX4/s1600/netflix-3D.jpg",
            desc: "WATCHING NETFLIX",
        },
        {
            id: 3,
            url: "https://static.vecteezy.com/system/resources/previews/014/034/337/original/boy-playing-online-game-3d-character-illustration-png.png",
            desc: "PLAYING GAMES",
        }
    ]);

    const loopDescription = ["Web Developer", "Programmer", "Designer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalDelayMilliseconds = loopDescription[index].length * 300;
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                return prevIndex + 1 < loopDescription.length ? prevIndex + 1 : 0;
            });
        }, intervalDelayMilliseconds);
        return () => clearInterval(interval);
    });
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <div className="dev-coding-gif">
                    <div className="dev-quotes">
                        <h1>I am eduard Web Developer.</h1>
                    </div>
                </div>
            </div>
            <div className="about-container" data-aos="fade-left">
                <div className="about-content">
                    <div className="esd-dev-img">
                        <img src={eduardDEV} />
                    </div>
                    <div className="about-context">
                        <h1 key={loopDescription[index]}>{loopDescription[index]}</h1>
                        <div className="about-description">
                            <small>I am Eduard, a passionate web developer in the philippines <br />
                                bringing the learned for the future as a web developer. My <br />
                                Expertise is developing next-level  websites and web application.
                            </small>
                        </div>
                        <div className="hr-separator-about">
                            <hr width="420" noshade />
                            <div className="dev-main-quoutes">
                                <h2>Learn, Adopt, Build, Repeat</h2>
                            </div>
                            <div className="view-myPersonal-details">
                               <Link to="/about">
                               <button>Do you know me?</button>
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hobbies-container" data-aos="fade-right">
                {hobbies.map((hobby, index) => {
                    return (
                        <div className="hobbies-content" key={index}>
                            <img src={hobby.url} />
                            <div className="hobbies-desc">
                                <strong>{hobby.desc}</strong>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="devstacks-container">
            <div className="esd-coding" data-aos="flip-down">
                    <img src={esdCoding}  />
                    <div className="stacks-language">
                       <div className="html-desc">
                        <h1>+</h1>
                        <strong>HTML5</strong>
                       </div>
                       <div className="css-desc">
                        <h1>+</h1>
                        <strong>CSS3</strong>
                       </div>
                       <div className="sass-desc">
                        <h1>+</h1>
                        <strong>SASS</strong>
                       </div>
                       <div className="js-desc">
                        <h1>+</h1>
                        <strong>JAVASCRIPT</strong>
                       </div>
                        <div className="react-desc">
                        <h1>+</h1>
                        <strong>REACT</strong>
                       </div>
                       <div className="php-desc">
                        <h1>+</h1>
                        <strong>PHP</strong>
                       </div>
                    </div>
                </div>
                <h1>MY DEV STACKS</h1>
                <div className="devstacks-content">
                   <div className="html" data-aos="fade-right">
                    <AiFillHtml5/>
                   </div>
                   <div className="css" data-aos="fade-right">
                    <BiLogoCss3/>
                   </div>
                   <div className="sass" data-aos="fade-right">
                    <SiSass/>
                   </div>
                   <div className="js" data-aos="fade-left">
                    <BiLogoJavascript/>
                   </div>
                   <div className="react" data-aos="fade-left">
                    <BiLogoReact/>
                   </div>
                   <div className="php" data-aos="fade-left">
                    <SiPhp/>
                   </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Homepage;