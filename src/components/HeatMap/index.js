import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import {
  BoxPanel,
  PriceLabel,
} from "../../style/styledComponents";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ProgressBar from "../commons/progressbar";


const HeatMap = (props) => {

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={8.5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12/100*props.data.status[1].value}>
                  <PriceLabel>Category 1</PriceLabel>
                </Grid>
                <Grid item >
                  <PriceLabel>Category 2</PriceLabel>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container height='26px'>
                <ProgressBar {...props.data} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3.5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <PriceLabel>Heatmap</PriceLabel>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0.6}>
                {props.heatMap.map((item, index)=>(
                <Grid item xs={3} key={index} >
                  <Grid container bgcolor={(item.check===1 && '#219653') || '#F2994A'} py="4px" className="align-items-center" justifyContent='center' spacing={0.3}>
                    {item.check===1 && 
                    <Grid item>
                      <Grid container>
                      <CheckCircleOutlineOutlinedIcon sx={{color:"#fff"}} fontSize="12px" />
                      </Grid>
                    </Grid>
                    }
                    <Grid item>
                      <Grid container>
                        <Typography fontSize='0.75rem' fontWeight="bold" color="#fff">{item.title}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

HeatMap.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
};

export default HeatMap;
