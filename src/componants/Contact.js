import React, { useState } from "react";
import './contact.css'
import contactImg from '../images/contact.png'

function Contact(){

    // const [Email, setEmail] = useState("")
    // const [password, setpassword] = useState("")

    const [userForm ,setuserForm] = useState({
        Name: '',
        Email: '',
        message : '',


    })

    const handleonchange = (e)=>{
        const {name, value} = e.target;
        setuserForm((prevstate)=>({
            ...prevstate,
            [name] : value
        }))
        console.log(userForm)
    }

    const handlebtn = (e) =>{
        e.preventDefault()
        console.log(userForm.Name,userForm.Email,userForm.message)
        setuserForm({
            Name: '',
            Email: '',
            message : '',
        })
    }

    function confirmCall(){
        alert('Do you want to call this number')
    }
    function composemail(){
        alert('Do you want to send a mail')
    }

    return(
        <div id="contact">
            <h4>Contact</h4>
        <div className="contact"> 
          <div className="right">
                <img className="contactimg" src={contactImg}></img>
          </div>
            <div className="left">
            <p>Feel free to get in touch with me using the contact form below. I welcome any inquiries, feedback, or collaboration opportunities. I will make it a priority to respond to you promptly.</p>
            <form action="https://submit-form.com/XBzoOTkFS">
                <div>
                    <input required placeholder="Enter your Name" value={userForm.Name} onChange={handleonchange} type="text" name="Name"></input>
                </div>
                <div>
                    <input required placeholder="enter your E-mail" value={userForm.Email} onChange={handleonchange} name="Email"></input>
                </div>
                <div>
                    <textarea required placeholder="Enter your message" value={userForm.message} onChange={handleonchange}  type="text" name="message"></textarea>
                </div>
                <button  type="submit">Send</button>
            </form>
          </div>
                
        </div>
        <div className="footer">
                    <p> <a type="email" href="mailto:peddintiappalaraju7@gmail.com" onClick={()=>{composemail()}}>peddintiappalaraju7@gmail.com</a> </p>
                    <p > <a href="tel:+917659858771" onClick={()=>{confirmCall()}}>+91 7659858771</a> </p>
            
        </div>
        </div>
        
    )
}

export default Contact;