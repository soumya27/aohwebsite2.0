import React from 'react';
import Dropdown from './Dropdown';
import '../css/header.css'

const Header = () =>{
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
    return (
        <div className="headercontainer"> 
            <div className="headername">
                <div className="sitename"> 
                    AOH Welfare Association
                </div>
                <button className="loginButton">
                    Login
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