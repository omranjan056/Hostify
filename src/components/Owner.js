import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import useFetch from '../useFetch';

function Owner() {
  const [buttons, setButtons] = useState([]);
  const [buttonState, setButtonState] = useState({}); 
  const { id } = useParams();
  let count = 0;
  useEffect(() => {
    async function fetchButtons() {
      const response = await fetch(`http://localhost:8003/owner/?HostelID=${id}`);
      const data = await response.json();
      setButtons(data);
      setButtonState(Object.fromEntries(data.map((button) => [button.ownerID, false])));
      // console.log(buttons);
    }
    fetchButtons();
  }, []);
  
  

  // useEffect(()=>{
  //   console.log(buttons);
  // },[buttons]);


  const handleClick = (id) => {
    setButtonState(() => {
      const newState = {};
      for (const button of buttons) {
        newState[button.ownerID] = (button.ownerID === id);
      }
      return newState;
    });
  };

  const nvOwa = {
    width: '90%',
    height: '100%',
    margin: '0 auto', 
    padding: '10px',
    display: 'flex',
    flexDirection: 'column'
  }
  const nvOwb ={
    width: '100%',
    height: '10%',
    backgroundColor: 'white', 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px'
    // flexWrap: 'wrap'
  }

  const nvOwc = {
    width: '100%',
    height: '80%',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    alignItems: 'center'
  }
  
  const nvOwd = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px'
  }
  const nvOwe = {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
  }
  const nvOwf = {
    fontSize: '20px',
    Translate: 'translateX(10px) translateY(10px)'
  }
  const nvOwg = {
    width: '100%'
  }
  const nvOwh={
    width: '80%',
    margin: '0 auto',
    paddingTop: '30px'
  }
  return(
    <div id='ownerDetails'>
      <div style={nvOwa}>
        <div className='buttons' style={nvOwb}>
          {
            buttons.map((button, index) => {
             return(
              <div key={index} style={nvOwd} onClick={()=> handleClick(button.ownerID)}>
                <span>{button.name}</span>
              </div>
             )
            })
          }
        </div>
        <div style={nvOwc}>
          {
            buttons.map((button, index)=>{
             return(
              buttonState[button.ownerID] ? 
              <div style={nvOwg}>
                <div style={nvOwe}>
                  <div key={index} className="ownerDP" style={{
                    height: '200px',
                    width: '200px',
                    borderRadius: '50%',
                    backgroundColor: 'pink',
                    backgroundImage: `url(${button.profileID}.jpg)`,
                    backgroundPosition:'center',
                    backgroundSize: 'cover'
                  }}></div>
                </div>
                <div className='ownerDesc' style={nvOwh}>
                  <p>Hostels are hospitality businesses that have shared rooms and spaces. The meaning of a hostel is that you only pay for your bed, and share the rest of the room's space with other people you don't know. Due to this "co-habitation" set-up, the prices for this type of stay are much more affordable.</p>
                </div>
              </div>
              : null
             )
            })
          }
        </div>
      </div>
    </div>
  )

  // return (
  //   <div id="react-application">
  //     <div className="controls">
  //       {buttons.map((button, index) => (
  //         <button
  //           key={index}
  //           id={button.id}
  //           onClick={() => handleClick(button.ownerID)}
  //         >
  //           <div>
  //             {button.name}
  //           </div>
  //         </button>
  //       ))}
  //     </div>
  //     <div className="conditional-render-section">
  //       {buttons.map((button, index) =>
  //         buttonState[button.ownerID] ? (
  //           <div key={index}>
  //             <div className="img-wrapper">
  //               <div style={{
  //                 height: '200px',
  //                 width: '200px',
  //                 borderRadius: '50%',
  //                 // backgroundColor: 'black',
  //                 backgroundImage: `url(${button.profileID}.jpg)`,
  //                 backgroundPosition:'center',
  //                 backgroundSize: 'cover'
  //               }}></div>
  //             </div>
  //             <p>{button.emailID}</p>
  //           </div>
  //         ) : null
  //       )}
  //     </div>
  //   </div>
  // );
}

export default Owner;