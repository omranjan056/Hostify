import React, {  useState } from 'react'
import {FcGoogle} from "react-icons/fc"
import { Link, useHistory } from 'react-router-dom';
import {auth, provider} from '../helper/Firebase';
import { signInWithPopup } from 'firebase/auth';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('open');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const signInWithGoogle = ()=>{
    signInWithPopup(auth, provider)
    .then((res)=>{
      localStorage.setItem("name", res.user.displayName);
      localStorage.setItem("email", res.user.email);
      localStorage.setItem("profilePic", res.user.photoURL);
      history.push('/cart');
    })
  }
   
  const register = ()=>{
    if(name==='' || email===''){
      return;
    }
    setIsPending(true)
    const signup = {name, email}
    fetch('http://localhost:8000/userData', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(signup)
    }).then((data)=>{
      setIsPending(false);
      return data.json();
    })
    .then((data)=>{
      console.log('Success:', data);
      history.push('/');
    })
    .catch((err)=>{
      console.log('Error:', err);
    })
  }

  const handleClick = ()=>{
    setLogin('close')
    history.push('/')
  }
  const nvLxa = {
    visibility: login==='open'?'visible':'hidden',
    positions: 'absolute',

  }
  const nvLxb = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const nvLxc = {
    width: '470px',
    height: '530px',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '0px 40px',
    // caretColor: 'transparent'
  }
  const nvLxd = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    caretColor: 'transparent'
    // boxAlign: 'center'
  }
  const nvLxe = {
      fontSize: '30px',
      fontWeight: '500',
      color: 'rgb(79, 79, 79)'
  }
  const nvLxf = {
    cursor: 'pointer',
    caretColor: 'transparent'
  }
  const nvLxi ={
    border: '2px solid rgb(207, 207, 207)',
    borderRadius:'6px',
    height: '40px',
    // marginRight:'80px',
    paddingLeft: ' 15px',
    outline: 'none',
    fontSize: '20px',
    marginBottom: '0px'
    // borderRadius: '3px'
  }
  const nvLxp = {
    width: '100%',
    height: '48px',
    marginTop: '20px',
    backgroundColor: (name==='' || email==='')?'grey':'rgb(26,88,249)',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
  const nvLxq = {
    fontSize: '20px',
    color: 'white',
    letterSpacing: '1.5px'
  }
  const nvLxr = {
    height: '10px',
    marginTop: '30px'
  }
  const nvLxs={
    width: '100%',
    height: '48px',
    marginTop: '20px',
    backgroundColor: 'white',
    border: '2px solid rgb(207, 207, 207)',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '19px',
    fontWeight: '400',
    color: 'rgb(105, 105, 105)',
    letterSpacing: '0.5px',
  }
  const nvLxt = {
    marginTop: '10px',
    paddingLeft:'5px',
    fontSize: '17px',
    color: 'rgb(26,69,197)',
    fontWeight: '500'
  }
  var nvLxu = {
    color: 'rgb(224, 53, 70)',
    marginBottom: '3px',
    fontSize: '13px',
    visibility:'hidden'
  }
  const nvLxz = {
    marginRight: '20px'
  }
  const ssss={
    // height: '100vh',
    // width: '100vw'
  }
  
  return (

    <div style={ssss}>
      <div style={nvLxa} className = "nvLxa">
        <div style={nvLxb}>
          <div style={nvLxc}>
            <section className='nvLxd' style={nvLxd}>
              <h2 style={nvLxe}>Sign Up</h2>
              <i className="material-icons" style={nvLxf} onClick = {handleClick}>close</i>
            </section>
            <section style={{marginTop: '20px'}}>
              <section>
                <div style={nvLxz}>
                  {/* <div className='formInput'>
                    <input id="name" style={nvLxi} type="text" required='require' onChange={(e)=>{setName(e.target.value)}}/>
                    <span htmlFor="name" className='input-message'>Enter Name</span>
                    <p style={nvLxu} id="email">Please enter a valid name</p>
                  </div> */}
                  <div className='inputBox'>
                    <input type="text" required='required' onChange={(e)=>(setName(e.target.value))}/>
                    <span>First Name</span>
                    <p style={nvLxu} id="email">Please enter a valid name</p>
                  </div>
                  <div className='inputBox'>
                    <input type="text" required='require' onChange={(e)=>{setEmail(e.target.value)}}/>
                    <span>Enter email</span>
                    <p style={nvLxu}>Invalid Email id</p>
                  </div>
                  {/* <div>
                    <input id="name" style={nvLxi} type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
                    <span htmlFor="name" className='input-message'>Enter email</span>
                    <p style={nvLxu}>Invalid Email id</p>
                  </div> */}
                </div>
                {!isPending && <button className='signBut' style={nvLxp} onClick={register}><span style={nvLxq}>Create account</span></button>}
                {isPending && <button style={nvLxp} onClick={register}><span style={nvLxq}>Please wait....</span></button>}
                <div style={nvLxr}>
                  <hr />
                  {/* <span style={nvLxs}>or</span> */}
                </div>
                <button className='GlogiN' style={nvLxs} onClick = {signInWithGoogle}>
                  <FcGoogle/>
                  <span style={{margin: '0px 20px'}}>Sign In with Google</span>
                </button>
                <p style={nvLxt}>Already have an account? <Link to='Login' style={{color: 'rgb(26,69,197)',}}>Log In</Link></p>
              </section>
            </section>
          </div>
        </div>
      </div>
      </div>
  )
}

export default SignUp