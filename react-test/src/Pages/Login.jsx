import {useState} from 'react'
import axios from 'axios' 

 


export default function Login(){

    const [userInput, setUserInput] = useState({
        email : '',
        password : ''
      })
 
    function handlechange(e){
        const { name , value} = e.target
        var inputs = { ...userInput ,
             [name] : value }
        setUserInput(inputs)
        }
    function handleSubmit(e){
        e.preventDefault()
        console.log(userInput)

        axios({
            method : "post",
            url    : 'https://reqres.in/api/login',
            data : userInput,
        }).then((res)=>{
            console.log(res?.data.token)
        })
        .catch((err)=>{
            console.log(err);
        })
       ;
    }    

     const {email , password } = userInput
    return(<>
     
     <h1>login page</h1>

     <form onSubmit={handleSubmit}>
      <br />
      <br />
      <label> Email :  
      <input type="text" name='email' value={email}  onChange={handlechange}  placeholder='enter email' />
      <br /> 
      <br />
      <label>Password : 
        <input type="text" name='password' value={password} onChange={handlechange} placeholder='enter password' />
      </label>
      <br />
      <br />
      <input type='submit' name='submit'/>
        </label>     
          
    </form>
    </>)
}

// const {email, first_name, last_name} = getdata