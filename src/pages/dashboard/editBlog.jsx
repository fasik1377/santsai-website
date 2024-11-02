import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Paper } from '@mui/material';

const EditBlog = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    image: '',
  });
  const [newImage, setNewImage] = useState(null); 
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get(`http://localhost:4000/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const blog = response.data.data;
        setBlogData({
          title: blog.title,
          content: blog.content,
          image: blog.image,
        });
      })
      .catch((error) => console.error('Error fetching blog:', error));
  }, [id, token]);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', id); 
    formData.append('title', blogData.title);
    formData.append('content', blogData.content);
    
    if (newImage) {
      formData.append('image', newImage);
    }

    axios
      .put(`http://localhost:4000/blog/updateBlog/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        navigate('/dashboard'); 
      })
      .catch((error) => console.error('Error updating blog:', error));
  };

  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  return (
    <Paper sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={blogData.title}
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
        />
        <TextField
          label="Content"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={blogData.content}
          onChange={(e) => setBlogData({ ...blogData, content: e.target.value })}
        />
        
        {/* Display the current image */}
        {blogData.image && (
          <div>
            <h4>Current Image:</h4>
            <img
              src={blogData.image}
              alt="Blog"
              style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }} // Square image
            />
          </div>
        )}

        {/* File input for new image */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        
        <Button type="submit" variant="contained" color="primary">
          Update Blog
        </Button>
      </form>
    </Paper>
  );
};

export default EditBlog;
