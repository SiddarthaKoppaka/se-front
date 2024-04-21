import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUserActions } from '../context/UserActionsContext';
import './CSS/CreatePage.css'; // Ensure the CSS file is linked correctly

const CreatePage = () => {
  const [pageName, setPageName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();
  const { createPage } = useUserActions();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(pageName, description);
    const success = await createPage(pageName, description);
    if (success) {
      alert('Page created successfully (from CreatePage.jsx)');
      // navigate(`/page/${pageName}`);
    } else {
      alert('Couldn\'t create the page');
      navigate('/create-page', { state: { pageName, description } });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-page-form">
      <h1 className="form-title">Form to create a Page</h1>
      <div className="form-group">
        <label htmlFor="pageName" className="form-label">Name of page:</label>
        <input
          type="text"
          id="pageName"
          className="form-input"
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description" className="form-label">Page Description:</label>
        <textarea
          id="description"
          className="form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="form-button">Create Page</button>
    </form>
  );
};

export default CreatePage;
