import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PharmacyProductList from "./PharmacyProductList";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 800
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: "50px",
    boxShadow: "10px",
  },
  alignSet: {
    paddingLeft: "100px"
  }
}));

export default function SideBarForPharmacy(props) {
  console.log(props.searchString);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className={classes.root}>
    <Grid item container>
        <Grid item xs={false} sm={2}>
        <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Allergy & Antihistamines" {...a11yProps(0)} />
        <br/>
        <br/>
        <Tab label="Antibiotics" {...a11yProps(2)} />
        <br/>
        <br/>
        <Tab label="Anti-Cancer & Tumor" {...a11yProps(3)} />
        <br/>
        <br/>
        <Tab label="Anti-Fungal" {...a11yProps(4)} />
        <br/>
        <br/>
        <Tab label="Anxiety & Behavior" {...a11yProps(5)} />
        <br/>
        <br/>
        <Tab label="Arthritis_Pain & Inflammation" {...a11yProps(6)} />
        <br/>
        <br/>
        <Tab label="Asthma & Respiratory" {...a11yProps(7)} />
        <br/>
        <br/>
        <Tab label="Colic & Musculoskeletal" {...a11yProps(8)} />
        <br/>
        <br/>
        <Tab label="Cushing's Disease" {...a11yProps(9)} />
        <br/>
        <br/>
        <Tab label="Diabetes & Insulin" {...a11yProps(10)} />
        <br/>
        <br/>
        <Tab label="Digestive_Tract, Liver & Pancr" {...a11yProps(11)} />
        <br/>
        <br/>
        <Tab label="Ear_Medications" {...a11yProps(12)} />
        <br/>
        <br/>
        <Tab label="Epilepsy & Seizure" {...a11yProps(13)} />
      </Tabs>

        </Grid>
        <Grid item xs={12} sm={8}>
          <TabPanel value={value} index={0} className={classes.alignSet}>
              <PharmacyProductList med ="Allergy"/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            {console.log(value)}
            <PharmacyProductList med = "Antibiotics"/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PharmacyProductList med = "Anti_Cancer"/>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <PharmacyProductList med = "Anti_Fungal"/>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <PharmacyProductList med = "Anxiety"/>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <PharmacyProductList med = "Arthritis_Pain"/>
          </TabPanel>
          <TabPanel value={value} index={7}>
            <PharmacyProductList med = "Asthma"/>
          </TabPanel>
          <TabPanel value={value} index={8}>
            <PharmacyProductList med = "Colic"/>
          </TabPanel>
          <TabPanel value={value} index={9}>
            <PharmacyProductList med = "Cushing"/>
          </TabPanel>
          <TabPanel value={value} index={10}>
            <PharmacyProductList med = "Diabetes"/>
          </TabPanel>
          <TabPanel value={value} index={11}>
            <PharmacyProductList med = "Digestive_Tract"/>
          </TabPanel>
          <TabPanel value={value} index={12}>
            <PharmacyProductList med = "Ear_Medications"/>
          </TabPanel>
          <TabPanel value={value} index={13}>
            <PharmacyProductList med = "Epilepsy"/>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
