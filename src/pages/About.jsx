import React, {  useState } from "react";
import "../sass/about.scss";
import myGRADPIC from "../images/grad_pic.jpg";
import img1 from "../ojt/ojt_img_one.jpg";
import img2 from "../ojt/ojt_img_two.jpg";
import img3 from "../ojt/ojt_img_three.jpg";
import img4 from "../ojt/ojt_img_four.jpg";
import img5 from "../ojt/ojt_img_five.jpg";
import img6 from "../ojt/ojt_img_six.jpg";
import img7 from "../ojt/ojt_img_seven.jpg";
import img8 from "../ojt/ojt_img_eight.jpg";
import img9 from "../ojt/ojt_img_nine.jpg";
import img10 from "../ojt/ojt_img_ten.jpg";
import img11 from "../ojt/ojt_img_eleven.jpg";

const About = () => {

    const [datas, setDatas] = useState([
        {
            id: 1,
            src: img1,
        },
        {
            id: 2,
            src: img2,
        },
        {
            id: 3,
            src: img3,
        },
        {
            id: 4,
            src: img4,
        },
        {
            id: 5,
            src: img5,
        },
        {
            id: 6,
            src: img6,
        },
        {
            id: 7,
            src: img7,
        },
        {
            id: 8,
            src: img8,
        },
    ]);

    const [mergeImg, setMergeImg] = useState([
        {
            id: 9,
            src: img9,
        },
        {
            id: 10,
            src: img10,
        },
        {
            id: 11,
            src: img11,
        },
    ]);

    const [expandSize, setExpandSize] = useState(null);
    const[vanished, setVanished] = useState(!false);
    const loadImg = () => {
     setDatas([...datas].concat([...mergeImg]));
     setVanished(!vanished);
    }

    const expandImg = (index) => {
        setExpandSize(index);
    }
    return (
        <div className="about-data-content">
                <div className="about-container">
                    <div className="about-content">
                        <div className="my-gradpic">
                            <img src={myGRADPIC} />
                        </div>
                        <div className="grad-info">
                            <small>I am thankful to my journey as a BSIT student in four years I got my most desired diploma.
                                and I thank God and my family and my friends who love me and support me I reached this achievement, and of course with what I learned during four years in the course being a BSIT student.
                                <b>"HELLO WORLD";</b>
                            </small>
                        </div>
                    </div>
                    <div className="hr-separator">
                        <hr noshade color="#1B9C85" />
                        <hr noshade color="#1B9C85" />
                    </div>
                    <div className="ojt-container">
                        <div className="ojt-content">
                            <div className="ojt-title">
                                <h1>MY INTERNSHIP AT GSO</h1>
                            </div>
                            <div className="ojt-images-content">
                                {datas.map((data, index) => {
                                    return (
                                        <div className="ojt-images" key={index} >
                                            <img src={data.src} style={{transform: expandSize === index ? "scale(1.5)" : "scale(1.0)"}}  onClick={() => expandImg(index)}/>
                                        </div>
                                    )
                                })}
                                {vanished &&<div className="btn-load">
                                    <button onClick={loadImg}>LOAD MORE</button>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default About;

