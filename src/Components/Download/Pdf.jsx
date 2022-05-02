import React,{useEffect} from 'react'


export default function Pdf(){

useEffect(()=>{
    if(typeof window.orientation !== 'undefined'){
            document.getElementById('link_Download_Pdf').click()
            window.close()
    }
},[])

    return(
        <div>
            <object 
            data={require('./CarlaCV.pdf')} 
            type="application/pdf"
            width='100%'
            height='100%' >
                    <br/>
                    <a href={require('./CarlaCV.pdf')} id='link_Download_Pdf'>
                    If your device cannot display the pdf, click here to download it.
                    </a>
            </object>
        </div>
    )
}