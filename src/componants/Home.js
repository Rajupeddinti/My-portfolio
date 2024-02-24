import React from 'react';
import './Home.css'
import Rajupeddinti from '../images/Raju.png.jpg'
import background from '../images/download.jpg'
import close from '../images/close.png'
import { useState } from 'react';


function Home(){

    const[ShowForm,setShowmodel] = useState(false)
    
    const openform = ()=>{
        setShowmodel(true);
        
    }
    

    const closeform = ()=>{
        setShowmodel(false)
    }


    return(
        <div id='home' >
          
            
            <main> 
                {/* <div>
                    <img src={arrow}></img>
                </div> */}
                
                                <div className='hiringform'>
                                    {ShowForm && (
                                        <form action="https://submit-form.com/XBzoOTkFS">
                                            <img className='closeimg' type="button" onClick={closeform} src={close}></img>
                                        <input required placeholder='Company name'></input>
                                        <input required placeholder='Contact details'></input>
                                        <textarea required placeholder='Details'></textarea>
                                        <button type='submit'>Hire me</button>
                                    </form>
                                    )}   
                                </div>
                                <div className={`home ${ShowForm?'blurred':''}`}>
                                    <div className='load'  >
                                        <div className='right'>
                                            <img className='Raju' src={Rajupeddinti}></img>
                                        </div>
                                        <div className='left'>
                                            <span>Hey, I'm Appalaraju Peddinti</span>
                                            <h2>I enjoy designing tech websites and digital products</h2>
                                            <p>As a skilled <i>F</i>ront-<i>E</i>nd developer, I am dedicated to turning ideas into innovative web
                                            applications. Explore my latest projects showcasing my expertise in
                                            React.js and web development.</p>
                                            <button 
                                                onClick={openform} className='Hireme'> 
                                                Hire Me
                                            </button>
                    
                                        </div>
                                    </div>
                                            
                                </div>
               
            </main>
                
        </div>
    )
}

export default Home;