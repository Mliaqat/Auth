import { useState ,useRef} from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const email =useRef();
  const password=useRef();


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submit=(e)=>{
    e.preventDefault()

    const getemail= email.current.value;
    const getpassword=password.current.value;
 let url
    if(isLogin){
  url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvJuFySLArjzzT-vbKNgcKVJndyEJH73A"


    }
    else{
      url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvJuFySLArjzzT-vbKNgcKVJndyEJH73A"
   

    }

     fetch(url,
    {
      method:'POST',
      body: JSON.stringify({
        email:getemail,
        password:getpassword,
        returnSecureToken:true
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      if(res.ok){
    return res.json()
      }else{
        return res.json().then((data)=>{
        
          let error="Error"
          throw new Error(error)
          // if(data && data.error && data.error.message){
          //   error=data.error.message 
          //   alert(error)

          
          // }}
        

        })
      }
    })
        .then((data)=>{
          console.log(data)
        })
        .catch((err)=>{
          alert(err.message)
        })
      }
    

  

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submit}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={email} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={password} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
