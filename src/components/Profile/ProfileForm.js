import { useContext, useRef } from 'react';
import { AuthContex } from '../../Store/Contex';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const password=useRef();

  const ctx=useContext(AuthContex)
  const token=ctx.token;
  console.log(token)
  

  const handlesubmit=(e)=>{
    e.preventDefault()
    const getpassword=password.current.value

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAvJuFySLArjzzT-vbKNgcKVJndyEJH73A",{
      method:'POSt',
      body:JSON.stringify({
        idToken:token,
        password:getpassword,
        returnSecureToken:false


      }),
      hearders:{
        'Content-Type':'application/json'
      }
    }
    )



    
  }
  return (
    <form className={classes.form} onSubmit={(e)=>handlesubmit(e)}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={password} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
