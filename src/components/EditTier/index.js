import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Grid,
  TextField,
} from "@mui/material";
import {
  GrayBoxPanel, PriceLabel, PriceNumberFormatCustom, StockInput, TypoItem,
} from "../../style/styledComponents";

//styles
const useStyles = makeStyles({
  marker: {
    position:'absolute', 
    width:'22.4px', 
    height:'22.4px', 
    backgroundColor:'#E0E0E0', 
    top:"0px", 
    left:"50%", 
    transform:'translate(-50%, -50%) rotate(-45deg)'
  },
  numberInput: {
    width:'100%',
    "& input": { padding:'6px 8px' },
    backgroundColor:'#fff'
  },
});
const EditTier = (props) => {

  const classes = useStyles();

  return (
    <Container>
      <GrayBoxPanel width='237px' position='relative' color='#000000 !important' px='12px !important'>
        <div className={classes.marker}></div>
        <Grid container spacing="10px">
          <Grid item xs={12}>
            <TypoItem variant="subtitle2">Edit Tier</TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={4.3}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Min</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                    className={classes.numberInput}
                    variant="outlined" 
                    value={props.min.value}
                    onChange={props.handleChange}
                    name="min"
                    InputProps={{
                      inputComponent: PriceNumberFormatCustom,
                    }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4.3}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Max</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                    className={classes.numberInput}
                    variant="outlined" 
                    value={props.max.value}
                    onChange={props.handleChange}
                    name="max"
                    InputProps={{
                      inputComponent: PriceNumberFormatCustom,
                    }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3.4}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>%</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput 
                      value={props.percent.value}
                      name='percent'
                      onChange={props.handleChange} 
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </GrayBoxPanel>
    </Container>
  );
};

EditTier
.propTypes = {
  children: PropTypes.any,
};

export default EditTier
;
