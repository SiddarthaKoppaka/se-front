import React, { useEffect, useState } from 'react';
import Post from "../post/Post";
import { useAuth } from '../../context/AuthContext';
import { useUserActions } from '../../context/UserActionsContext';

import { Link, useNavigate, useParams } from "react-router-dom";

import "./posts.scss";

const PagePosts = ({ pageId }) => {

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  
  const { user, fetchUserDetails } = useAuth();
  const { handleDeletePost, handleLikePost, handleUnlikePost, getAllPostsForPage } = useUserActions();
  
  // const { pageId } = useParams();

  useEffect(() => {
    const fetchDetailsAndSetState = async () => {
      if (pageId) {
        const result = await getAllPostsForPage(pageId);
        if (result) {
          const sanitizedResults = result.map(post => ({
            ...post,
            comments: post.comments || [],
            likes: post.likes || [],
            createdAt: post.createdAt || null,
            imageUrl: post.imageUrl || null,
            videoUrl: post.videoUrl || null,
            postId: post.postId || null
          }));
          setPosts(sanitizedResults);
        } else {
          setPosts([]);
        }
      }
    }; fetchDetailsAndSetState();
  }, [pageId]);



  // LIKE POSTS
  const onLikePost = async (postId) => {
    console.log("Liked POSTID: ", postId);
    const success = await handleLikePost(postId);
    if (!success)
      console.log("ERROR WHILE LIKING. (INSIDE USERHOME)")
  };

  // UNLIKE POSTS
  const onUnlikePost = async (postId) => {
    console.log("Unliked POSTID: ", postId);
    const success = await handleUnlikePost(postId);
    if (!success)
      console.log("ERROR WHILE LIKING. (INSIDE USERHOME)")
  };

  // POST DELETES
  const onDeletePost = async (postId) => {
    const success = await handleDeletePost(postId);
    if (success) {
      setPosts(currentPosts => currentPosts.filter(post => post.postId !== postId));
    }
  };


  return <div className="posts">
    {posts.map(post=>(
      <Post post={post}
      key={post.postId}
      onLikePost={onLikePost}
      onUnlikePost={onUnlikePost}
      // onDeletePost={onDeletePost}
      />
    ))}
  </div>;
};

export default PagePosts;
