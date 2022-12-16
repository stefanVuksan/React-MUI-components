import * as React from "react";
import PropTypes from "prop-types";
import {
  Grid, styled,
} from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  BoxPanel,
  PriceLabel,
  PriceValue,
} from "../../style/styledComponents";
import PriceBar from "../commons/priceBar";
import ToolTip from "../ToolTip";

const ToolTipProps = {
  data: [
    { item: "Qualified", value: 817 },
    { item: "Non-Qualified", value: 121 },
  ],
};

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#E0E0E0',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#E0E0E0',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const PriceProgress = (props) => {

  return (
    <BoxPanel sx={{border:'none', padding:0}}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <PriceLabel>{props.title} </PriceLabel>
        </Grid>
        <Grid py="4px" className="align-items-center" item xs={12}>
          <PriceValue pr='5.5px' color={(props.price<0 && '#EB5757 !important')}>{((props.price<0 && '-')||'')+`$`+Math.abs(props.price).toLocaleString('en-US')}</PriceValue>
          { 
            (props.info === 1 &&
              
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <ToolTip {...ToolTipProps} />
                  </React.Fragment>
                }
              >
                  <InfoOutlinedIcon sx={{fontSize:"18px", cursor:'pointer'}} />
              </HtmlTooltip>
            )
          }
        </Grid>
      </Grid>
      <Grid item xs={12} pt="12px">
        <PriceBar {...{ percent:(props.price / props.totalPrice * 100), color:(props.price<0 && '#EB5757')||'#000'}} />
      </Grid>
      <Grid item xs={12} pt="12px">
        <PriceLabel sx={{textAlign:'right'}}>Total ${props.totalPrice.toLocaleString('en-US')}</PriceLabel>
      </Grid>
    </BoxPanel>
  );
};

PriceProgress.propTypes = {
  children: PropTypes.any,
};

export default PriceProgress;
