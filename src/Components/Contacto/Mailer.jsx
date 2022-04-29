import React,{useState} from 'react';
import style from './Mailer.module.css'
import emailjs from '@emailjs/browser';

//probando terminal

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact( initial = {}){
const [errors,setErrors] = useState({}) //estado local que arranca con un obj vacio
const [inputForm,setInputForm]=useState({
    user_name:'',
    user_email:'',
    user_message:''
})





const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_stu3969','template_lejafpj',e.target,'H0NguBXqHykea033Q')
    .then(response =>{
        message();
    })
    .catch(error => messageError())
}

const message= ()=>{
    toast.success('Message send succesfully!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

const messageError= ()=>{
    toast.error('Ups!something is wrong, please try again later', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}



    return(
        <div id='contact' className={style.container}>
            <h2>Contact me</h2>
            <form className={style.form_mail} onSubmit={sendEmail} id='form_complete'>
            <label>Name</label>
            <input type='text'  name='user_name' required placeholder='Your name'/>
            {errors.user_name && (<p>{errors.user_name}</p>)}
            <hr/>

            <label>Email</label>
            <input type='email'  name='user_email'required placeholder='Your email'/>
            {errors.user_email && (<p>{errors.user_email}</p>)}
            <hr/>

            <label>Message</label>
            <textarea  name='user_message' id='' cols='30' rows='10' required placeholder='Write your message here'></textarea>
            {errors.user_message && (<p>{errors.user_message}</p>)}
            <hr/>
            <button>
                Send
            </button>
            </form>
            <ToastContainer 
            theme='dark'
            />

        </div>
    )
}