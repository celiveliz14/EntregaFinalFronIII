import React, {useState} from "react";
import useInput from "./actions/useInput";


const Form = () => {
  const name = useInput('text')
  const email = useInput('text')
  const [validation,setValidation] = useState()

  const handleContact = (e) => {
    e.preventDefault();
    if(name.value.length > 5 && email.value.includes('@')) {
      setValidation(true)
    }else{
      setValidation(false)
    }
  }

  const validationWithSwitch = (boolean) => {
    switch(boolean){
      case true:
        return <h2 style={{margin:0,padding:10}}>Gracias {name.value}, te contactaremos cuando antes vía mail</h2>
      case false: 
        return <p style={{margin:0,padding:10}}>Por favor verifique su información nuevamente</p>
      default:
        return null;        
    }
  }

  return (
    <div>
      <form onSubmit={handleContact}>  
        <input {...name}/>
        <input {...email} />
        <button>Send</button>
      </form>
      {validationWithSwitch(validation)}
    </div>
  )
}

export default Form
