import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import "./userProfile.scss";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import Posts from "../../components/posts/Posts";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
    const { user } = useAuth();
    const [username, setUsername] = useState('');
    const [hometown, setHometown] = useState('Hometown');
    const [relationshipStatus, setRelationshipStatus] = useState('Relationship Status');
    const [bio, setBio] = useState('Enter your bio here');
    const [isEditingBio, setIsEditingBio] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
            setHometown(user.userHometown || 'Hometown');
            setRelationshipStatus(user.relationshipStatus || 'Relationship Status');
            setBio(user.bio || 'Enter your bio here');
        }
    }, [user]);

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const toggleEditBio = () => {
        setIsEditingBio(!isEditingBio);
    };

    // Function to handle clicking on the edit profile button
    const handleEditProfileClick = () => {
        navigate('/edit-profile');
    };

    return (
        <div className="profile">
            <div className="images">
                <img
                    src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="cover"
                />
                <img
                    src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""
                    className="profilePic"
                />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="center">
                        <span>{username}</span>
                        <div className="item">
                            <PlaceIcon />
                            <span>{hometown}</span>
                        </div>
                        {user && user.language && (
                            <div className="item">
                                <LanguageIcon />
                                <span>{user.language}</span>
                            </div>
                        )}
                        <div className="item">
                            <span>{relationshipStatus}</span>
                        </div>
                        <div className="bio">
                            {isEditingBio ? (
                                <textarea
                                    value={bio}
                                    onChange={handleBioChange}
                                    rows={3}
                                    cols={30}
                                />
                            ) : (
                                <span>{bio}</span>
                            )}
                            <button onClick={toggleEditBio}>
                                {isEditingBio ? 'Save' : 'Add Bio here:'}
                            </button>
                        </div>
                        {/* Clickable button to edit profile */}
                        <button className="edit-profile-button" onClick={handleEditProfileClick}>Edit Profile</button>
                    </div>
                </div>
                <Posts />
            </div>
        </div>
    );
};

export default UserProfile;
