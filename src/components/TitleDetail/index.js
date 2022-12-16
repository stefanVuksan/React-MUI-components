import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Grid,
  Typography,
  Link,
  OutlinedInput,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  TextField,
  TableFooter,
} from "@mui/material";
import moment from "moment";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  TypoItem,
  PriceLabel,
  PriceValue,
  StockInput,
  StockSelect,
  PriceNumberFormatCustom,
} from "../../style/styledComponents";

//styles
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
    // width: "98% !important",
    // height: "92%",
    marginTop: "7px",
    top: "50%",
    left: "50%",
    padding: "1px 8px 0px 8px !important",
    transform: "translate(-50%, -50%)",
    // "& fieldset": { border: "1px solid blue" },
  },
  numberInput: {
    width: "100%",
    "& input": { padding: "6px 8px" },
  },
  tableHead: {
    "& th, td": {
      color: "#828282",
      padding: 0,
      paddingTop: "12px",
      paddingBottom: "4px",
    },
  },
  tableBody: {
    "& td, & th": {
      border: 0,
      padding: 0,
      paddingTop: "8px",
      paddingBottom: "0px",
    },
  },
  tableFoot: {
    "& td, & th": {
      border: 0,
      padding: 0,
      paddingTop: "8px",
      paddingBottom: "0px",
    },
    "& td": { color: "#333333", fontSize: "14px" },
  },
});

const TitleDetail = (props) => {
  const classes = useStyles();

  const getSumByKey = (arr, key) => {
    return arr.reduce(
      (accumulator, current) => accumulator + Number(current[key]),
      0
    );
  };

  return (
    <Container>
      <BoxPanel>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TypoItem variant="subtitle2">Title</TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={4} md={9}>
                <Grid container>
                  <Grid item xs={12}>
                    <PriceLabel>Dates</PriceLabel>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`${classes.relative} ${classes.mt10}`}
                  >
                    <DatePicker
                      selected={props.startDate}
                      selectsRange
                      startDate={props.startDate}
                      endDate={props.endDate}
                      onChange={props.dateRange}
                      isClearable
                    />
                    <StockInput
                      type="text"
                      className={classes.dateStyle}
                      value={
                        moment(props.startDate).format("MM/DD/YY") +
                        " to " +
                        (props.endDate === null
                          ? ""
                          : moment(props.endDate).format("MM/DD/YY"))
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={1.5}>
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
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Type</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      IconComponent={SelectIcon}
                      input={<OutlinedInput />}
                      value={props.sell.value}
                      name="sell"
                      onChange={props.handleChange}
                    >
                      {props.sell.options.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <PriceLabel>Decision Rules</PriceLabel>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  {props.rules.map((item, index) => (
                    <Grid item xs={"auto"} key={index}>
                      <Typography
                        bgcolor="#828282"
                        color="#fff"
                        padding={"4px 8px"}
                        borderRadius="3px"
                      >
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                  <Grid item xs={"auto"}>
                    <AddIcon
                      sx={{
                        fontSize: "18px",
                        padding: "7px",
                        border: "1px dashed gray",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="space-between">
              {props.dim.map((list, index) => (
                <Grid item xs={"auto"} key={index}>
                  <Grid container spacing="4px">
                    <Grid item xs={12}>
                      <PriceLabel>Dim {index + 1}</PriceLabel>
                    </Grid>
                    <Grid container className="align-items-center" item xs={12}>
                      <PriceValue
                        pr="5.5px"
                        sx={{ color: list < 0 && "#EB5757" }}
                      >
                        {((list < 0 && "-") || "") +
                          `$` +
                          Math.abs(list).toLocaleString("en-US")}
                      </PriceValue>
                      <InfoOutlinedIcon className="font-18" />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Table className="ml-16">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell width="20%">Id</TableCell>
                    <TableCell width="10%" align="right">
                      col 1
                    </TableCell>
                    <TableCell width="10%" align="right">
                      col 2
                    </TableCell>
                    <TableCell width="10%" align="right">
                      col 3
                    </TableCell>
                    <TableCell width="10%" align="right">
                      col 4
                    </TableCell>
                    <TableCell width="10%" align="right">
                      col 5
                    </TableCell>
                    <TableCell width="30%" align="right">
                      col 6
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                  {props.table.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.col1}</TableCell>
                      <TableCell align="right">{row.col2}</TableCell>
                      <TableCell align="right">{row.col3}</TableCell>
                      <TableCell align="right">_</TableCell>
                      <TableCell align="right">{row.col5}</TableCell>
                      <TableCell align="right">
                        ${row.col6.toLocaleString("en-US")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter className={classes.tableFoot}>
                  <TableRow>
                    <TableCell>
                      <Typography fontSize="14px" flexGrow="1" color="#828282">
                        <b>Total</b>
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <b>
                        {getSumByKey(props.table, "col1").toLocaleString(
                          "en-US"
                        )}
                      </b>
                    </TableCell>
                    <TableCell align="right">
                      <b>
                        {getSumByKey(props.table, "col2").toLocaleString(
                          "en-US"
                        )}
                      </b>
                    </TableCell>
                    <TableCell align="right">
                      <b>
                        {getSumByKey(props.table, "col3").toLocaleString(
                          "en-US"
                        )}
                      </b>
                    </TableCell>
                    <TableCell align="right">-</TableCell>
                    <TableCell align="right">
                      <b>
                        {getSumByKey(props.table, "col5").toLocaleString(
                          "en-US"
                        )}
                      </b>
                    </TableCell>
                    <TableCell align="right">
                      <b>
                        $
                        {getSumByKey(props.table, "col6").toLocaleString(
                          "en-US"
                        )}
                      </b>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container pb="12px" className="align-items-end">
              <Link flexGrow="1" className=" cursor">
                Hide Details
              </Link>
              <MoreHorizIcon color="primary" />
            </Grid>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

TitleDetail.propTypes = {
  children: PropTypes.any,
};

export default TitleDetail;
