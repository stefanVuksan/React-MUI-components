import * as React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Link, OutlinedInput, TextField } from "@mui/material";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  GrayBoxPanel,
  TypoItem,
  PriceLabel,
  StockInput,
  StockSelect,
  PriceNumberFormatCustom,
} from "../../style/styledComponents";
import { makeStyles } from "@mui/styles";
import moment from "moment";

const useStyles = makeStyles({
  numberInput: {
    backgroundColor: "#fff",
    borderRadius: "4px",
    width: "100%",
    "& input": { padding: "6px 8px" },
  },
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
});

const Setup = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <GrayBoxPanel>
        <Grid container spacing="8px">
          <Grid item xs={12}>
            <TypoItem variant="subtitle2" gutterBottom>
              Setup
            </TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={8} md={4.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Name</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput
                      value={props.name.value}
                      name="name"
                      onChange={props.handleChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={1.8}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Company</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={props.company.value}
                      name="company"
                      onChange={props.handleChange}
                    >
                      {props.company.options.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={1.3}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Type</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={props.type.value}
                      name="type"
                      onChange={props.handleChange}
                    >
                      {props.type.options.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={1.2}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Initial Price</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.numberInput}
                      variant="outlined"
                      value={props.initialPrice.value}
                      onChange={props.handleChange}
                      name="initialPrice"
                      InputProps={{
                        inputComponent: PriceNumberFormatCustom,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={1.4}>
                <Grid container>
                  <Grid item xs={12}>
                    <PriceLabel>Date</PriceLabel>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`${classes.relative} ${classes.mt10}`}
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
              <Grid item xs={3} md={1.8}>
                <Grid container spacing="30px">
                  <Grid item xs={12}>
                  </Grid>
                  <Grid item xs={12}>
                    <Link color="#828282" className="cursor">
                    Advanced Controls
                    </Link>
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

Setup.propTypes = {
  children: PropTypes.any,
};

export default Setup;
