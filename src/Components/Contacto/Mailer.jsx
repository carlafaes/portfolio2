import React,{useState} from 'react';
import style from './Mailer.module.css'
import emailjs from '@emailjs/browser';
import '../buttons.css';

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
           
            <form className={style.form_mail} onSubmit={sendEmail} id='form_complete'>
            <label className={style.labels}>Name</label>
            <input className={style.input} type='text'  name='user_name' required placeholder='Your name'/>
            {errors.user_name && (<p>{errors.user_name}</p>)}
            <hr/>

            <label className={style.labels}>Email</label>
            <input className={style.input} type='email'  name='user_email'required placeholder='Your email'/>
            {errors.user_email && (<p>{errors.user_email}</p>)}
            <hr/>

            <label className={style.labels}> Message</label>
            <textarea className={style.input} name='user_message' id='' cols='30' rows='10' required placeholder='Write your message here'></textarea>
            {errors.user_message && (<p>{errors.user_message}</p>)}
            <hr/>
            <button className='btn_'>
            <span id='span1'></span>
                    <span id='span2'></span>
                    <span id='span3'></span>
                    <span id='span4'></span>
                Send
            </button>
            </form>
            <ToastContainer 
            theme='dark'
            />

        </div>
    )
}