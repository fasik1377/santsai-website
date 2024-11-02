import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogCreation = () => {
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    image: null, 
  });
  const token = localStorage.getItem('token'); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', blogData.title);
    formData.append('content', blogData.content);
    if (blogData.image) {
      formData.append('image', blogData.image); 
    }

    axios
      .post('http://localhost:4000/blog/createBlogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          Authorization: `Bearer ${token}`, 
        },
      })
      .then((response) => {
        navigate('/dashboard'); 

        console.log('Blog created successfully:', response.data);
        setBlogData({ title: '', content: '', image: null });
      })
      .catch((error) => {
        console.error('Error creating blog:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setBlogData({
      ...blogData,
      image: e.target.files[0], // Get the selected file
    });
  };

  return (
    <Paper sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="Title"
          fullWidth
          margin="normal"
          value={blogData.title}
          onChange={handleChange}
        />
        <TextField
          name="content"
          label="Content"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={blogData.content}
          onChange={handleChange}
        />
        
        {/* File input for image upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ margin: '10px 0' }} // Add some margin for better spacing
        />
        
        <Button type="submit" variant="contained" color="primary">
          Create Blog
        </Button>
      </form>
    </Paper>
  );
};

export default BlogCreation;
