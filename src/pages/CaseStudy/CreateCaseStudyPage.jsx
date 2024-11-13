import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper, Grid, Typography, Chip, Alert } from '@mui/material';
import axios from 'axios';

const CreateCaseStudyPage = () => {
  const navigate = useNavigate();
  
  const [caseStudy, setCaseStudy] = useState({
    title: '',
    overview: '',
    challenge: '',
    solution: '',
    results: '',
    conclusion: '',
    technologiesUsed: [],
  });
  const [images, setImages] = useState([]);
  const [technologyInput, setTechnologyInput] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // New state for success alert

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCaseStudy((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddTechnology = () => {
    if (technologyInput && !caseStudy.technologiesUsed.includes(technologyInput)) {
      setCaseStudy((prevState) => ({
        ...prevState,
        technologiesUsed: [...prevState.technologiesUsed, technologyInput],
      }));
      setTechnologyInput('');
    }
  };

  const handleDeleteTechnology = (tech) => {
    setCaseStudy((prevState) => ({
      ...prevState,
      technologiesUsed: prevState.technologiesUsed.filter((item) => item !== tech),
    }));
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', caseStudy.title);
    formData.append('overview', caseStudy.overview);
    formData.append('challenge', caseStudy.challenge);
    formData.append('solution', caseStudy.solution);
    formData.append('results', caseStudy.results);
    formData.append('conclusion', caseStudy.conclusion);

    caseStudy.technologiesUsed.forEach((tech) => formData.append('technologiesUsed[]', tech));
    images.forEach((image) => formData.append('images', image));

    try {
      await axios.post('http://localhost:4000/casestudy', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess(true); // Show success alert
      setError(null); // Clear any previous errors

      // Clear form states to allow a new case study
      setCaseStudy({
        title: '',
        overview: '',
        challenge: '',
        solution: '',
        results: '',
        conclusion: '',
        technologiesUsed: [],
      });
      setImages([]);
      setTechnologyInput('');
      
      // Optional: redirect or reset the success alert after a timeout
      setTimeout(() => {
        setSuccess(false); // Hide success alert after a few seconds
      }, 3000);

    } catch (err) {
      setError('Failed to create case study');
      setSuccess(false);
    }
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Create New Case Study
      </Typography>

      {error && (
        <Typography color="error" gutterBottom>
          {error}
        </Typography>
      )}

      {success && (
        <Alert severity="success" sx={{ marginBottom: 2 }}>
          Case study created successfully!
        </Alert>
      )}

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
            <Typography variant="h6">Technologies Used</Typography>
            <Grid container spacing={1}>
              {caseStudy.technologiesUsed.map((tech, index) => (
                <Grid item key={index}>
                  <Chip label={tech} onDelete={() => handleDeleteTechnology(tech)} />
                </Grid>
              ))}
            </Grid>
            <TextField
              label="Add Technology"
              variant="outlined"
              fullWidth
              value={technologyInput}
              onChange={(e) => setTechnologyInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
            />
            <Button variant="contained" color="primary" onClick={handleAddTechnology} sx={{ mt: 1 }}>
              Add Technology
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Images
            </Typography>
            <input type="file" multiple onChange={handleImageChange} accept="image/*" />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Create Case Study
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CreateCaseStudyPage;
