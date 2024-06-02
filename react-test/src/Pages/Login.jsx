import {useState, useEffect} from 'react'
import axios  from 'axios'

export default function Login(){
     const [isAuthenticated,setIsAuthenticated] = useState(false)
     const [token, setToken]= useState(null)
     const [email, setEmail] = useState(null)
     const [password,setPassword] = useState(null) 
      
      
      
     
     function handleChange(e){ 
        const {name,value} = e.target
        var prevInput = { ...prevInput, 
            [name] : value }
        setForm(prevInput)
     }
       
     function handleSubmit(e){
       e.preventDefault()
       
       axios({
        method:"post",
        url: 'https://reqres.in/api/login',
        data : form
       }).then((res)=>{
        
       })
        
     }  
    return(<>
       
      
      <label >Email : 
        <input type='text' placeholder='Enter email' value={email}  onChange={handleChange}/>
       </label>
       <label>Password : 
        <input type="text" placeholder='Enter password' name='password' value={password} onChange={handleChange}/>
       </label>
       <input type="submit" name='submit'/>
     
    </>)
}