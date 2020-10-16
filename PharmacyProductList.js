import React from "react";
import { Grid } from "@material-ui/core";
import PharmacyContent from "./PharmacyContent";

const PharmacyProductList = (props) => {
   
  return (
    <>
    <Grid container direction="column">
      {console.log(props)}
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={11}>
          <PharmacyContent med={props.med} searchString={props.searchString}/>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default PharmacyProductList;
