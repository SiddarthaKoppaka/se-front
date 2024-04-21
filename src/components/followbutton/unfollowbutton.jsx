import React from 'react';


    
const UnfollowButton = ({ pageId, onSuccess }) => {

    const handleFollow = async () => {
        const token = localStorage.getItem('token');
        console.log("token: ", token);
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/pages/${pageId}/unfollow`, {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${token}`,
                }
              });
            if (response.ok) {
                onSuccess();
              }
            console.log("response: ", response);
        } catch (error) {
            console.error("Error joining page", error);
        }
    };

    return <button onClick={handleFollow}>UnFollow</button>;
};

export default UnfollowButton;
