import React from 'react';
import '../css/location.css'

const Location = () =>{
    const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11671.561548022008!2d-78.80427175!3d43.001642600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395a54fff23ecb%3A0x7c315a2e3ed56a28!2sAditya%20Ocean%20Heights!5e0!3m2!1sen!2sus!4v1604818875770!5m2!1sen!2sus";
    return (
        <section className="ourLocation">
            <h3 >Our Location</h3>
            <iframe src={url}
                key="map"
                title="location"
                width="900" 
                height="550"
                frameBorder="0" 
                style={{"border":"0"}} 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"></iframe>
        </section>
    )
}

export default Location