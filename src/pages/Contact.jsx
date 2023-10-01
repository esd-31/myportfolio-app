import React from "react";
import "../sass/contact.scss";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [correction, setCorrection] = useState(false);

    const [validEmail, setValidEmail] = useState('johndoe@gmail.com');
    const [correctionEmail, setCorrectionEmail] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.length == 0 || email.length == 0 ) {
            setCorrection(true);
        }else if(email == validEmail) {
            setValidEmail(validEmail);
        }else {
            alert('Thankyou!  ' + name.toUpperCase() + '  From:Eduard.dev');
        }
    }
    return(
        <div className="contact-container">
            <div className="contact-title">
                <h2 style={{color: "#fff"}}>Can I know your name and email?</h2>
            </div>
            <div className="contact-content">
                <div className="input-group">
                    <input type="text" placeholder="NAME" onChange={(e) => setName(e.target.value)}/>
                    {correction&&name.length <= 0 ? <small class='error-txt'>Please input your name.</small> : "" }
                </div>
                <div className="input-group">
                    <input type="email" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)}/>
                    {correction&&email.length <= 0 ? <small class='error-txt'>Please input your email.</small> : "" }
                </div>
                <div className="submit-btn">
                    <input type="submit" value="Submit" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}
export default Contact;

