import * as React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Container, Grid, Typography } from "@mui/material";

import { BoxPanel, TypoItem } from "../../style/styledComponents";
import ProgressBar from "../commons/progressbar";

const useStyles = makeStyles({
  value: {
    fontSize: "12px !important",
  },
  title: {
    fontSize: "12px !important",
    fontWeight: "900 !important",
    color: "#333",
  },
  progressBack: {
    position: "relative",
    overflow: "hidden",
    display: "block",
    zIndex: "0",
    backgroundColor: "white",
    height: "20px",
    border: "2px solid #333",
  },
  status1: {
    background:
      "repeating-linear-gradient(45deg, #000000, #000000 1px, #ffffff 1px, #ffffff 8px)",
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    transition: "transform .4s linear",
    transformOrigin: "left",
    // backgroundColor: "#1976d2",
  },
  status2: {
    background: "#333",
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    transition: "transform .4s linear",
    transformOrigin: "left",
    // backgroundColor: "#1976d2",
  },
});

const GraphTypes = () => {
  const classes = useStyles();
  const progressBarGroup = [
    {
      title: "000,000 , ",
      value: "#$[Value]",
      data: {
        min: 0,
        max: 100,

        status: [
          {
            pattern: 0,
            value: 0,
            label: "000 Dim1",
          },
          {
            pattern: 2,
            value: 45,
            label: "000 Dim2",
          },
          {
            pattern: 5,
            value: 64,
          },
          {
            pattern: 3,
            value: 65,
            label: "000 Dim3",
          },
          {
            pattern: 4,
            value: 90,
            label: "000 Dim4",
          },
        ],
      },
    },
    {
      title: "000,000 , ",
      value: "#$[Value]",
      data: {
        min: 0,
        max: 100,

        status: [
          {
            pattern: 0,
            value: 0,
            label: "000 Dim1",
          },
          {
            pattern: 1,
            value: 25,
            label: "000 Dim2",
          },
          {
            pattern: 2,
            value: 40,
            label: "000 Dim3",
          },
          {
            pattern: 5,
            value: 64,
          },
          {
            pattern: 3,
            value: 65,
            label: "000 Dim4",
          },
          {
            pattern: 4,
            value: 90,
            bg: "blue",
            label: "Dim5",
          },
        ],
      },
    },
    {
      title: "Test 3",
      value: "#$[Value]",
      data: {
        min: 0,
        max: 100,

        status: [
          {
            pattern: 0,
            value: 0,
            label: "Real",
          },
          {
            pattern: 2,
            value: 75,
            label: "Test",
          },
        ],
      },
    },
  ];

  return (
    <Container>
      <BoxPanel>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TypoItem variant="subtitle2">GraphTypes</TypoItem>
          </Grid>
          {progressBarGroup.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Grid container spacing={2}>
                <Grid item xs={3} md={3}>
                  <Typography className={classes.title}>
                    {item.title}
                  </Typography>
                  <Typography className={classes.value}>
                    {item.value}
                  </Typography>
                </Grid>
                <Grid item xs={9} md={9}>
                  <Grid container height="24px">
                    <ProgressBar {...item.data} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </BoxPanel>
    </Container>
  );
};

GraphTypes.propTypes = {
  children: PropTypes.any,
};

export default GraphTypes;
