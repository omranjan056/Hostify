import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';  
import { CiCircleChevDown} from 'react-icons/ci'; 
import { CiSearch } from 'react-icons/ci'; 
import { RiWhatsappFill } from 'react-icons/ri'; 
import {auth, provider} from '../helper/Firebase'
import { signInWithPhoneNumber } from 'firebase/auth';
import { display } from '@mui/system';

function Register() {
    const[hostelName, setHostelName] = useState()
    const[latitude, setLatitude] = useState(null)
    const[longitude, setLongitude] = useState()
    const[hostType, setHostType] = useState()
    const[stPrice, setStPrice] = useState();
    const [hostelAdd, setHostelAdd] = useState('');
    const handleHostType = (event)=>{
       if(event.target.value.toLowerCase()==="boy") setHostType(1);
       else if(event.target.value.toLowerCase()==="girl") setHostType(0);
    }
    // useEffect(()=>{
    //     console.log(hostelAdd)
    // }, [hostelAdd])
    const [wnotify, setWNotifiy] = useState(false);
    const handlewnotify = ()=>{
        wnotify===true ? setWNotifiy(false) : setWNotifiy(true);
    }
    //Owner Details 
    const [phoneNo, setPhoneNo] = useState();
    const [ownerName, setOwnerName] = useState();
    const [ownerEmail, setOwnerEmail] = useState();

    const [expand, setExpand] = useState(true)
    const handleExpand = ()=>{
        expand===true ? setExpand(false) : setExpand(true);
    }
    const [expand2, setExpand2] = useState(true);
    const handleExpand2 = ()=>{
        expand2===true ? setExpand2(false) : setExpand2(true);
    }
    const getLocationAdress = ()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);
        })
    }
    useEffect(()=>{
        console.log(latitude);
    }, [latitude])
    useEffect(()=>{
        console.log(longitude)
    }, [longitude])
    const locateIcons ={
        color: latitude===null ? 'rgba(255, 0,0,0.5)' : 'rgb(39, 129, 231)',
    }
    const [Verify, setVerify] = useState(false);
    const otpGen = {
        display: Verify===false ? 'none' : 'flex'
    }
    const nvRxa = {
        height: '100vh',
        background: 'rgb(250, 245, 250)',
        borderRadius: '10px',
        position: 'relative',
        transform: 'translate(-10px, 0px)'
    }
    const nvRxb = {
        width: '100%',
        height: '80px',
        display: 'flex',
        flexDirection: 'column',

    }
    const nvRxc = {
        width:'100%',
        display: 'flex', 
        flexDirection: 'column',
    }
    const nvRxd = {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50px',
        // boxShadow: 'rgba(196, 209, 225, 0.9) 0px 0px 60px',
        fontSize: '25px',
        fontWeight: '500'
    }
    const nvRxe = {
        marginTop: '20px',
        borderBottom: '3px solid white'
    }
    const nvRxf = {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '50px',
        // boxShadow: 'rgba(196, 209, 225, 0.9) 0px 0px 60px',
        fontSize: '25px',
        fontWeight: '500'
    }
    const nvRxg = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
    const nvMca = {
        width: '70%',
        margin: 'auto',
        height: '100%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white'
    }
    // X-series started.
    const nvXca = {
        height: 'auto', 
        background:'rgb(250, 245, 250)', 
        borderRadius: '10px', 
        display: 'flex', 
        flexDirection: 'column', 
        padding: '20px', 
        gap: '20px'
    }
    const nvXcb = {
        fontSize: '3rem', 
        letterSpacing: '1px',
        lineHeight: '4.8rem',
        color: 'rgb(54, 54, 54)',
        marginBottom: '20px'
    }
    const nvXcc = {
        display: 'flex', 
        flexDirection:'column', 
        padding: '20px', 
        border: '1px solid rgba(0,0,0,0.3)', 
        borderRadius: '10px',
        height: expand===false ? '90px' : 'auto', 
        overflow: 'hidden', 
        transition: 'height 0.5s'
        // caretColor: 'transparent'
    }
    const nvXc2 = {
        gap: '25px',
        display: 'flex', 
        flexDirection:'column', 
        padding: '20px', 
        border: '1px solid rgba(0,0,0,0.3)', 
        borderRadius: '10px',
        height: expand2===false ? '90px' : 'auto', 
        overflow: 'hidden', 
        transition: 'height 0.4s'
    }
    const exp2 = {
        transform: expand2===false ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'all .6s ease',
    }
    const nvXcd = {
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between'
    }
    const nvXce = {
        fontSize: '20px',
        display: 'flex', 
        flexDirection: 'column',
    }
    const nvXcf = {
        fontSize: '30px'
    }
    const HostInfo = {
        width: '100%',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    const nvXcgg = {
        width: '35%', 
        marginTop: '30px', 
        position: 'relative'
    }
    const nvXcgh = {
        width: '60%', 
        marginTop: '30px', 
        position: 'relative'
    }
    const nvXch = {
        marginTop: '15px',
        fontSize: '20px',
    }
    const nvXci = {
        marginTop: '20px',
        paddingRight: '24px',
        position: 'relative', 
        display: 'flex', 
        flexWrap: 'wrap', 

    }
    const nvBcg = {
        height: '15px',
        cursor: 'pointer',
        width: '15px',
        background: wnotify===false ? 'white' : 'rgb(39, 129, 231)',
        border: '2px solid rgb(39, 129, 231)',
        // margin: '0px 20px 0px 5px',
        borderRadius: '5px'
    }
  return (
    <div>
        <div className='container'>
            <div style={{marginTop: '100px'}} className='row'>
                <div style={nvRxa} className='sideBar col l3 m12 s12 white z-depth-1 hoverable'>
                    <div style={nvRxb}>
                        <div style={nvRxc}>
                            <div style={nvRxd}>
                            <p style={{padding: '3px'}}>1. Create Your Hostel Home Page</p>
                                <div style={nvRxe}></div>
                                <div className='regType'>
                                    <div className='part1'>
                                      <div className='point'></div>
                                    </div>
                                    <div className='part2'>
                                        <p>Hostel Imformation</p>
                                        <small>Hostel name, address, contact no, owner details.</small>
                                    </div>
                                </div>
                                <div className='regType'>
                                    <div className='part1'>
                                      <div className='point2'></div>
                                    </div>
                                    <div className='part2'>
                                        <p>Upload Images</p>
                                        <small>Hostel, Rooms, Porch, owner's</small>
                                    </div>
                                </div>
                            </div>
                            <div style={nvRxf}>
                                <p style={{padding: '3px'}}>2. Register for online</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={nvXca} className='col l8 m12 s12 z-depth-1'>
                    <div style={nvXcb}>Hostel Information</div>
                    <div style={nvXcc}>
                        <div style={nvXcd}>
                            <div style={nvXce}>
                                <div>Hostel Details</div>
                                <small>Name, Adress, Location</small>
                            </div>
                            <div style={nvXcf}>
                                <CiCircleChevDown className='expand' onClick={handleExpand}/>
                            </div>
                        </div>
                        <div style={HostInfo}>
                            <div className='resInfo' style={nvXcgh}>
                                <input className='resInput' required='required' type="text" onChange={(e)=>setHostelName(e.target.value)}/>
                                <span className='restName'>Hostel Name</span>
                            </div>
                            <div className='resInfo' style={nvXcgg}>
                                <input className='resInput' required='required' type="text" onChange={handleHostType}/>
                                <span className='restName'>Hostel Type</span>
                            </div>
                        </div>
                        <div style={HostInfo}>
                            <div className='resInfo' style={nvXcgh}>
                                <input className='resInput' required='required' type="text" onChange={(e)=>setHostelAdd(e.target.value)}/>
                                <span className='restName'>Hostel Complete Adresss</span>
                            </div>
                            <div className='resInfo' style={nvXcgg}>
                                <input className='resInput' required='required' type="text" onChange={(e)=>setStPrice(e.target.value)}/>
                                <span className='restName'>Strating Price</span>
                            </div>
                        </div>
                        <div style={nvXch}>Please place the pin accurately at your outlet’s location on the map</div>
                        <p>This will help your Tenants to locate your hostel</p>
                        
                            <div className = 'searcher'>
                                <CiSearch className='locIcon' />
                                <input placeholder='Enter your Hostel locality, eg. Sector 3 Mahavir Nagar-3' className='locationInput' type="text" />
                                <div style={locateIcons} className='locateIcons'>
                                    <i style={{pointerEvent: 'none'}} className="material-icons">gps_fixed</i>
                                    <p className='Detect' onClick={getLocationAdress}>Detect</p>
                                </div>
                            </div>
                        
                        <div className='mapLoc'></div>
                        <div className='borderLine'>
                            <div className='directEnter'>or directly enter the co-ordinates</div>
                        </div>
                        <div className='lonLat'>
                            <div className='latitude'>
                                <input className='latInput' placeholder='Latitude' value={latitude} type="text" onChange={(e)=>setLatitude(e.target.value)}/>
                            </div>
                            <div className='longitude'>
                                <input className='lonInput' placeholder='Longitude' value={longitude} type="text" onChange={(e)=>setLongitude(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div style={nvXc2}>
                        <div style={nvXcd}>
                            <div style={nvXce}>
                                <div>Hostel Owner Details</div>
                                <small>These will be used to share revenue related communications</small>
                            </div>
                            <div style={nvXcf}>
                                <CiCircleChevDown style={exp2} className='expand' onClick={handleExpand2}/>
                            </div>
                        </div>
                        <div className='nvBca'>
                            <div className='nvBcb'>
                                <div className='nvBcd'>+91</div>
                                <input className='nvBce' placeholder='Mobile number of owner' type="text" onChange={(e)=>setPhoneNo(e.target.value)}/>
                            </div>
                            <div className='nvBcc' onClick={()=>setVerify(true)}>{Verify ? 'Resend OTP' : 'Verify'}</div>
                        </div>
                        <div style={otpGen} className='OTPVerification'>
                            <div className='otpGen' >
                                <input type="text" className='otpInput'/>
                                {/* <div className='otpVerify'></div> */}
                            </div>
                            <div className='submitOTP'>Submit</div>    
                        </div>
                    <div className='nvBcf'>
                            <div style={nvBcg} onClick={handlewnotify}></div>
                            <p>Yes, I would like to receive important updates and notifications from Hostlify on my WhatsApp
                            <RiWhatsappFill/></p>
                        </div>
                        <div className='lonLat'>
                            <div className='latitude'>
                                <input style={{textOverflow: 'hidden'}} className='latInput' placeholder='Hostel owner full name' type="text" onChange={(e)=>setOwnerName(e.target.value)}/>
                            </div>
                            <div className='longitude'>
                                <input className='lonInput' placeholder='Hostel owner email address' type="text" onChange={(e)=>setOwnerEmail(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='move z-depth-3'>
            <div style={nvMca}>
                <div className='moveBtn btn white black-text'>
                    <AiFillCaretLeft/>
                    Previous
                </div>
                <div className='moveBtn btn blue'>
                    Next
                    <AiFillCaretRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register