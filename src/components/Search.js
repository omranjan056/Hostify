import React, { useState } from 'react'
import Loading from '../helper/Loading';
import useFetch from '../useFetch';
import { AiFillStar } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
// import { height } from '@mui/system';
//style with nvDx{letter}

function Search() {
    const [radius, setRadius] = useState(0);
    const [price, setPrice] = useState(0);
    const [type, setType] = useState(false);
    const [filterPrice, setFilterPrice] = useState(5000);
    const [filterRadius, setFilterRadius] = useState(500);
    const [dataShow, setDataShow] = useState([]);
    const [filterdbytype, setFilteredByType] = useState(null);
    const [filterbyprice, setFilterByPrice] = useState(null);
    const [rotate, setRotate] = useState(false);
    const {data, isPending, error} = useFetch('http://localhost:8002/LandMark')
    const [filterdData, setFilterdData] = useState([])
    const [wordEntered, setWordEntered] = useState()
    const [typeValue, setTypeValue] = useState(-1);
    // const [price, setPrice] = useState(50)
    const handleFilter = (event)=>{
        const wordSearched = event.target.value
        setWordEntered(wordSearched)
        const newFilter = data.filter((value)=>{
            return value.name.toLowerCase().includes(wordSearched.toLowerCase())
        })

        if(wordSearched===""){
            setFilterdData([])
            setDataShow([]);
        }else{
            setFilterdData(newFilter)
            setDataShow(newFilter);
        }
    }
    const handleRoate = ()=>{
        setRotate(!rotate);
    }
    const hadleType = ()=>{
        if(type===true){
            setType(false);
            setTypeValue(-1);
        }
        else {
            setType(true);
        }
    }
    const handleRadius = ()=>{
        radius===0 ? setRadius(5) : setRadius(0);
        console.log(radius)
    }
    const handleClick = ()=>{
        setWordEntered('')
        setFilterdData([])
    }
    const funcfilterbyprice = (e)=>{
        setFilterPrice(e);
        let filterbyrate;
        if(filterdbytype != null){
            filterbyrate = filterdbytype.filter((item)=>{
                return item.price <= filterPrice;
            })
        }
        else if(filterdData.length > 0){
            filterbyrate = filterdData.filter((item)=>{
                return item.price <= filterPrice;
            })
        }
        else if(data.length > 0){
            filterbyrate = data.filter((item)=>{
                return item.price <= filterPrice;
            })
        }
        setFilterByPrice(filterbyrate);
        setDataShow(filterbyrate);
    }
    const handleTypeValue=(value)=>{
        setTypeValue(value);
        // let filterAfterType = [...filterdData];
        let filterType;
        if(filterbyprice != null){
            filterType = filterbyprice.filter((item)=>{
                return item.type.toString().includes(value.toString());
            })
        }
        else if(filterdData.length===0){
            filterType = data.filter((item)=>{
                return item.type.toString().includes(value.toString());
            })
        }
        else{
            filterType = filterdData.filter((item)=>{
                return item.type.toString().includes(value.toString());
            })
        }
        setFilteredByType(filterType);
        setDataShow(filterType);
    }

    

    const nvDxa = {
        backgroundColor: 'white',
        padding: '60px 0 20px',
        zIndex: '3',
        height: '40vh',
        background: '#282c33'
    }
    const nvDxb = {
        maxWidth: '800px',
        // overflow:'hidden',
        margin: '0 auto 8px'
    }
    const nvDxc = {
        width: '80%',
        margin: '0 auto',
    }
    const nvDxi = {
        border: '1px solid grey',
        marginRight: '-2rem',
        borderRadius: '4px',
        paddingLeft:'20px',
        fontFamily: 'font-family:ProximaNova,arial,Helvetica Neue,sans-serif',
    }
    const inputBox = {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
    }
    const nvDxd = {
        height: '50px'
    }
    const nvDxf = {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center'
    }
    const nvDxg = {
        cursor: 'pointer',
        caretColor:'transparent',
        color: 'black',
        transform: 'translateX(-30px) translateY(-3px)',
    }
    const items = {
        width: '100%', 
        height: '220px',
        backgroundColor:'rgb(239,342,248)',
        marginBottom: '20px', 
        borderRadius:'10px',
        // padding:'5px'
    }
    const zvCxa = {
        width: '100%', 
        height: '100%',
        display: 'flex',
        // padding:'20px'
    }
    const zvCxb = {
        width: '50%', 
        backgroundColor: 'white',
        display: 'flex', 
        flexDirection: 'column', 
        // justifyContent: 'center',
        padding: '5px'
    }
    const zvCxc = {
        width: '50%',
        display: 'flex',
        padding: '5px 20px 0 0',
        flexDirection:'column',
        alignItems: 'flex-end',
        backgroundColor: 'white'
    }
    const zvCxd = {
        width: '100%',
        height: '70%', 
    }
    const zvCxe = {
        width: '100%', 
        height: '30%',
        // backgroundColor: 'blue',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-end'
    }
    const zvCxf={
        // padding: '4px',
        // paddingLeft:'0px',
        display: 'flex'
    }
    const title={
        fontSize: '20px',
        fontWeight: '500',
        maxheight: '30px',
        textAlign: 'right',
        maxHeight: '60px',
        overflow: 'hidden',
    }
    const zvCxg = {
        display: 'flex',
        // flexDirection:'column'
    }
    const zvCxh = {
        backgroundColor: 'white',
        // color: 'red',
        textTransform: 'uppercase',
        fontSize: '17px',
        fontWeight:'600',
        borderRadius:'6px',
        padding: '5px 10px 0 14px',
        position:'relative',
        top:'-4px',
        left: '-4px',
        color:'green'
    }
    const zvCxi={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    }
    const zvCxj = {
        // width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    }
    const zvCxl = {

    }
    const priceTag = {
        fontSize: '20px',
        color: 'black',
        fontWeight: '500'
    }
    const pTag = {
        textAlign: 'right',
        textDecoration:'line-through',
        fontSize: '12px'
    }
    const zvCxm = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
    const zvCxo = {
        display: 'flex',
    }
    const zvCxp = {
        backgroundColor: 'rgb(58,165,65)',
        color: 'white',
        padding: '0px 5px',
        marginLeft: '4px',
        borderRadius: '6px'
    }
    const zvCxq = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: '10px',
        // backgroundColor: 'black'
    }
    const zvCxr = {
        backgroundColor: 'rgb(0,105,92,0.9)',
        color: 'white',
        padding: '3px 10px',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: '500',
        caretColor: 'transparent'
    }
    const zvCxs = {
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        padding: '0 3px',
        color: 'rgb(58,165,65)'
        // color: '#e0e0e0'
    }
    const zvCxt = {
        width: '100%',
        maxHeight: '24px',
        overflow: 'hidden',
        marginBottom: '4px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        fontWeight: '700',
    }
    const searchBar = {
        border: '2px solid black !important'
    }

    const zvCxu = {
        width: '100%',
        height: '140px', 
    }    
    const zvCxv = {
        position: 'relative',
        width: '80%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alintItems: 'flex-end',
        margin: '0 auto'
    }
    const zvCxw = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
    const zvCxx = {
        display: rotate===false ? 'none' : 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', 
        marginTop: '10px'
    }
    const zvCxy = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        border: '1px solid grey',
        borderRadius: '10px', 
        cursor: 'pointer',
        caretColor: 'transparent'
    }
    const zvCxz = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
    const nvCya = {
        transition: 'all .3s ease',
        transform: rotate===true?'rotate(0)':'rotate(180deg)',
    }
    const nvCyb = {
        // display: radius===0 ? 'none' : 'block',
        // width: '350px',
        // height: '500px',
        // background: 'white',
        // position: 'absolute',
        // transform: 'translate(-30px, 510px)',
        // background: 'black',
        // zIndex: '400',
    }
    const typeDrop = {
        visibility: type===false ? 'hidden' : 'visible',
        transform: 'translate(905px, -430px)',
        border: '1px solid grey', 
        borderRadius: '10px'
    }
    const typeIcon = {
        transform: type===false? 'rotate(0deg)': 'rotate(180deg)',
        transition: 'all .3s ease'
    }
    const dot1 = {
        background: typeValue===1 ? 'green' : 'white'
    }
    const dot2 = {
        background: typeValue===0 ? 'green': 'white'
    }
    const pagination = {
        width: '100%',
        height: '50px', 
        display: 'flex',

    }
  return (
    <div>
        <div style={nvDxa} className='nvDxa'>
            <div style={nvDxb}>
                <form action="">
                    <div style={inputBox}>
                        <input className='searchBar' style={searchBar} type="text" placeholder='Search for your hostel and mess' onChange={handleFilter} value={wordEntered}/>
                        {/* <input className='searchHome' style={nvDxi} type="text" placeholder='Search for your hostel and mess' onChange={handleFilter} value={wordEntered}/> */}
                        <i className="material-icons" onClick = {handleClick} style={nvDxg}>{wordEntered? 'close': 'search'} </i>
                    </div>
                </form>
            </div>
            <div style={zvCxu}>
                <div style={zvCxv}>
                    <div style={zvCxw}>
                        <div style={zvCxz}></div>
                        <div style={zvCxy} onClick = {handleRoate}>
                            <i style={nvCya} className="filterIcon material-icons">filter_list</i>
                            <span className='filter'>Filters</span>
                        </div>
                    </div>
                    <div className='filterItem' style={zvCxx}>
                        <div onClick={handleRadius}>
                            <span>Radius - <small className='deep-orange-text text-accent-3'>{filterRadius} m</small></span>
                            <input type="range" min ="0" max="5000" value={filterRadius} step="25" className="radiusSlider" onChange={(e)=>setFilterRadius(e.target.value)}/>
                            
                            {/* <i className="material-icons" onClick={handleRadius}>expand_more</i> */}
                        </div>
                        <div>
                            <span>Price - <small>₹{filterPrice}</small></span>
                            <input type="range" min="0" max="20000" step="100" value={filterPrice} className='typeSlider' onChange={(e)=>funcfilterbyprice(e.target.value)} />
                            {/* <i className="material-icons" onClick={handlePrice}>expand_more</i> */}
                        </div>
                        <div>
                            <span>Room type</span>
                            <i style={typeIcon} className="material-icons" onClick={hadleType}>expand_more</i>
                        </div>
                    </div>
                    <div className='row dropdown' style={nvCyb} >
                        <div style={typeDrop} className="col l3 typeDrop" >
                            <div className='types'>
                                <span onClick={()=>handleTypeValue(1)}>Boys</span>
                                <div style={dot1} className='dot'></div>
                            </div>
                            <div className='types'>
                                <span onClick={()=>handleTypeValue(0)}>Girls</span>
                                <div style={dot2} className='dot'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            margin: '0 auto',
            position: 'relative',
            zIndex: '4',
            borderRadius: '20px',
            background: 'white',
            // background: 'linear-gradient(315deg, rgb(72, 84, 97) 0%, rgb(40, 49, 59) 64%)'
        }}>
            <div style={nvDxc} className="nvDxc">
                <div style={pagination}>
                    <div>

                    </div>
                </div>
                {/* <div style={middleWare}>dsfds</div> */}
                {error&& <div>{error}</div>}
                {isPending && <div className='nvDxf' style={nvDxf}>
                    {isPending && <Loading/>}
                </div>}
                {data && <div  className="row">
                    {
                        dataShow.map((value, index)=>{
                            return(
                                <div key={index} className="col s12 m6 l4">
                                    <div className='shadow' style={items}>
                                        <div style={zvCxa}>
                                            <div style={zvCxb}>
                                                <div style={zvCxd}>
                                                    <div style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundImage: `url(./picture/hostel-${value.id}.jpg)`,
                                                        backgroundPosition:'center',
                                                        backgroundSize: 'cover',
                                                        borderRadius: '10px'
                                                    }}>
                                                        <div style={zvCxi}>
                                                            <div style={zvCxg}>
                                                                <div style={zvCxh}>{value.type==1 ? 'Boys' : 'Girls'}-H</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={zvCxe}>
                                                    <div style={zvCxf}>
                                                            <AiFillStar style={{color:'rgb(255,194,74)', fontSize: '20px'}}/>
                                                            <AiFillStar style={{color:'rgb(255,194,74)', fontSize: '20px'}}/>
                                                            <AiFillStar style={{color:'rgb(255,194,74)', fontSize: '20px'}}/>
                                                    </div>
                                                    <div style={zvCxo}>
                                                        <p style={{fontWeight: '800', fontSize: '12px'}}>Ratings: </p>
                                                        <p style={zvCxp}> {value.id}/10</p>
                                                    </div>
                                                    {/* <span><p style={{fontWeight: '500'}}>Rating:</p><p>4.2/5</p></span> */}
                                                </div>
                                            </div>
                                            <div style={zvCxc}>
                                                <div style={zvCxj}>
                                                    <p style={title}>{value.name}</p>
                                                    <p>B-319, Indra vihar</p>
                                                </div>
                                                <div className='zvCxl' style={zvCxl}>
                                                    <div style={zvCxm}>
                                                        <BiRupee/>
                                                        <p style={pTag}>{2*value.price+2}</p>
                                                    </div>
                                                    <div style={zvCxm}>
                                                        <p>Starting From</p>
                                                        <BiRupee style={{fontSize: '20px'}}/>
                                                        <p style={priceTag}>{value.price}</p>
                                                    </div>
                                                </div>
                                                <div style={zvCxq}>
                                                    <div style={zvCxt}>
                                                        <div style={zvCxs}>Ac</div>
                                                        <div style={zvCxs}>Non-Ac</div>
                                                        <div style={zvCxs}>Single-Bed</div>
                                                        <div style={zvCxs}>Double-Bed</div>
                                                    </div>
                                                    <div>
                                                        <Link to={`/house/${value.id}`}><div className='bookNow' style={zvCxr}>Visit Now!</div></Link>
                                                    </div>
                                                    {/* <a href = {`/house/${value.id}`}><div className='bookNow' style={zvCxr}>Book Now</div></a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>}
            </div>
        </div>
       
    </div>
  )
}

export default Search