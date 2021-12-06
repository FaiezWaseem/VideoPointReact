import * as React from 'react'
import { useParams } from 'react-router-dom';
import SignUp from '../component/Auth/SignUp'
import SignIn from '../component/Auth/SignIn'
export default function Auth(){
    const { userName } = useParams();
    
    return(<>
      {
          userName === 'signup' ? <SignUp /> : <SignIn />
      }
    </>)
}