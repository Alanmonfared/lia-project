import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

interface LoginProps {
  
}
 
const Login: React.FunctionComponent<LoginProps> = () => {
 
  const [message, setMessage] = useState('')
  const {id} = useParams(); 



  useEffect(() => {

    if (id) {
      setMessage('its working' + id)
    } else {
      setMessage('no id')
    }


  })


  return ( <div><h1>{message}</h1></div> );
}
 
export default Login;