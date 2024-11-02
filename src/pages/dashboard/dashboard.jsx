import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

const BlogTable = () => {
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Fetch blogs from the API
  useEffect(() => {
    axios
      .get('http://localhost:4000/blog/blogs', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const formattedData = response.data.data.map((blog) => ({
          id: blog._id,
          title: blog.title,
          content: blog.content,
          image: blog.image,
        }));
        setBlogs(formattedData);
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, [token]);

  const columns = [
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'content', headerName: 'Content', flex: 2 },
    {
      field: 'image',
      headerName: 'Image',
      width: 120,
      renderCell: (params) =>
        params.value ? (
          <img src={params.value} alt={params.row.title} width="50" height="50" />
        ) : (
          'No Image'
        ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      sortable: false,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/blog/edit/${params.row.id}`);
            }}
          >
            Edit
          </Button>
          <IconButton
            color="error"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenDeleteModal(params.row.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  // Open confirmation modal for deletion
  const handleOpenDeleteModal = (id) => {
    setSelectedBlogId(id);
    setOpen(true);
  };

  // Close the confirmation modal
  const handleClose = () => {
    setOpen(false);
    setSelectedBlogId(null);
  };

  // Confirm deletion
  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/blog/deleteBlog/${selectedBlogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== selectedBlogId));
        handleClose();
      })
      .catch((error) => console.error('Error deleting blog:', error));
  };

  // Calculate height based on the number of rows
  const rowHeight = 52; // Default row height for DataGrid
  const rowsToShow = Math.min(blogs.length, 10); // Show up to 10 rows
  const height = Math.max(400, rowHeight * rowsToShow); // Minimum height of 400px

  return (
    <>
      <Paper sx={{ height: height, width: '100%' }}>
        <DataGrid
          rows={blogs}
          columns={columns}
          pageSize={10} // Set pageSize to 10
          rowsPerPageOptions={[5, 10]} // Updated to include 10 as an option
          sx={{ border: 0 }}
        />
      </Paper>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this blog? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BlogTable;
