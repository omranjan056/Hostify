import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../helper/Loading';
import useFetch from '../useFetch';
import {AiFillStar } from "react-icons/ai";
// import { display } from '@mui/system';
// backgroundImage: `url(/picture/hostel-${data.id}.jpg)`,

function Details() {
  const { id } = useParams();
  const{data, isPending, error}= useFetch('http://localhost:8002/LandMark/'+id)

  if(data){
    console.log(data.name)
  }
  
  // console.log(data);
  const nvRca = {
    height: '55vh',
    width: '100vw', 
    background: 'linear-gradient(#1d5962,#39766c)',
    // background: 'linear-gradient(#39766b,#fcfdfc)',
    // background: 'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)',
    // background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
    // background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
    // background: 'linear-gradient(rgb(10,161,232), #00c1de)',
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
  }
  const nvRcb = {
    width: '80%', 
    height: '100%', 
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  }
  const nvRcc = {
    height:'10vh', 
    backgroundColor: 'light-blue',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px'
  }
  const nvRcd = {
    padding: '7px 20px 7px 15px',
    borderRadius: '1040px',
    border:'none',
    fontSize: '20px',
    backgroundColor: 'rgb(251,193,42)',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontWeight: '500',
    cursor: 'pointer'
  }
  const nvRce = {
    zIndex: '2',
    
  }
  const nvRcf = {
    color:'white',
    marginRight: '3px',
    fontSize: '24px',
    fontWeight: '500'
    // position: 'relative',
    // top: '4px'
    // backgroundColor:
  }
  const nvRcg = {
    width: '100%',
    height: '100vh',
    margin: 'auto',
    background: 'linear-gradient(#e0e0e0, white)',
  }
  const nvRch = {
    height: '100%',
    width: '80%',
    margin: 'auto',
    backgroundColor: 'white',
    zIndex: '4',
    position: 'relative'
  }
  const nvRci = {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '25px',
    marginTop: '-40px',
    // overflowX: 'scroll',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    padding: '0px'
  }
  const nvRcj = {
    height: '100%',
    background: 'linear-gradient(#e0e0e0, white)',
  }
  const nvRck = {
    fontSize: '30px',
    fontWeight: '500',
    color: 'white',
    letterSpacing: '3px',
    border: '2px solid #e0e0e0',
    padding: '2px 15px',
    borderRadius: '10px',
    textTransform: 'uppercase'
    // boxShadow: '4px 2px 27px -5px rgba(156,153,156,1)'
  }
  const nvRcl = {
    height: '15%',
    background: 'black',
    width: '100%',
  }
  const nvRcm = {
    borderBottom: '10px solid #e0e0e0'
  }
  const nvMca = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
  const Avtar = {
    background: '#e0e0e0',
    height: '50px',
    width: '50px',
    marginRight:'30px',
    borderRadius:'50%',
    caretColor: 'transparent'
    // border: '1px solid black'
  }

  return (
    <div>
      {isPending && <Loading/>}
      {data && 
          <div>
            <div style={nvRca}  className='showCase'>
              <div style={nvRcb}>
                <div style={nvRcc}>
                  <div style={nvMca}>
                    <a href={`/house/owner/${id}`}><div className='Avtar' style={Avtar}></div></a>
                    <div style={nvRck} className="resName">{data.name}</div>
                  </div>
                  <div style={nvRce}>
                    <button style={nvRcd} className="favorite">
                      <AiFillStar style={nvRcf}/>Favorite</button>
                  </div>
                </div>
              </div>
            </div>

            <div style={nvRcg}>
              <div className='row' style={nvRch}>
                <div className='col s6 m6 l4 groov hide-on-med-and-down' style={nvRci}>
                  <div style={nvRcl}></div>
                  <div style={nvRcm}></div>
                </div>
                <div style={nvRcj}></div>
              </div>
            </div>
          </div>
      }

    </div>
  )
}

export default Details

// import React, { useState } from "react";

// function Application() {
//   const [buttonOne, setButtonOne] = useState(false);
//   const [buttonTwo, setButtonTwo] = useState(false);
//   const [buttonThree, setButtonThree] = useState(false);

//   const handleClick = (e) => {
//     if (e.target.id === "button_one") {
//       setButtonOne(true);
//       setButtonTwo(false);
//       setButtonThree(false);
//     }
//     if (e.target.id === "button_two") {
//       setButtonOne(false);
//       setButtonTwo(true);
//       setButtonThree(false);
//     }
//     if (e.target.id === "button_three") {
//       setButtonOne(false);
//       setButtonTwo(false);
//       setButtonThree(true);
//     }
//   };

//   return (
//     <div id="react-application">
//       <div className="controls">
//         <button id="button_one" onClick={handleClick}>
//           Render Div One
//         </button>
//         <button id="button_two" onClick={handleClick}>
//           Render Div Two
//         </button>
//         <button id="button_three" onClick={handleClick}>
//           Render Div Three
//         </button>
//       </div>
//       <div className="conditional-render-section">
//         {buttonOne ? (
//           <div id="div-one">
//             <div className="img-wrapper">
//               <img src="https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=711&q=80" />
//             </div>
//             <p>credit: unsplash.com - Thank you @dannyeve</p>
//           </div>
//         ) : (
//           <div></div>
//         )}
//         {buttonTwo ? (
//           <div id="div-two">
//             <div className="img-wrapper">
//               <img src="https://images.unsplash.com/photo-1512971577074-a39f29b54a6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
//             </div>
//             <p>credit: unsplash.com - Thank you @wenniz</p>
//           </div>
//         ) : (
//           <div></div>
//         )}
//         {buttonThree ? (
//           <div id="div-three">
//             <div className="img-wrapper">
//               <img src="https://images.unsplash.com/photo-1461924214738-0648d0b9e4f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
//             </div>
//             <p>credit: unsplash.com - Thank you @mrrrk_smith </p>
//           </div>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Application;

// import React, { useState } from "react";

// function Application() {
//   const [buttonState, setButtonState] = useState({});

//   const handleClick = (id) => {
//     setButtonState((prevState) => ({
//       ...prevState,
//       [id]: !prevState[id],
//     }));
//   };

//   const buttons = [
//     { id: "button_one", label: "Render Div One" },
//     { id: "button_two", label: "Render Div Two" },
//     { id: "button_three", label: "Render Div Three" },
//     { id: "button_four", laber: "Render Div Four"},
//   ];

//   return (
//     <div id="react-application">
//       <div className="controls">
//         {buttons.map((button) => (
//           <button key={button.id} id={button.id} onClick={() => handleClick(button.id)}>
//             {button.label}
//           </button>
//         ))}
//       </div>
//       <div className="conditional-render-section">
//         {buttons.map((button) => (
//           buttonState[button.id] && (
//             <div key={button.id}>
//               <div className="img-wrapper">
//                 <img src={button.imageSrc} />
//               </div>
//               <p>{`credit: unsplash.com - Thank you @${button.credit}`}</p>
//             </div>
//           )
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Application;
