import { useRef } from 'react'
import React from 'react'

function Form({cardgenerator}) {
    const nameref=useRef();
    const passref=useRef();

    const handlee=(e)=>{
        e.preventDefault();
        const name=nameref.current.value;
        const pass=passref.current.value;
        console.log(`Name: ${name}, Password: ${pass}`);
        cardgenerator(name, pass);
    }
  return (
    <div className='form-container'>
<form action="" onSubmit={handlee}>
    <h1>Info form</h1>
<label htmlFor="Name">Name :</label>
<input type="text" id="Name"  required ref={nameref}/> <br /><br />
<label htmlFor="password"> Password :</label> 
<input type="text" name="" id="password"  required ref={passref}/> <br /><br />
<button>Submit</button>

</form>

    </div>
  )
}

export default Form