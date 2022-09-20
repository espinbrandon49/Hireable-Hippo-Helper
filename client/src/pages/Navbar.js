import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import TrackerContainer from '../pages/TrackerContainer/TrackerContainer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import icon from "../images/hippoIcon.png";
import useMediaQuery from '@mui/material/useMediaQuery';

function TabPanel(props) {
  const { children, currentPage, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={currentPage !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {currentPage === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function NavBar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [currentPage, setCurrentPage] = React.useState(0);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const smallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <>
    <Box sx={{ background: 'white' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {Auth.loggedIn() ? (
          <Tabs variant={smallScreen ? "fullWidth" : ""} value={currentPage} orientation={smallScreen ? "vertical" : "horizonal"} onChange={handlePageChange}>
            <Tab icon={<img src={icon} alt="hippo" style={{"height": "45px"}} />} component={Link} to="/" {...a11yProps(0)} />
            <Tab label="HippoStats" component={Link} to="/Main/#HippoStats" {...a11yProps(1)} />
            <Tab label="My Applications" component={Link} to="/Main/#Application" {...a11yProps(2)} />
            <Tab label="Add New" component={Link} to="/AppForm" {...a11yProps(3)} />
            <Tab label="Log Out" onClick={logout} {...a11yProps(4)} />
          </Tabs>
        ) : (
          <Tabs variant={smallScreen ? "fullWidth" : ""} value={currentPage} orientation={smallScreen ? "vertical" : "horizonal"} onChange={handlePageChange}>
            <Tab icon={<img src={icon} alt="hippo" style={smallScreen ? {"height": "45px", "padding": "5px"} : {"height": "45px"}} />} component={Link} to="/" sx={smallScreen ? { borderBottom: 1, borderColor: 'divider' } : {}} {...a11yProps(0)} />
            <Tab label="HippoStats" component={Link} to="/Login" sx={smallScreen ? { borderBottom: 1, borderColor: 'divider' } : {}} {...a11yProps(1)} />
            <Tab label="My Applications" component={Link} to="/Login" sx={smallScreen ? { borderBottom: 1, borderColor: 'divider' } : {}} {...a11yProps(2)} />
            <Tab label="Add New" component={Link} to="/Login" sx={smallScreen ? { borderBottom: 1, borderColor: 'divider' } : {}} {...a11yProps(3)} />
            <Tab label="Log In" component={Link} to="/Login" sx={smallScreen ? { borderBottom: 1, borderColor: 'divider' } : {}} {...a11yProps(5)} />
          </Tabs>
        )}
      </Box>
      <TabPanel value={currentPage} index={0}>
        Homepage
      </TabPanel>
      <TabPanel value={currentPage} index={1}>
        HippoStats
      </TabPanel>
      <TabPanel value={currentPage} index={2}>
        Application
      </TabPanel>
      <TabPanel value={currentPage} index={3}>
        AppForm
      </TabPanel>
      <TabPanel value={currentPage} index={4}>
        Logout
      </TabPanel>
      <TabPanel value={currentPage} index={5}>
        Login
      </TabPanel>
    </Box>
    <TrackerContainer currentPage={currentPage} />
    </>
  );
}

export default NavBar;