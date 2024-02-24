import React from "react";
import Rajupeddinti from '../images/Raju.png.jpg'
import html from '../images/html.png'
import css from '../images/css.png'
import JavaScript from '../images/js.png'
import react from '../images/react.png'
import node from '../images/node.png'
import tailwind from '../images/tailwind.png'
import sql from '../images/sql.png'
import mongo from '../images/mongo.png'
import python from '../images/python.png'
import java from '../images/java.png'
import './About.css'
import Typewriter from "../componants/Typewriter.jsx";
import {useState} from 'react'; 





 function About(){

    const[show,setshow] = useState(false)
    const[visible,setVisible] = useState(false)
    const[isvisible,setIsvisible] = useState(false)
    const text = "I'm Appalaraju Peddinti";

    return(
        <div id="About">
            <div  className="Aboutpage">
                <h4 >About me</h4>
                <div className="one"onMouseEnter={()=>setshow(!show)}>
                    <div className="right">
                        {/* Typewriter for my name */}
                        <h2 ><Typewriter text={text} /> </h2>
                        <p>Enthusiastic and aspiring front-end developer, I am a recent graduate passionate about crafting visually appealing and user-friendly web interfaces. Armed with a solid foundation in HTML, CSS, and JavaScript, I am eager to contribute innovative solutions and stay abreast of the latest industry trends. My academic background, combined with hands-on projects, has honed my skills in responsive design and attention to detail. As a fresh addition to the world of front-end development, I am excited to embrace challenges, collaborate with experienced professionals, and continuously expand my knowledge to create engaging online experiences.</p>
                    </div>
                    <div className="left">
                        <img className="Raju" src={Rajupeddinti}></img>
                    </div>
                </div>
            </div>
                <div className="two" onMouseEnter={()=>setVisible(!visible)}>
                    
                    <h4>Education</h4>
                    <div className="Education">
                        <div> 
                            {visible && (<ol className="Bachelor">
                                <li><h3>Full stack development trainee</h3></li>
                                <li><p>2022-2023 || Cynohub</p></li>
                            </ol>)}
                            
                    </div>
                        <div >  
                            {/* animation for for education  */}
                            {visible && (<ol className="Inter">
                            <li><h3>B.Tech, Computer Science and Engineering</h3></li>
                            <li><p>2019-2023 || Kakinada Institute of Engineering and Technology, Kakinada</p></li>
                             </ol>)}
                            
                        </div>
                        <div>
                            {visible && (<ol className="Bachelor">
                                <li><h3>Intermediate, MPC</h3></li>
                                <li>2017-2019 || AP Model school & Jr.college, Perumali</li>
                            </ol>)} 
                            
                        </div>
                        <div >
                            {visible &&( <ol className="Inter">
                                <li><h3>SSC</h3></li>
                                <li><p>2016-2017 || ZPH School, Nemalam</p></li>
                            </ol>)}
                           
                        </div>
                        
                    </div>
                </div>
                <div className="three" onMouseEnter={()=>setIsvisible(!isvisible)}>

                    <h4>Skills</h4>
                <div className="skills" >
                    {/* Animation when mouseenter into skills section */}
                    {isvisible && (

                        <div className="myskills">
                            <ol>
                                <li><img src={html}></img></li>
                                <li>HTML</li>
                            </ol>
                            <ol>
                                <li><img src={css}></img></li>
                                <li>CSS</li>
                            </ol>
                                
                            <ol>
                                <li><img src={tailwind}></img></li>
                                <li>Tailwind CSS</li>
                            </ol>
                            
                            <ol>
                                <li><img src={JavaScript}></img></li>
                                <li>JavaScript</li>
                            </ol>
                                
                            <ol>
                                <li><img src={react}></img></li>
                                <li>React.js</li>
                            </ol>
                            <ol><li><img src={node}></img></li>
                                <li>Node.js</li>
                           </ol>
                        </div>
                    )}
                    {isvisible && (

                        <div className="bottom">
                            <ol>
                                <li><img src={mongo}></img></li>
                               <li>MongoDB</li>
                            </ol>
                             <ol>
                               <li><img src={sql}></img></li>
                               <li>MySQL</li>
                            </ol>
                            <ol>
                               <li><img src={python}></img></li>
                               <li>Python</li>
                            </ol>
                            <ol>
                               <li><img src={java}></img></li>
                               <li>Java</li> 
                            </ol>
                        </div>
                    )}
                    </div>
                </div>
        </div>
     )
    
}

export default About;