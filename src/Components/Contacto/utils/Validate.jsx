export default function Validate(inputForm){
    let error={};

    if(!inputForm.user_name){
        error.user_name = 'A name is required'
    }

    if(!inputForm.user_email){
        error.user_email = 'The email is required'
    }

    if(!inputForm.user_message){
        error.user_message = 'A message is required'
    }


}