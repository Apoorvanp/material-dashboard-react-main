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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import axios from 'axios';
// Data
import React, { useEffect, useState } from 'react';
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Tables() {
  const [naturgefahrenApiData, setNaturgefahrenApiData] = useState(null);
  const [freiburgApiData, setfreiburgApiData] = useState(null);
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const naturgefahren = await axios.get("https://s3.eu-central-1.amazonaws.com/app-prod-static.warnwetter.de/v16/warning_naturgefahren_overview.json");
      const freiburg = await axios.get("https://s3.eu-central-1.amazonaws.com/app-prod-static.warnwetter.de/v16/current_measurement_10803.json");
      console.log(naturgefahren)
      setNaturgefahrenApiData(naturgefahren.data.graslandFeuerIndex);
      setfreiburgApiData(freiburg.data.graslandFeuerIndex);

      console.log(freiburgApiData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Item>
                    <img style={{"width":"75%", "height":"auto"}} src={"https://www.dwd.de/DWD/warnungen/agrar/wbx/wbx_stationen.png?0"}  />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Grasland Feuer Index
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Der Graslandfeuerindex (GLFI) beschreibt die Feuergefährdung von offenem, nicht abgeschattetem Gelände mit abgestorbener Wildgrasauflage ohne grünen Unterwuchs. 
                      Er zeigt das witterungsbedingte Feuerrisiko in 5 Gefahrenstufen an: 1 = sehr geringe Gefahr bis 5 = sehr hohe Gefahr – ebenso wie bei dem für Waldlandschaften verwendeten Waldbrandgefahrenindex (WBI).
                      </Typography>
                    </CardContent>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <img style={{"width":"75%", "height":"auto"}} src="https://www.dwd.de/DWD/warnungen/warnapp_gemeinden/json/warnungen_gemeinde_map_baw.png?ß"/>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Warnkarte Baden-Württemberg
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Aktuelle Warnkarte des DWD für die Region BWB mit spezieller Relevanz für den Schwarzwald.
                      </Typography>
                    </CardContent>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                      <img style={{"width":"75%", "height":"auto"}} src="https://www.wettergefahren.de/DWD/warnungen/agrar/glfi/glfi_stationen.png?0"/>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Waldbrand Gefahrenindex
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      Der Waldbrandgefahrenindex WBI beschreibt das meteorologische Potential für die Gefährdung durch Waldbrand. 
                      Er zeigt die Waldbrandgefahr in 5 Gefahrenstufen an: 1= sehr geringe Gefahr bis 5 = sehr hohe Gefahr.
                      </Typography>
                    </CardContent>
                  </Item>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
