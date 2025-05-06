// src/pages/About.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const About = () => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography>
          Dedicated Full Stack Developer with a solid foundation in software
          engineering principles, honed through hands-on experience in real-time
          projects. Proficient in both front-end and back-end development, I am
          passionate about creating scalable, user-friendly web applications.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography>
            <strong>Name:</strong> Krishna Naga Maruthi Dattatreya
          </Typography>
          <Typography>
            <strong>Email:</strong> dattathreyachandana@gmail.com
          </Typography>
          <Typography>
            <strong>Phone:</strong> +91 9014302544
          </Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6">Skills</Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemText primary="Java, Python" />
              </ListItem>
              <ListItem>
                <ListItemText primary="HTML, CSS, JavaScript, Bootstrap" />
              </ListItem>
              <ListItem>
                <ListItemText primary="React, Node.js" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemText primary="MySQL, MongoDB" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Visual Studio Code, Git" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Problem Solving, Enthusiastic" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6">Education</Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="B.Tech - Computer Science & Engineering"
              secondary="Usha Rama College of Engineering and Technology | 2019–2023 | CGPA: 8.6"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Intermediate"
              secondary="Sri Chaitanya Junior College | 2017–2019 | CGPA: 9.6"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="10th Standard"
              secondary="Bala Bhanu Vidyalayam | 2016–2017 | CGPA: 9.8"
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6">Experience</Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="Full Stack Developer – I&T Labs"
              secondary="Aug 2024 – Present"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Junior Developer Intern – Envision Webier Technologies"
              secondary="Mar 2024 – Jul 2024"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Software Engineer Intern – Kodnest Technologies"
              secondary="Jun 2023 – Feb 2024"
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6">Projects</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Drug Recommendation System Using Machine Learning" />
          </ListItem>
          <ListItem>
            <ListItemText primary="WeKonnects - A Real-Time Web Application for Small-Scale Business Marketplace" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Developed 30+ Websites for various Business and Professionals " />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default About;
