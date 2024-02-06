import React from 'react'

function Footer() {
    const footer = {
        backgroundColor: '#171a29', 
        color: 'white',
        width: '100%',
        opacity: '0.93'
        // height: '56px'
    }
    const footerHeading = {
        fontSize: '1.8rem'
    }
    
  return (
    <div style={footer}>
        <div className="row container">
            <div className="row">
                <div className="col s4 footer">
                    <p style={footerHeading}>Company</p>
                    <ul>
                        <li>About us</li>
                        <li>Team</li>
                        <li>careers</li>
                    </ul>
                </div>
                <div className="col s4 footer">
                    <p style={footerHeading}>Contact us</p>
                    <ul>
                        <li>Help & Support</li>
                        <li>Partner with us</li>
                        <li>Ride with us</li>
                    </ul>
                </div>
                <div className="col s4 footer">
                    <p style={footerHeading}>Legal</p>
                    <ul>
                        
                        <li>Terms & Condition</li>
                        <li>Refund & Cancellation</li>
                        <li>Privacy Policy</li>
                        <li>Offer Terms</li>
                    </ul>
                </div>
            </div>
            <div className="horLine"></div>
            <div className="col s12 center-align">
                <p>&copy;2023 netlify.com </p>
            </div>
        </div>
    </div>
  )
}

export default Footer