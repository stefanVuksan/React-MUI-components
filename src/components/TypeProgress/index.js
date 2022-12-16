import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import {
  Container,
  Grid,
  Divider,
  Link,
  OutlinedInput,
  Box,
  TextField,
} from "@mui/material";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  NumberFormatCustom,
  PriceLabel,
  StockInput,
  StockSelect,
} from "../../style/styledComponents";
import ProgressBar from "../commons/progressbar";

const useStyles = makeStyles({
  mt10: {
    marginTop: "10px !important",
  },
  relative: {
    position: "relative",
  },
  dateStyle: {
    position: "absolute !important",
    pointerEvents: "none",
    width: "92% !important",
    height: "92%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& fieldset": { border: "1px solid transparent" },
  },
  numberInput: {
    width:'100%',
    "& input": { padding:'6px 8px' },
  },
});

const TypeProgress = (props) => {
  
  const classes = useStyles();

  return (
    <Container>
      <BoxPanel>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>ID</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput 
                      value={props.planId.value}
                      name='planId'
                      onChange={props.handleChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={2}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Type</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={props.type.value}
                      name='type'
                      onChange={props.handleChange}
                    >
                      {props.type.options.map((item, index)=>(
                        <option key={index}>{item}</option>
                      ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={2}>
                <Grid container>
                  <Grid item xs={12}>
                    <PriceLabel>Date</PriceLabel>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`${classes.relative} ${classes.mt10} `}
                  >
                    <StockInput
                      type="date"
                      name="date"
                      onChange={props.handleChange}
                    />
                    <StockInput
                      type="text"
                      className={classes.dateStyle}
                      value={moment(props.date.value).format("MM/DD/YY")}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={5} md={7}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Amount</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                    className={classes.numberInput}
                    variant="outlined" 
                    value={props.amount.value}
                    onChange={props.handleChange}
                    name="amount"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={3}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Period</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={props.period.value}
                      name='period'
                      onChange={props.handleChange}
                    >
                    {props.period.options.map((item, index)=>(
                      <option key={index}>{item}</option>
                    ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={2}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Dropdown</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={props.dropdown.value}
                      name='dropdown'
                      onChange={props.handleChange}
                    >
                    {props.dropdown.options.map((item, index)=>(
                      <option key={index}>{item}</option>
                    ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
              <Divider />
          </Grid>
          <Grid item xs={12}>
            <Grid container height='24px'>
              <ProgressBar {...props.data} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container pt="16px">
              <Box  flexGrow='1'></Box>
              <Link color={'#828282'} pr= "16px" className="text-decoration-gray cursor">
                Cancel
              </Link>
              <Link className="cursor" 
                onClick={() => props.onSave()}>Save</Link>
            </Grid>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

TypeProgress.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
};

export default TypeProgress;
