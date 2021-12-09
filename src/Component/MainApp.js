
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductList } from "./MainAppAction"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Grid } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

function MainApp(props) {
  useEffect(() => {
    props.getProductList();
  }, []);
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    }
  }))
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {props.employeeList.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={props.employeeList.indexOf(item)}>
            <Card class="h-100">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.image}
                // alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>Price- {item.price}</b>
                  </Typography>
                  <Typography variant="body3" color="text.secondary">
                    <b>{item.description}</b>
                  </Typography>
                </CardContent>
                <Button style={{marginLeft :"30%"}}>Add to Cart</Button>
              </CardActionArea>
            </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
const mapStateToProps = ({ main }) => ({
  employeeList: main.employeeList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getProductList,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(MainApp)