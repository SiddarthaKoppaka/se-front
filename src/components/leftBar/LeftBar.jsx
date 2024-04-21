import React, { useState } from 'react';
import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import FacebookGroups from '../../components/fbgroups';

const LeftBar = () => {
    const [showMarketplace, setShowMarketplace] = useState(false);
    const [userName, setUserName] = useState('');
    const [profilePic, setProfilePicUrl] = useState('');
    const navigate = useNavigate();
    const { user, logout, fetchUserDetails } = useAuth();

    const toggleMarketplace = () => {
        setShowMarketplace(prevState => !prevState);
    };

    // Other code remains the same...

    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span onClick={() => navigate('/friends')}> Friends </span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="" />
                        <span onClick={() => navigate('/fbgroups')}> Groups </span>
                    </div>
                    
                    <div className="item">
                        <img src={Watch} alt="" />
                        <span onClick={() => navigate('/tiktok')}> Watch </span>
                        
                    </div>
                    <div className="item">
                    <img src={Market} alt=''/>
                    <span onClick={() => navigate('/marketplace')}> Marketplace </span>
                    </div>
                </div>
                <hr />
                {/* Remaining code... */}
            </div>
            
        </div>
    );
};

export default LeftBar;