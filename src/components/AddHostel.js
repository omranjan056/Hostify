import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function AddHostel() {
    const [popup, setPopUp] = useState('close');
    const handleClick = ()=>{
        switch(popup){
            case "close":
                setPopUp('open');
                return;
            case "open":
                setPopUp('close');
                return;
            default:
                setPopUp('close');
                return;
        }
    }

    const nvCxa = {
        width: '100%',
        height: '420px',
        backgroundColor: 'black',
        fontFamily: 'font-family: Okra,Helvetica,sans-serif'
    }
    const nvCxb = {
        width:'80%',
        height: '100%',
        margin:'0 auto',
        paddingLeft: '30px',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent:'center'
    }
    const nvCxc = {
        fontWidth:'500',
        fontSize: '36px',
        color: 'white'
    }
    const nvCxd = {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        // overflow: 'hidden'
        // justifyContent: 'center'
    }
    const nvCxe = {
        color:'white',
        backgroundColor: 'rgb(39,129,231)',
        border: '1px solid grey',
        padding: '10px 50px',
        fontSize: '1.4em',
        borderRadius: '7px',
        marginRight: '30px',
        height: '60px',
        width: '400px',
        cursor:'pointer',
        // minHeight: '70px',
        overflow: 'hidden',
        marginBottom: '8px'
        // minWidth: '15rem',

        // backgroundColor: 'blue'
    }
    const nvCxf = {
        color:'black',
        backgroundColor: 'white',
        border: '1px solid grey',
        padding: '10px 50px',
        fontSize: '1.4em',
        width: '400px',
        borderRadius: '7px',
        marginRight: '20px',
        height: '60px',
        cursor:'pointer',
        // minHeight: '70px',
        overflow: 'hidden',
        marginBottom: '8px'
        // minWidth: '15rem',

        // backgroundColor: 'blue'
    }
    const nvCxg = {
        color: 'white',
        margin:'6px 0 10px'
    }
    const nvCxh = {
        height: '340px',
        width: '100%',
        backgroundColor: 'rgb(244,244,244)',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center'
        alignItems: 'center'
    }
    const nvCxi = {
        width: '50%',
        minWidth: '350px',
        // maxHeight: '100%',
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: '6px',
        marginTop: '-50px',
        padding: '32px',
    }
    const nvCxj = {
        color: 'rgb(54, 54, 54)',
        fontSize: '35px',
        textAlign: 'center',
        fontWeight: '500'
    }
    const nvCxk = {
        textAlign: 'center',
        fontSize: '1vw',
        color: 'rgb(105, 105, 105)'
    }
    const nvCxl = {
        width: '70%',
        maxHeight: '160px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '30px',
        // overflow: 'scroll'
        // marginLeft: '20px'
    }
    const nvCxm = {
        minWidth: '50%',
        minHeight: '40px',
        color: 'rgb(54, 54, 54)',
        fontSize: '19px',
        fontWeight: '500'
    }
  return (
    <div style={{position: 'relative'}}>
        <div style={nvCxa} className="nvCxa">
            <div style={nvCxb}>
                <div style={nvCxc}>Register your hostel</div>
                <h5 style={nvCxg}>and get more tenants</h5>
                <div style={nvCxd}>
                    <button style={nvCxe} className="nvCxe"><Link to ='/addHostel/register' style={{color: 'white'}}>Register your Hostel on Netlify</Link></button>
                    <button style={nvCxf} className="nvCxe">Already listed? Login Now</button>
                </div>
            </div>
        </div>
        <div style={nvCxh}>
            <div style={nvCxi}>
                <div style={nvCxj} className="nvCxj">Get started with online services</div>
                <p style={nvCxk} className="nvCxk">Please keep the documents ready for a smooth signup</p>
                <div style={nvCxl} className="nvCxl">
                    <div style={nvCxm}><span>FSSAI license copy</span></div>
                    <div style={nvCxm}><span>PAN Card Copy</span></div>
                    <div style={nvCxm}><span>Regular GSTIN</span></div>
                    <div style={nvCxm}><span>Band Account Detail</span></div>
                    <div style={nvCxm}><span>Hostel images</span></div>
                    <div style={nvCxm}><span>Top Achivments</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddHostel