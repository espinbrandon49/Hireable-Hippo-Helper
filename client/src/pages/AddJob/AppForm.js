import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_APPLICATION } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Login from "../Login";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ApplicationForm = () => {
  const [formState, setFormState] = useState({
    applicant: "",
    company: "",
    salary: "",
    appliedFrom: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    jobTitle: "",
    jobLink: "",
    jobDescription: "",
    jobType: ""
  });
  const [createApplication, { error }] = useMutation(ADD_APPLICATION);
  const [btnText, setBtnText] = useState("Select your Option")
  const [btnText1, setBtnText1] = useState("Select your Option")

  // Update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Dropdown Menu
  const [dropdown1, setDropdown1] = React.useState({ anchorEl: null });
  const [dropdown2, setDropdown2] = React.useState({ anchorEl: null });

  const openAppliedFrom = Boolean(dropdown1.anchorEl);
  const openJobType = Boolean(dropdown2.anchorEl);

  const handleClose = (event) => {
    const { name, value } = event.currentTarget.dataset;
    console.log(name, value)
    console.log(btnText, typeof btnText)
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState)
    if (name === "appliedFrom") {
      setDropdown1({
        ...dropdown1,
        anchorEl: null
      });
      setBtnText(value)
    }
    if (name === "jobType") {
      setDropdown2({
        ...dropdown2,
        anchorEl: null
      });
      setBtnText1(value)
    }
  };

  // Submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        await createApplication({
        variables: {...formState, applicant: Auth.getProfile().data.username,},
      });
    } catch (err) {
      console.error(err);
    }

    // Clear form values
    setFormState({
      applicant: Auth.getProfile().data.username,
      company: "",
      salary: "",
      appliedFrom: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      jobTitle: "",
      jobLink: "",
      jobDescription: "",
      jobType: ""
    });
    window.location.replace("/");
  };

  return (
    <>
    {Auth.loggedIn() ? (
      <Grid container justifyContent="center" sx={{marginTop: "50px", marginBottom: "50px"}}>
        <Grid item xl={6} lg={8} md={10} sm={11} xs={12}>
          <Card component="form" elevation={15} sx={{borderRadius: 3}} onSubmit={handleFormSubmit}>
            <CardContent>
              <Box>
                <Typography component="div" variant="h3" sx={{textAlign: "center", padding: "25px", fontWeight: "bold"}}>
                  Welcome {Auth.getProfile().data.username}!
                </Typography>
                <Typography component="div" variant="h4" sx={{textAlign: "center", padding: "25px", fontWeight: "bold"}}>
                  Add A New Application:
                </Typography>
              </Box>

              <FormControl fullWidth sx={{padding:"65px 75px 0 75px"}}>
                <InputLabel htmlFor='company'>
                  <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                    Company Name:
                  </Typography>
                </InputLabel>
                <TextField
                  name="company"
                  type="text"
                  value={formState.company}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl fullWidth sx={{padding:"65px 75px 0 75px"}}>
                <InputLabel htmlFor='jobTitle'>
                  <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                    Job Title:
                  </Typography>
                </InputLabel>
                <TextField
                  name="jobTitle"
                  type="text"
                  value={formState.jobTitle}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl fullWidth sx={{padding:"65px 75px 0 75px"}}>
                <InputLabel htmlFor='salary'>
                  <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                    Salary:
                  </Typography>
                </InputLabel>
                <TextField
                  name="salary"
                  type="text"
                  value={formState.salary}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl sx={{padding:"65px 75px 0 75px"}}>
                <InputLabel htmlFor='appliedFrom'>
                  <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                    Applied From:
                  </Typography>
                </InputLabel>
                <Button
                  id="basic-button"
                  name="appliedFrom"
                  data-name="appliedFrom"
                  data-value={true}
                  variant="outlined"
                  size="large"
                  value={formState.appliedFrom}
                  aria-controls={openAppliedFrom ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openAppliedFrom ? 'true' : undefined}
                  onClick={(event) => {
                    setDropdown1({ ...dropdown1, anchorEl: event.currentTarget })
                  }}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  {btnText}
                </Button>
                <Menu
                  id="basic-menu"
                  name="appliedFrom"
                  open={openAppliedFrom}
                  onClose={handleClose}
                  anchorEl={dropdown1.anchorEl}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose} data-name="appliedFrom" data-value="LinkedIn">LinkedIn</MenuItem>
                  <MenuItem onClick={handleClose} data-name="appliedFrom" data-value="Indeed">Indeed</MenuItem>
                  <MenuItem onClick={handleClose} data-name="appliedFrom" data-value="AngelList">AngelList</MenuItem>
                  <MenuItem onClick={handleClose} data-name="appliedFrom" data-value="Handshake">Handshake</MenuItem>
                  <MenuItem onClick={handleClose} data-name="appliedFrom" data-value="Monster">Monster</MenuItem>
                  <MenuItem onClick={handleClose} data-name="appliedFrom" data-value="Zip Recruiter">Zip Recruiter</MenuItem>
                  <MenuItem onClick={handleClose} data-name="appliedFrom" data-value="Job Fair">Job Fair</MenuItem>
                  <MenuItem onClick={handleClose} data-name="appliedFrom" data-value="Company Website">Company Website</MenuItem>
                  <MenuItem onClick={handleClose} data-name="appliedFrom" data-value="Craigslist">Craigslist</MenuItem>
                  <MenuItem onClick={handleClose} data-name="appliedFrom" data-value="Other">Other</MenuItem>
                </Menu>
              </FormControl>

              <FormControl fullWidth sx={{padding:"65px 75px 0 75px"}}>
                <InputLabel htmlFor='contactName'>
                  <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                    Contact Name:
                  </Typography>
                </InputLabel>
                <TextField
                  name="contactName"
                  type="text"
                  value={formState.contactName}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl fullWidth sx={{padding:"65px 75px 0 75px"}}>
                <InputLabel htmlFor='contactEmail'>
                  <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                    Contact Email:
                  </Typography>
                </InputLabel>
                <TextField
                  name="contactEmail"
                  type="email"
                  value={formState.contactEmail}
                  onChange={handleInputChange}
                  InputProps={{ endAdornment: <InputAdornment position="end"> <EmailIcon /> </InputAdornment> }}
                />
              </FormControl>

              <FormControl fullWidth sx={{padding:"65px 75px 0 75px"}}>
                <InputLabel htmlFor='contactPhone'>
                  <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                    Contact Phone:
                  </Typography>
                </InputLabel>
                <TextField
                  name="contactPhone"
                  type="text"
                  value={formState.contactPhone}
                  onChange={handleInputChange}
                  InputProps={{ endAdornment: <InputAdornment position="end"> <PhoneIcon /> </InputAdornment> }}
                />
              </FormControl>

              <FormControl fullWidth sx={{padding:"65px 75px 0 75px"}}>
                <InputLabel htmlFor='jobLink'>
                  <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                    Job Link:
                  </Typography>
                </InputLabel>
                <TextField
                  name="jobLink"
                  type="text"
                  value={formState.jobLink}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl fullWidth sx={{padding:"65px 75px 0 75px"}}>
                <InputLabel htmlFor='jobDescription'>
                  <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                    Job Description:
                  </Typography>
                </InputLabel>
                <TextField
                  name="jobDescription"
                  type="input"
                  value={formState.jobDescription}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl sx={{padding:"65px 75px 0 75px"}}>
                <InputLabel htmlFor='jobType'>
                  <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                    Job Type:
                  </Typography>
                </InputLabel>
                <Button
                  id="basic-button"
                  name="jobType"
                  data-name="jobType"
                  data-value={true}
                  variant="outlined"
                  size="large"
                  value={formState.jobType}
                  aria-controls={openJobType ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openJobType ? 'true' : undefined}
                  onClick={(event) => {
                    setDropdown2({ ...dropdown2, anchorEl: event.currentTarget })
                  }}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  {btnText1}
                </Button>
                <Menu
                  id="basic-menu"
                  name="jobType"
                  open={openJobType}
                  onClose={handleClose}
                  anchorEl={dropdown2.anchorEl}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose} data-name="jobType" data-value="In person">In person</MenuItem>
                  <MenuItem onClick={handleClose} data-name="jobType" data-value="Hybrid">Hybrid</MenuItem>
                  <MenuItem onClick={handleClose} data-name="jobType" data-value="Remote">Remote</MenuItem>
                </Menu>
              </FormControl>

              <FormControl fullWidth sx={{padding:"50px 75px 50px 75px"}}>
                <Button variant="contained" size="large" type="submit" sx={{borderRadius: 6, padding:"12px", fontWeight: "bold"}}>Submit</Button>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      ) : (
        <Login />
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </>
  );
};

export default ApplicationForm;
