import {NavbarTop} from "../../Components";
import "../Home/home.scss";
import "./contact.scss";

import {
    UilLocationPoint,
    UilCalling,
    UilEnvelope,
    UilFacebook,
    UilTwitter,
    UilInstagram,
    UilLinkedin
} from "@iconscout/react-unicons";

export const Contact =()=>{
    return <div className="home-container">
        <div className="home-content">
            <NavbarTop/>
            <div className="contactUS">
                <div className="title">
                    <h2>Contact US</h2>
                </div>
                <div className="box">
                    <div className="contact form">
                        <h3>Send a message</h3>
                        <form>
                            <div className="formBox">
                                <div className="row50">
                                    <div className="inputBox">
                                        <span>First Name</span>
                                        <input type="text" placeholder="Bernard"/>
                                    </div>
                                    <div className="inputBox">
                                        <span>Last Name</span>
                                        <input type="text" placeholder="Konan"/>
                                    </div>
                                </div>
                                <div className="row50">
                                    <div className="inputBox">
                                        <span>Email</span>
                                        <input type="text" placeholder="bkonan@cntig.net"/>
                                    </div>
                                    <div className="inputBox">
                                        <span>Mobile</span>
                                        <input type="text" placeholder="+225 0769454335"/>
                                    </div>
                                </div>
                                <div className="row100">
                                    <div className="inputBox">
                                        <span>Message</span>
                                        <textarea placeholder="Write your message here ..."></textarea>
                                    </div>
                                </div>
                                <div className="row100">
                                    <div className="inputBox">
                                        <input type="submit" value="Send"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="contact info">
                        <h3>Contact Info</h3>
                        <div className="infoBox">
                            <div>
                                <span>
                                    <UilLocationPoint/>
                                </span>
                                <p>Sorbonne Ananeraie, Yopougon <br/> Abidjan</p>
                            </div>
                            <div>
                                <span>
                                   <UilEnvelope/>
                                </span>
                                <a href="mailto:konanknbernard@gmail.com">konanknbernard@gmail.com</a>
                            </div>
                            <div>
                                <span>
                                    <UilCalling/>
                                </span>
                                <a href="tel:+2250769454335">+225 0769454335</a>
                            </div>
                            <ul className="sci">
                                <li>
                                    <a href="https://web.facebook.com/bernardkkn">
                                        <UilFacebook size={30}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Mr_Bernard_96">
                                        <UilTwitter size={30} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/bernard-koffi-konan-51bbab1b3/">
                                        <UilLinkedin size={30}/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/bernardkonankoffi/">
                                        <UilInstagram size={30}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact map">
                        <iframe
                            title=""
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.418314005617!2d-4.067742824289624!3d5.352956735656527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ebf3be52d4ef%3A0xf3364bbfb4a463ac!2sColl%C3%A8ge%20La%20Sorbonne!5e0!3m2!1sfr!2sci!4v1689784594489!5m2!1sfr!2sci"
                           allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
}