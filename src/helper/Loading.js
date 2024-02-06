import React from 'react'

function Loading() {
  const Loader = {
    display:'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    // padding: '30px 0px',
    height: '100%',
    width: '15%'
  }

  return (
      <div className="loader" style={Loader}>
        <div class="preloader-wrapper small active">
        <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
            <div class="circle"></div>
        </div><div class="gap-patch">
            <div class="circle"></div>
        </div><div class="circle-clipper right">
            <div class="circle"></div>
        </div>
        </div>
      </div>  
    </div>
  )
}

export default Loading