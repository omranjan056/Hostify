import React, { useState } from 'react'
import {FcGoogle} from "react-icons/fc"
import { useHistory } from 'react-router-dom';
import {auth, provider} from '../helper/Firebase'
import { signInWithPopup } from 'firebase/auth';
// import {SingInWithGoogle} from '../helper/Firebase'

function Login() {
  const[phoneNo, setPhoneNo] = useState();
  const history = useHistory();

  const handleLogin = ()=>{
    signInWithPopup(auth, provider)
    .then(()=>{
      history.push('/cart')
    })
  }

  const [login, setLogin] = useState('open');
  const handleClick = ()=>{
    setLogin('close')
    console.log(phoneNo)
    history.push('/')

  }
  const nvLxa = {
    visibility: login==='open'?'visible':'hidden'
  }
  const nvLxb = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  const nvLxc = {
    width: '470px',
    height: '500px',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '0px 40px',
    caretColor: 'transparent',
    position: 'relative'
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
  const nvLxg = {
    
  }
  const nvLxh = {
    widht: '100%',
  }
  const phone_no = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.3rem',
    fontSize: '1.6rem',
    border: '2px solid rgb(207, 207, 207)',
    borderRadius: '6px',
    paddingRight: '30px'
  }
  const nvLxi ={
    border: 'none',
    height: '40px',
    margin:'0px',
    // padding: ' 15px',
    outline: 'none',
    fontSize: '20px'
    // borderRadius: '3px'
  }
  const nvLxj ={
    Width: 'max-content'
  }
  const nvLxk = {
    marginRight: '29px',
  }
  const nvLxl = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }
  const nvLxm = {
    display: 'flex',
    alignItems: 'center'
  }
  const nvLxn = {
    fontSize: '18px' ,
    minWidth: '4rem', 
    textAlign: 'right'
  }
  const nvLxo = {
    paddingLeft: '10px',
    color: 'rgb(214, 65, 85)',
    fontSize: '0.85rem',
    visibility: 'hidden'
  }
  const nvLxp = {
    width: '100%',
    height: '48px',
    marginTop: '20px',
    backgroundColor: 'rgb(224,53,70)',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
  const nvLxq = {
    fontSize: '20px',
    color: 'white'
  }
  const nvLxr = {
    height: '10px',
    marginTop: '40px'
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
  const LoginPage = {
    // scale()
  }
  const sssss = {
    width: '100vw',
    height: '100vh'
  }
  
  return (
  <div style={sssss}>
    <div style={LoginPage}>
      <div style={nvLxa} className = "nvLxa">
        <div style={nvLxb}>
          <div style={nvLxc} className="nvLxc">
            <section className='nvLxd' style={nvLxd}>
              <h2 style={nvLxe}>Login</h2>
              <i className="material-icons" style={nvLxf} onClick={handleClick}>close</i>
            </section>
            <section style={{marginTop: '40px'}}>
              <section style={nvLxg}>
                <div style={nvLxh} typeof="text" pattern="[0-9]{1}">
                  <div style={phone_no}>
                    <div style={nvLxj}>
                      <div style={nvLxk}>
                        <div style={nvLxl}>
                          <div style={nvLxm}>
                            <span style={nvLxn}>+91</span>
                          </div>
                          <i className="material-icons">expand_more</i>
                        </div>
                      </div>
                    </div>
                    <input type="text" placeholder='Phone' style={nvLxi} onChange = {(e)=>{setPhoneNo(e.target.value)}}/>
                  </div>
                </div>
                <p style={nvLxo}>Invalid Phone Number</p>
                <button style={nvLxp} ><span style={nvLxq} >Send One Time Password</span></button>
                <div style={nvLxr}>
                  <hr />
                  {/* <span style={nvLxs}>or</span> */}
                </div>
                {/* <div>{phoneNo}</div> */}
                <button className="GlogiN" style={nvLxs} onClick={handleLogin}>
                  <FcGoogle/>
                  <span  style={{margin: '0px 20px'}}>Continue with Google</span>
                </button>
                <button style={nvLxs}>
                  <i className="material-icons pink-text text-lighten-2">mail</i>
                  <span style={{margin: '0px 25px'}}>Continue with Email</span>
                </button>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login