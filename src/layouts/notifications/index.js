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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import pdfFile from "assets/images/flyer_waldbrand.pdf";
import pdfEnglish from "assets/images/fire-safety-english.pdf";
import {saveAs} from "file-saver";
import bgImage from "assets/images/forest-fire.jpeg";

function PDFDownloadButton1() {
  const handleDownload = () => {
    saveAs(pdfFile, 'flyer_waldbrand.pdf');
  };

  return (
    <MDButton variant="contained" onClick={handleDownload}>
       Sicherheitsinformationen herunterladen
    </MDButton>
  );
}

function PDFDownloadButton2() {
  const handleDownload = () => {
    saveAs(pdfEnglish, 'fire-safety-english.pdf');
  };

  return (
    
    <MDButton variant="contained" onClick={handleDownload}>
     Download Safety Instructions
    </MDButton>
  );
}

function Notifications() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  );

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );


  const renderWarningSB = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
      bgWhite
    />
  );

  const renderErrorSB = (
    <MDSnackbar
      color="error"
      icon="warning"
      title="Material Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout image={bgImage} >
      
      
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">

          <Grid item xs={12} lg={8}>
            <MDBox p={2} lineHeight={0}>
              <MDTypography variant="h5">Emergency Information</MDTypography>
            </MDBox>
            <MDBox m={1} pt={2} px={2}>
              <MDButton variant="gradient" color="error" fullWidth>
                Ambulance & Paramedics (calling from a German landline or cellphone) - 112
              </MDButton>
              </MDBox>
            <MDBox m={1} pt={2} px={2}>
              <MDButton variant="gradient" color="error" fullWidth>
                Police (calling from a German landline or cellphone) - 110
              </MDButton>
              </MDBox>
            <MDBox m={1} pt={2} px={2}>
              <MDButton variant="gradient" color="error" fullWidth>
                Out-of-Hours Medical Care (calling from a German landline or cellphone) - 116 117
              </MDButton>
            </MDBox>
            <MDBox m={1} pt={2} px={2}>
              <MDButton variant="gradient" color="error" fullWidth>
              If a Fire Starts:
 
 Know how to safely operate a fire extinguisher
 Remember to GET OUT, STAY OUT and CALL122 or your local emergency phone number.
 Yell "Fire!" several times and go outside right away
 If you must escape through smoke, get low and go under the smoke to your exit. Close doors behind you.
 
 If you spot a forest fire, remain calm, go to the nearest telephone and dial 122 to report the fire as quickly as possible to your local fire department. Calmly tell the emergency dispatcher when you saw it and where you saw it.
              </MDButton>
              </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Grid container spacing={1} justifyContent="center">
        <PDFDownloadButton1/>
        <PDFDownloadButton2/>
        </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
