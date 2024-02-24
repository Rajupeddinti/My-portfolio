import React from 'react';
import './Navbar.css'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import instagram from '../images/instagram.png'
import Raju from '../images/Raju.jpg'



function Navbar(){


        const styles = {
            img:{
                height : '1.5rem'
            }
           
     }
    return(
        <div>

            <header id='top' className='navbar'>
                <div className='right'>
                    <ol>
                        <li><img className='Rajuimage' src={Raju}></img></li>
                        <li><p>RAJU</p></li>
                    </ol>
                </div>
                <div className='center'>
                    <ol>
                        <li><a  href='#home'>Home</a></li>
                        <li><a  href='#About'>About</a> </li>
                        <li><a  href='#project'>Projects</a> </li>
                        <li><a  href='#contact'>Contact</a> </li>
                    </ol>
                </div>
                <div className='left'>
                    <ol>
                         <a href='http://www.linkedin.com/in/appalaraju-peddinti-84983b291'><li ><img style={styles.img} src={linkedin}></img></li></a>
                        <a href='https://github.com/Rajupeddinti?tab=repositories'> <li><img style={styles.img}  src= {github}></img></li></a>
                        <a href='https://www.instagram.com/_____words__of__lies__/'><li><img style={styles.img}   src={instagram}></img></li></a>
                    </ol>
                </div>
            </header>
            </div>
    )}
    export default Navbar;