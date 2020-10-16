import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import pharmacyService from "../services/pharmacy.service";
import ButtonBase from '@material-ui/core/ButtonBase';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 240,
    height: 240,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const PharmacyProductCard = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const getMedicineById = (userId) => {
    pharmacyService.getMedicineById(userId)
    .then(res => {
        console.log(res.data);
    })
    setOpen(true);

  }


  const {id, avatarUrl, title, price, description, imageUrl} = props;
  return (

    <>

      <Card>
        <CardHeader
          avatar={<Avatar src={avatarUrl} />}
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title={title}
        />
        <CardMedia style={{ height: "150px" }} image={imageUrl} />
        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <br/>
        </CardContent>
        <CardActions>
          <Button size="h6" onClick={() =>getMedicineById(id)}>
            <Typography variant="button" component="p">
              <b>Details more</b>
            </Typography>
          </Button>

          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={imageUrl} />
                  </ButtonBase>
                  <br></br>
                  <Typography variant="body2" color="textSecondary">
                    Price: <b> {price}</b>
                  </Typography>
                  <br/>
                  <Typography variant="body2" color="#424242">
                    Contact=No: <b> 077- 0000000</b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <b>{title}</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        <ul>
                          <li>{description}</li>
                        </ul>
                      </Typography>
                      
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
          </Dialog>

        </CardActions>
      </Card>
    </>
    
  );
};

export default PharmacyProductCard;