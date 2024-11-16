import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Grid, CircularProgress, Typography, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import axios from 'axios';

const EditCaseStudyPage = () => {
  const { id } = useParams(); // Get the case study ID from the URL
  const navigate = useNavigate();

  const [caseStudy, setCaseStudy] = useState({
    title: '',
    overview: '',
    challenge: '',
    solution: '',
    results: '',
    conclusion: '',
    technologiesUsed: [],
    images: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageToAdd, setImageToAdd] = useState(null); // Image file to add

  const token = localStorage.getItem('token');

  // Fetch the case study details when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:4000/casestudy/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCaseStudy(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch case study');
        setLoading(false);
      });
  }, [id, token]);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseStudy((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle deleting an image from the array
  const handleDeleteImage = (index) => {
    const updatedImages = caseStudy.images.filter((_, i) => i !== index);
    setCaseStudy((prevState) => ({
      ...prevState,
      images: updatedImages,
    }));
  };

  // Handle adding a new image
  const handleImageChange = (e) => {
    setImageToAdd(e.target.files[0]); // Store the selected image
  };

  const handleAddImage = async () => {
    if (imageToAdd) {
      const formData = new FormData();
      formData.append('image', imageToAdd);

      try {
        const response = await axios.post('http://localhost:4000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });

        // After successful upload, add the image URL to the case study's images array
        setCaseStudy((prevState) => ({
          ...prevState,
          images: [...prevState.images, response.data.imageUrl],
        }));

        // Reset the image to add
        setImageToAdd(null);
      } catch (err) {
        setError('Failed to upload image');
      }
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Update case study via PUT request
    axios
      .put(`http://localhost:4000/casestudy/${id}`, caseStudy, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        navigate(`/casestudy/${id}`); // Redirect to the case study page
      })
      .catch((err) => {
        setError('Failed to update case study');
        setLoading(false);
      });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Edit Case Study
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                fullWidth
                variant="outlined"
                name="title"
                value={caseStudy.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Overview"
                fullWidth
                variant="outlined"
                name="overview"
                multiline
                rows={4}
                value={caseStudy.overview}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Challenge"
                fullWidth
                variant="outlined"
                name="challenge"
                multiline
                rows={4}
                value={caseStudy.challenge}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Solution"
                fullWidth
                variant="outlined"
                name="solution"
                multiline
                rows={4}
                value={caseStudy.solution}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Results"
                fullWidth
                variant="outlined"
                name="results"
                multiline
                rows={4}
                value={caseStudy.results}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Conclusion"
                fullWidth
                variant="outlined"
                name="conclusion"
                multiline
                rows={4}
                value={caseStudy.conclusion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Technologies Used"
                fullWidth
                variant="outlined"
                name="technologiesUsed"
                value={caseStudy.technologiesUsed.join(', ')}
                onChange={(e) =>
                  handleChange({
                    target: { name: 'technologiesUsed', value: e.target.value.split(',').map((item) => item.trim()) },
                  })
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Images
              </Typography>
              <Grid container spacing={2}>
                {caseStudy.images.map((image, index) => (
                  <Grid item xs={4} key={index}>
                    <div style={{ position: 'relative' }}>
                      <img
                        src={image}
                        alt={`Case Study Image ${index + 1}`}
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                      />
                      <IconButton
                        style={{ position: 'absolute', top: '8px', right: '8px' }}
                        color="error"
                        onClick={() => handleDeleteImage(index)}
                      >
                        <Delete />
                      </IconButton>
                    </div>
                  </Grid>
                ))}
              </Grid>

              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                style={{ marginTop: '16px' }}
              />
              <Button variant="contained" color="primary" onClick={handleAddImage} sx={{ marginTop: 2 }}>
                Add Image
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Update Case Study
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Paper>
  );
};

export default EditCaseStudyPage;
y