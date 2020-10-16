import React,{useEffect} from "react";
import PharmacyProductCard from "./PharmacyProductCard";
import { Grid} from "@material-ui/core";
import pharmacyService from "../services/pharmacy.service";

const PharmacyContent = (props) => {
  const [medicine, setMedicine] = React.useState([])
 console.log(props);
  useEffect(() => {
    pharmacyService.getMedicineByType(props.med)

    .then(
      response => {
        console.log(response)
        setMedicine(response.data)
      },
      error => {
        console.log(error)
        setMedicine(
          (error.response && error.response.data) ||
            error.message ||
            error.toString()
        )
      }
    );
    
  }, [])


 

  const petMakerCard = (response) => {
    return (
      <>
        <Grid item xs={12} sm={4}>
          
          <PharmacyProductCard {...response} />
        </Grid>
      </>
    );
  };


  return (


    <>
      <Grid container spacing={3}>
        {medicine.map((response) => petMakerCard(response))}
      </Grid>
    </>
  );
};

export default PharmacyContent;