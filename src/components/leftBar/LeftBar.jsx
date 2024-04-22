import React, { useState } from 'react';
import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';


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
                        <span onClick={() => navigate('/getAllPages')}> Pages </span>
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
