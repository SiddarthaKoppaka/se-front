import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CSS/EditProfile.module.css';

const EditProfile = ({ user }) => {
    const [username, setUsername] = useState('');
    const [livesIn, setLivesIn] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');
    const [profilePicUrl, setProfilePicUrl] = useState(null);
    const [coverPhotoUrl, setCoverPhotoUrl] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
            setLivesIn(user.livesIn || '');
            setRelationshipStatus(user.relationshipStatus || '');
            // Initialize URLs if available
            setProfilePicUrl(user.profilePicUrl || null);
            setCoverPhotoUrl(user.coverPhotoUrl || null);
        }
    }, [user]);

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('livesIn', livesIn);
        formData.append('relationshipStatus', relationshipStatus);
        if (profilePicUrl) {
            formData.append('profilePic', profilePicUrl);
        }
        if (coverPhotoUrl) {
            formData.append('coverPhoto', coverPhotoUrl);
        }

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/updateProfile`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                alert("Profile updated successfully");
                // Optionally, refresh user data here or manage state to update UI
                navigate('/profile'); // Navigate to the profile page instead of home to see changes
            } else {
                const errorResponse = await response.text();
                throw new Error(errorResponse || 'Profile update failed');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile: ' + error.message);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Edit Profile</h2>
            <form onSubmit={handleProfileUpdate} className={styles.form}>
                <input className={styles.input} type="text" placeholder="Update Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className={styles.input} type="text" placeholder="Current Address" value={livesIn} onChange={(e) => setLivesIn(e.target.value)} />
                <select className={styles.select} value={relationshipStatus} onChange={(e) => setRelationshipStatus(e.target.value)}>
                    <option value="">Select Relationship Status</option>
                    <option value="single">Single</option>
                    <option value="in_a_relationship">In a Relationship</option>
                    <option value="married">Married</option>
                    <option value="complicated">It's Complicated</option>
                </select>
                <label htmlFor="profile-pic">Change Profile Picture:</label>
                <input id="profile-pic" className={styles.fileInput} type="file" accept="image/*" onChange={(e) => setProfilePicUrl(e.target.files[0])} />
                <label htmlFor="cover-photo">Change Cover Photo:</label>
                <input id="cover-photo" className={styles.fileInput} type="file" accept="image/*" onChange={(e) => setCoverPhotoUrl(e.target.files[0])} />
                <button className={styles.button} type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default EditProfile;
