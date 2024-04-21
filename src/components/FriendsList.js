import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserActions } from '../context/UserActionsContext';
import { useAuth } from '../context/AuthContext';
import './CSS/friendsList.css'

function FriendsList() {
    const [friends, setFriends] = useState([]);
    const navigate = useNavigate();
    const { handleRemoveFriend, handleBlockUser} = useUserActions();
    const { user, logout, fetchUserDetails } = useAuth();

    const token = localStorage.getItem('token');

    useEffect(() => {
      const fetchDetailsAndSetState = async () => {
        const token = localStorage.getItem('token');
        if (!user && token) {
          await fetchUserDetails(token); 
        } else if (!token) {
          handleLogout();
          return; 
        }
      }

      if (user && user.friends) {
          setFriends(user.friends);
      }
      fetchDetailsAndSetState();
    }, [user]);
    
    const handleLogout = () => {
      logout();
      navigate('/');
    };

    // REMOVE FRIENDS
    const removeFriend = async (friendId) => {
      console.log("HERE:", friendId);
      const success = await handleRemoveFriend(friendId);
      if (success) {
        alert('Friend removed successfully');
        setFriends(currentFriends => currentFriends.filter(friend => friend.id !== friendId));
        fetchUserDetails(token);
      } else {
        alert('Failed to remove friend');
      }
    };

    // BLOCK USER
    const blockUser = async (userId) => {
      const success = await handleBlockUser(userId);
      if (success) {
        alert('User blocked successfully');
        fetchUserDetails(token);
      } else {
        alert('Failed to block user');
      }
    };

    return (
      <div className="friends-list-container">
        <h2 className="friends-list-header">Your Friends</h2>
        <ul className="friends-list-ul">
          {friends.map((friend, index) => (
            <li key={index} className="friends-list-li">
              <span className="friends-list-name">{friend.firstname} {friend.lastname} (@{friend.username})</span>
              <div>
                <button className="friends-list-button remove-friend-button" onClick={() => removeFriend(friend.id)}>Remove Friend</button>
                <button className="friends-list-button" onClick={() => blockUser(friend.id)}>Block</button>
                <button className="friends-list-button" onClick={() => navigate(`/user/${friend.username}`)}>View Profile</button>
                <button className="friends-list-button" onClick={() => navigate(`/chat-service/${friend.username}`, { state: { receiverName: friend.username } })}>
                  Message
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
export default FriendsList;