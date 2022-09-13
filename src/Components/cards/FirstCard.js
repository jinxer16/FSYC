import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

export default function FirstCard() {
  const classes = useStyles();
  return (
    <Card sx={{ minWidth: 275 }} className={classes.card}>
      <CardContent>
        <Typography
          variant="h1"
          sx={{ fontSize: "25px", display: "flex", justifyContent: "start" }}
          gutterBottom
        >
          Real Mining, Real Rewards
        </Typography>
        <Typography variant="h5" component="div">
          Each NFT is a contract to buy 800 GH/s worth of Kadena mining power.
          Your miner will be hosted in a completely renewable facility, allowing
          you to mine without the hassle of doing it at home.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
const useStyles = makeStyles({
  card: {
    // border: "1px solid green",
    borderRadius: "10px",
  },
});
