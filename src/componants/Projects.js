import React, { useState } from "react";
import link from '../images/link.png'
import insta from '../images/insta (2).png'
import wordcounter from '../images/wordcounter.png'
import todo from '../images/todo.png'
import food from '../images/food.png'
import furniture from '../images/furniture.png'
import './projects.css'

function Projects(){

const[showlink,setshowlink] = useState(false)


const show = ()=>{
    setshowlink(true)
}

const close = ()=>{
    setshowlink(false)
}





    return(
        <div id="project"  >
                <h4 >Projects</h4>

            <div className="projects">
                <div className="myprojects">
                    
                    <div className="project">
        
                        <div className="image">
                            <ol>
                                <li>
                                    <img 
                                        onMouseOver={show}
                                        onMouseDown={close}
                                        id="image" src={wordcounter}>
                                    </img>
                                </li>
                                            {showlink &&(
                                               <a href="https://rajupeddinti.github.io/word-counter/"><img className="projectlink" src={link} ></img></a> 
                                            )}
                                <li><h5>Word Counter</h5></li>
                                <li><p>A word counter is a handy tool that provides a quick and precise count of the number of words in a given text. Widely used in various contexts, from academic writing to social media posts, word counters assist users in adhering to specific length requirements</p></li>
                            </ol>
                        </div>
                    
                        <div className="image">
                            <ol>
                                <li>
                                    <img 
                                        onMouseEnter={show}
                                        onMouseleave={close}
                                        id="image" src={todo}>
                                    
                                    </img>
                                    {showlink && (
                                        <a href="https://rajupeddinti.github.io/To-Do-App/"><img className="projectlink" src={link}></img></a>
                                    )}
                                </li>
                                <li><h5>To-Do Application</h5></li>
                                <li><p>A to-do app is a productivity tool designed to help users organize tasks, manage their time efficiently, and enhance overall productivity. Typically characterized by a simple and user-friendly interface, to-do apps facilitate the creation, tracking, and completion of tasks</p></li>
                            </ol>
                        </div>
                    
                        <div className="image">
                            <ol>
                            <li>
                                <img id="image" src={insta}
                                    onMouseEnter={show}
                                    onMouseleave={close}
                                    >
                                </img>
                                {showlink && (
                                    <a href="https://rajupeddinti.github.io/Instagram/"><img className="projectlink" src={link}></img></a>
                                )}
                            </li>
                                <li><h5>Instagram Profile page</h5></li>
                                <li><p>A random Instagram profile generator is a playful and creative tool that generates fictional or whimsical profiles, including a profile picture, username, bio, and other details. While primarily used for entertainment purposes, such generators can be a fun way to spark creativity.</p></li>
                            </ol>
                        </div>
                    </div>
                    <div className="project2">
                        <div className="image">
                            <ol>
                                <li>
                                    <img id="image" src={furniture}
                                        onMouseEnter={show}
                                        onMouseleave={close} > 
                                    </img>
                                    {showlink && (
                                       <a href="https://rajupeddinti.github.io/Furniture/"><img className="projectlink" src={link}></img></a> 
                                    )}
                                </li>
                                <li><h5>Furniture e-com </h5></li>
                                <li><p>Dedicated front-end developer specializing in furniture e-commerce websites, proficient in translating design concepts into pixel-perfect HTML and CSS. Focused on creating user-friendly interfaces that enhance the online shopping experience for furniture enthusiasts.</p></li>
                            </ol>
                        </div>
                   
                       <div className="image"> 
                            <ol>
                                <li>
                                    <img id="image" src={food}
                                        onMouseEnter={show}
                                        onMouseleave={close}>
                                    </img>
                                    {showlink && (
                                        <a href="https://rajupeddinti.github.io/Restaurant-/"><img className="projectlink" src={link}></img></a>
                                    )}
                                </li>
                                <li><h5>Restaurant e-com</h5></li>
                                <li><p>A restaurant food items project involves the meticulous organization and presentation of a restaurant's menu offerings. This digital initiative goes beyond the traditional printed menu, providing customers with a visually appealing and interactive platform to explore dishes available.</p></li>
                            </ol>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;