/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Select, MenuItem, Typography } from '@material-ui/core';
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/forest-fire.jpeg";
import { useEffect } from "react";

const LocationComponent = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      {userLocation ? (
        <div>

<br/><br/>
          Your location:
          <br/><br/>
          Latitude: {userLocation.latitude}<br/>
          Longitude: {userLocation.longitude}
        </div>
      ) : (
        <button onClick={() => getLocation()}>Get Location</button>
      )}
    </div>
  );
};


const DropdownMenu1 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Select value={selectedOption} onChange={handleOptionChange}>
      <MenuItem value="option1">Smoke</MenuItem>
      <MenuItem value="option2">Open Fire</MenuItem>
      <MenuItem value="option3">Dangerous Activities that may cause forest fire</MenuItem>
    </Select>
  );
};

const DropdownMenu2 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Select value={selectedOption} onChange={handleOptionChange}>
      <MenuItem value="option1">Less than 5 kms from me</MenuItem>
      <MenuItem value="option2">Between 5 and 15 kms</MenuItem>
      <MenuItem value="option3">Farther away</MenuItem>
    </Select>
  );
};

const DropdownMenu3 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Select value={selectedOption} onChange={handleOptionChange}>
      <MenuItem value="option1">Less than 5 kms from me</MenuItem>
      <MenuItem value="option2">Between 5 and 15 kms</MenuItem>
      <MenuItem value="option3">Farther away</MenuItem>
    </Select>
  );
};

function Cover() {
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Report forest fire danger near you
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter the details below
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="phone" label="Phone Number" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDBox display="flex" alignItems="center" ml={0}>
              <Typography variant="body1" component="div" style={{ fontSize: '15px' }}>
                What do you see? 
                </Typography>
                </MDBox>
                <MDBox alignItems="center" ml={0} mb ={2} variant="standard" fullWidth>
              <DropdownMenu1 width="100%" />
              </MDBox>
              <MDBox mt={4} mb={1}>
              <MDBox display="flex" alignItems="center" ml={0}>
              <Typography variant="body1" component="div" style={{ fontSize: '15px' }}>
                How far is the danger? 
                </Typography>
                </MDBox>
                <MDBox display="flex" alignItems="center" ml={0}>
              <DropdownMenu2/>
              </MDBox>
              </MDBox>
              <Typography variant="body1" component="div" style={{ fontSize: '15px' }}>
              <LocationComponent/>
              </Typography>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree that I have provided the right information
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
               Submit
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
