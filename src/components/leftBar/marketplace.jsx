import React from 'react';
import { Link } from 'react-router-dom';
import './marketplace.scss';

const Marketplace = () => {
    return (
        <div className="marketplace">
            <h2>Welcome to the Marketplace</h2>
            <p>Explore a wide range of items available for buying, selling, trading, and negotiation.</p>
            <div className="marketplace-actions">
                <button className="action-button">Buy</button>
                <button className="action-button">Sell</button>
                <button className="action-button">Trade</button>
                <button className="action-button">Negotiate</button>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search for items..." />
                <button className="search-button">Search</button>
            </div>
            <div className="item-grid">
                {/* Placeholder for displaying items */}
                <div className="item-card">
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <h3>Item Name</h3>
                    <p>Item description...</p>
                    <span>$100</span>
                </div>
                <div className="item-card">
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <h3>Item Name</h3>
                    <p>Item description...</p>
                    <span>$150</span>
                </div>
                <div className="item-card">
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <h3>Item Name</h3>
                    <p>Item description...</p>
                    <span>$200</span>
                </div>
                <div className="item-card">
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <h3>Item Name</h3>
                    <p>Item description...</p>
                    <span>$220</span>
                </div>
                {/* Add more item cards as needed */}
            </div>
            <div className="payment-option">
                <h3>Payment Option</h3>
                <p>For prices inquiry and payments, click the button below:</p>
                <Link to="/payment" className="payment-button">Make Payment</Link>
            </div>
        </div>
    );
};

export default Marketplace;
