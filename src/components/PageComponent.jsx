import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useUserActions } from '../context/UserActionsContext';
import FollowButton from './followbutton/FollowButton';
import UnfollowButton from './followbutton/unfollowbutton';
import { useAuth } from '../context/AuthContext';
import Share from './share/Share';
import PagePosts from './posts/pagePosts';
import '../components/CSS/PageComponent.css'



const PageComponent = () => {
  const [currentPage, setCurrentPage] = useState({});
  const [userPages, setUserPages] = useState([]);
  const { pageId: pageid } = useParams();
  const { fetchPage } = useUserActions();
  const { user, fetchUserDetails } = useAuth();

  useEffect(() => {
    console.log("pageComponent pageid: ", pageid)

    fetchThePage();
  }, [pageid, fetchPage]);

  useEffect(() => {
    const fetchDetailsAndSetState = async () => {
      const token = localStorage.getItem('token');
      if (!user && token) {
        await fetchUserDetails(token);
      }
    };
    fetchDetailsAndSetState();
  }, [user, fetchUserDetails]);

  useEffect(() => {
    if (user) {
      setUserPages(user.pageList || []);
    }
  }, [user]);

  const fetchThePage = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const result = await fetchPage(pageid);
      setCurrentPage(result);
    } else {
      alert('Problem in PageComponent')
    }
  };

  const isFollowing = userPages.some(page => page.id.toString() === pageid) || false;
  console.log("isFollowing: ", isFollowing);

  const handleSuccessCall = async () => {
    await fetchThePage();
    const token = localStorage.getItem('token');
    if (token) {
        await fetchUserDetails(token);
    } else {
        console.error('Token not found');
    }
  };

  return (
    <div className="page-container">
        <h1 className="page-title">{currentPage?.name}</h1>
        <h2 className="page-description">{currentPage?.description}</h2>
        
        {isFollowing ? (
            <UnfollowButton pageId={pageid} onSuccess={handleSuccessCall} className="unfollow-button" />
        ) : (
            <FollowButton pageId={pageid} onSuccess={handleSuccessCall} className="follow-button" />
        )}
        
        {isFollowing && (
            <div className="share-container">
                <Share pageid={pageid} />
            </div>
        )}

        <div className="posts-container">
            <PagePosts pageId={pageid} />
        </div>
    </div>
);

};

export default PageComponent;

