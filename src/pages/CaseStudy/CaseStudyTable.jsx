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

const CaseStudyTable = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Fetch case studies from the API
  useEffect(() => {
    axios
      .get('http://localhost:4000/casestudy', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const formattedData = response.data.map((caseStudy) => ({
          id: caseStudy._id,
          title: caseStudy.title,
          overview: caseStudy.overview, // Use overview instead of content
          image: caseStudy.images && caseStudy.images[0], // Use the first image if available
        }));
        setCaseStudies(formattedData);
      })
      .catch((error) => console.error('Error fetching case studies:', error));
  }, [token]);

  const columns = [
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'overview', headerName: 'Overview', flex: 2 },
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
              navigate(`/casestudy/edit/${params.row.id}`);
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
    setSelectedCaseStudyId(id);
    setOpen(true);
  };

  // Close the confirmation modal
  const handleClose = () => {
    setOpen(false);
    setSelectedCaseStudyId(null);
  };

  // Confirm deletion
  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/casestudy/${selectedCaseStudyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setCaseStudies((prevCaseStudies) =>
          prevCaseStudies.filter((caseStudy) => caseStudy.id !== selectedCaseStudyId)
        );
        handleClose();
      })
      .catch((error) => console.error('Error deleting case study:', error));
  };

  // Calculate height based on the number of rows
  const rowHeight = 52; // Default row height for DataGrid
  const rowsToShow = Math.min(caseStudies.length, 10); // Show up to 10 rows
  const height = Math.max(400, rowHeight * rowsToShow); // Minimum height of 400px

  return (
    <>
      <Paper sx={{ height: height, width: '100%' }}>
        <DataGrid
          rows={caseStudies}
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
            Are you sure you want to delete this case study? This action cannot be undone.
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

export default CaseStudyTable;
