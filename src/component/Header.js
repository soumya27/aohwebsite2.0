import React, { useEffect, useState } from 'react';
import {Auth} from 'aws-amplify'
import Dropdown from './Dropdown';
import '../css/header.css'

const Header = () =>{
    const [user,setUser] = useState(null);
    const [buttonText, setButtonText] = useState("Sign in with Google");
    const listItems = [
        {
            "title": "Society",
            "options": ["Our mission", "Registration", "By Laws", "House Rules", "Elections"],
            "links": ["", "", "", "", ""],
        },
        {
            "title":"Members",
            "options": ["Contact Informations", "Vehicle Informations", "EC Members"] ,
            "links": ["","",""],
        },
        {
            "title":  "Communications",
            "options": ["MOM", "Cultural Events", "Notices", "APEPDL", "Auditors", "Banks", "Builder", "Contractors", "GVMC", "Legal"],
            "links": ["", "", "", "", "", "", "", "", "", ""],
        },
        {
            "title": "Projects",
            "options": ["On Going", "Completed", "Tenders", "Bids","Bids-selected"],
            "links": ["","", "", "", ""],
        },
        {
            "title":"Accounts",
            "options": ["Memberships","Maintenance", "Builder","Donations", "Audit report"],
            "links": ["","","","",""],
        },
        {
            "title": "Cultural Events",
            "options": ["On Going Events", "Past Events", "Upcoming Events"],
            "links": ["","",""],
        },
        {
            "title":"Opinion Pools",
            "options":["Current", "Results (old)"],
            "links": ["",""],
        }
    ];

    useEffect(()=>{
        Auth.currentAuthenticatedUser().then(user =>{
            console.log("in use effect : log user ",user);
            setUser(user);
            setButtonText("Logout");
        }).catch(error =>{
            console.log("Not signed in");
            setButtonText("Sign in with Google");
        })
    },[])

    
    async function signInUser(){
        if (user){
            Auth.signOut();
            setUser(null);
        }else{
            Auth.federatedSignIn({provider: "Google"})
        }
    }

    return (
        <div className="headercontainer"> 
            <div className="headername">
                <div className="sitename"> 
                    AOH Welfare Association
                </div>
                <button className="loginButton" onClick={signInUser}>
                    {buttonText}
                </button>
            </div>
            
            <div className="dropdown-container">
                {
                    listItems.map((item,index)=>(
                        <Dropdown key={index} 
                        headername={item.title} 
                        listItems={item.options} 
                        links={item.links}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Header