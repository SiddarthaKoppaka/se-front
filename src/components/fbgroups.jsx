// FacebookGroups.jsx

import React, { useState } from 'react';
import './fbgroups.scss';

const FacebookGroups = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);

    // Dummy data for friends
    const friends = [
        { id: 1, name: 'Friend 1' },
        { id: 2, name: 'Friend 2' },
        { id: 3, name: 'Friend 3' },
        // Add more friends as needed
    ];

    // Handle adding friend to selected list
    const handleAddFriend = (friend) => {
        setSelectedFriends([...selectedFriends, friend]);
    };

    // Handle search term change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter friends based on search term
    const filteredFriends = friends.filter((friend) =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="facebook-groups">
            <div className="card">
                <h2>Create a Group</h2>
                <button className="create-group-button">Create Group</button>
                <h3>Add Friends to Your Group</h3>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search friends..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button>🔍</button>
                </div>
                <div className="group-options">
                    {filteredFriends.map((friend) => (
                        <div className="group-option" key={friend.id}>
                            <input
                                type="checkbox"
                                id={`friend-${friend.id}`}
                                name={`friend-${friend.id}`}
                                onChange={() => handleAddFriend(friend)}
                            />
                            <label htmlFor={`friend-${friend.id}`}>{friend.name}</label>
                        </div>
                    ))}
                </div>
                <button className="add-friends-button">Add Friends</button>
            </div>
        </div>
    );
};

export default FacebookGroups;
