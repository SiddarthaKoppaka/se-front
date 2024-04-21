import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './CSS/showpages.css'

const ShowPages = () => {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/pages/getAllPages`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("All Pages: ", data);
        setPages(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchPages();
  }, []);

  const handlePageSelect = (pageId) => {
    navigate(`/page/${pageId}`); 
  };

  return (
    <div className="show-pages-container">
      <h1 className="show-pages-header">All Pages</h1>
      <ul className="show-pages-list">
        {pages.map((page, index) => (
          <li key={index}>
            {page.name}<span className="show-pages-explore" onClick={() => handlePageSelect(page.id)}> Explore</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowPages;
