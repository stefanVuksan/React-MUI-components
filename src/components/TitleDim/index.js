import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
} from "@mui/material";
import NorthIcon from '@mui/icons-material/North';
import {
  BoxPanel,
  TypoItem,
  PriceLabel,
  PriceValue,
} from "../../style/styledComponents";

const TitleDim = ( props ) => {

  return (
    <Container>
      <BoxPanel width='40%'>
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            <TypoItem variant="subtitle2">Title</TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {props.dims.map((item, index)=>(
                <Grid item xs={12} md={6} key={index}>
                  <Grid container spacing="4px">
                    <Grid item xs={12}>
                      <PriceLabel>Dim {index+1}</PriceLabel>
                    </Grid>
                    <Grid container item xs={12}>
                      <PriceValue>${item.dim.toLocaleString('en-US')}</PriceValue>
                    </Grid>
                    <Grid item xs={12}>
                      <PriceLabel><NorthIcon sx={{fontSize:"10px"}} /> from ${item.subTitle.toLocaleString('en-US')}</PriceLabel>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

TitleDim.propTypes = {
  children: PropTypes.any,
};

export default TitleDim;
