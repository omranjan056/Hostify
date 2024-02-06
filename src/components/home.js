import React, { useEffect, useState } from 'react'
import useFetch from '../useFetch';
import Loading from '../helper/Loading';
import { IoMdLocate } from "react-icons/io";

function Home() {
    const [location, setLocation] = useState(null);
    const{data, isPending, error}= useFetch('http://localhost:8002/LandMark')
    const [wordEntered, setWordEntered] = useState();
    const handleClick = ()=>{
        setWordEntered('');
    }
    const handleLocate = ()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setLocation(pos);
            console.log(pos.coords.longitude)
        })
    }
    useEffect(()=>{
        if(location){
            console.log(location.coords.longitude);
            console.log(location.coords.latitude);
        }
        // console.log(location.coords.latitude);
    },[location])
    const board = {
        position: 'relative',
        width: '100vw',
        height: '85vh', 
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url('./picture/frontLogo.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const Find = {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        fontSize: '1.5rem',
        border: '2px solid white',
        // borderRight: '0px solid white', 
        paddingLeft: '10px', 
        width: '60%',
        borderRadius: '10px',
        marginRight: '-32px'
    }
    const Folder = {
        display: 'flex', 
        flexDirection: 'column',
        // alignItems:'center',
        justifyContent: 'center', 
        padding:'0 40px 20px',
        top:'100px',
        width: '70%',
        position: 'relative',
        borderRadius: '50px',
        zIndex: '2',
        marginLeft: '200px'
    }
    const container = {
        display: 'flex', 
        // flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center'

    }
    const filterdata = {
        backgroundColor: 'white', 
        padding: '40px 0 20px 0'
    }
    const handleFilter = (event)=>{
        const searchword = event.target.value;
        setWordEntered(searchword);
    }
    const bookBtn = {
        fontWeight: 'bold',
        backgroundColor:'white',
        padding: '2px 5px 0',
        borderRadius: '5px'
    }
    const searching = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    }
    const searchIcon = {
        color: 'white',
        position: 'relative',
        bottom: '0.3rem',
        cursor: 'pointer',
        caretColor:'transparent'
    }
    const Locate = {
        postion: 'rel',
        color: '#fc8019',
        position: 'relative',
        right: '10rem',
        bottom:'1rem',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',

    }
    const LocateBtn = {
        color:'#fc8019',
        fontWeight: '700',
        fontSize: '15px',
        padding: '10px',
        caretColor: 'transparent'
    }
    const nvBoa = {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '100'
    }
    const nvBob = {
        height: '100%',
        width: '80%',
    }
    const nvBoc = {
        width: '100%',
        height: '30%',
        display: 'flex'
    }
    const nvBod = {
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: 'white'
    }
    const nvBoe = {
        width: '80%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    }
    const nvBof = {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        felxWrap: 'wrap'
    }
    const nvBog = {
        width: '100%',

    }
    const locInput = {
        position: 'relative',
        width: '70%'
    }
    const Locme = {
        width: '30%',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        transform: 'translateX(-250px)',
        gap: '10px',
        fontSize: '20px',
        color: location===null ? 'rgb(252, 127, 17)' : 'rgb(39, 201, 63)',
        fontWeight: '500',
    }
  return (
    <div className="home">
        <div style={board} className="board">  
            <div style={nvBoa}>
                <div style={nvBob}>
                    <div style={nvBoc}></div>
                    <div className='hide-on-med-and-down' style={nvBod}>
                        <div style={nvBoe}>
                            <h2 style={{
                                margin: '0px 0px 10px 10px',
                                color: 'white', 
                                fontSize: '3rem',
                                padding: '0px',
                                fontWidth: '500'
                                }}>Book Your Hostel
                            </h2>
                            <div style={nvBof}>
                                <div className='locInput' style={locInput}>
                                    <input className='findLoc' style={nvBog} type="Enter your Nearest location" value={wordEntered} onChange={handleFilter}/>
                                    {/* <span className='locPlaceholder' style={nvBoj}>Enter your Nearest Location</span> */}
                                </div>
                                {/* <input className='findLoc' style={nvBog} type="Enter your Nearest location" value={wordEntered} onChange={handleFilter}/> */}
                                {/* <span>Enter you Nearest Location</span> */}
                                <div style={Locme} className='Locme'>
                                    <IoMdLocate />
                                    <div className='locBtn' onClick={handleLocate}>Locate Me</div>
                                    <i className="findIcon material-icons white-text" onClick={handleClick}>{wordEntered ? 'close' : 'search'}</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='show-on-med-and-down' style={nvBod}>
                        <h2 style={{
                            margin: '10px',
                            color: 'white', 
                            fontSize: '2rem',
                            margin: '0px',
                            padding: '0px',
                            fontWidth: '500'
                            }}>Book Your Hostel
                        </h2>
                        <div style={nvBof}>
                            <input className='findLoc' style={nvBog} type="Enter your Nearest location" />
                            <div className='Locme'>
                                <IoMdLocate />
                                <div>Locate Me</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div style={Folder}>
                <h2 style={{color: 'white', fontSize: '3rem'}}>Book Your Hostel</h2>
                <div className="searching" style={searching}>
                    <input style={Find} type="text"placeholder='Enter your nearest Landmark' value={wordEntered} onChange={handleFilter}/>
                    <i className="material-icons hide-on-med-and-down" onClick={handleClick} style={searchIcon}>{wordEntered ? 'close' : 'search'} </i>
                    <div style={Locate} className= "hide-on-med-and-down">
                        <IoMdLocate />
                        <button className='btn transparent hide-on-med-and-down' style={LocateBtn} >Locate Me</button>
                    </div>
                </div>
                
            </div> */}
        </div>
        {error && <div>{error}</div>}
        {isPending && <div style={container}><Loading/></div>}
        {data && <div className="filterdata" style={filterdata}>
           <div className="row" style={{width: '80%'}}>
                {
                    data.slice(0,20).map((value, index)=>{
                        return (
                            <div key={index} className="col s12 m6 l3 z-depth-0 const" >
                                <div className="card medium white">
                                    <div className="card-image cardImage">
                                        <img src={`./picture/hostel-${value.id}.jpg`} alt="" />
                                    </div>
                                    <div className="card-content black-text">
                                        <span className="card-title black-text center-align" style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{value.name}</span>
                                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                    </div>
                                    {/* <div style={rating}></div> */}
                                    <div className="card-action center-align">
                                        <a href="/" style={bookBtn}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
           </div>
        </div>}
    </div>
)}

export default Home