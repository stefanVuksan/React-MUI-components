import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import RefreshIcon from "@mui/icons-material/Refresh";

import ProgressBar from "../commons/progressbar";

const TypoItem = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1, 2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  fontWeight: "bold",
}));
const PriceLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0, 2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  fontWeight: "light",
  fontSize: "12px",
}));
const PriceValue = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0, 1, 2, 2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  fontWeight: "bold",
  fontSize: "20px",
}));
const IsoItem = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0, 2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  fontWeight: "bold",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
}));
const IsoPrice = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0, 2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  fontWeight: "light",
  fontSize: "12px",
}));
const ArrowItem = styled(EastIcon)(({ theme }) => ({
  fontSize: "15px",
}));
const BottomLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0, 0, 0, 2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  fontWeight: "light",
  fontSize: "12px",
  display: "inline-block",
}));
const BtnDetail = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0, 2, 0, 2),
  textAlign: "right",
  color: theme.palette.text.primary,
  fontWeight: "light",
  fontSize: "12px",
}));

const StockPlan = () => {
  return (
    <Container>
      <Paper sx={{ flexGrow: 1, m: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TypoItem variant="subtitle2" gutterBottom>
              Stripe Stock Plan
            </TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <PriceLabel>Total Value</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceValue>$128,012</PriceValue>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <PriceLabel>Current Value</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceValue>$128,012</PriceValue>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <PriceLabel>409A Value (Jun 2022)</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceValue>$128,012</PriceValue>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <IsoItem>
                      7,239 ISOs, 2 Grants <ArrowItem />
                    </IsoItem>
                  </Grid>
                  <Grid item xs={12}>
                    <IsoPrice>$128,012</IsoPrice>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ProgressBar percent={80} />
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ paddingBottom: 2 }}>
            <Grid container spacing={2} sx={{ textAlign: "left" }}>
              <Grid item xs={6}>
                <Grid container spacing={2} sx={{ textAlign: "left" }}>
                  <Grid item sx={{ display: "flex", alignItems: "center" }}>
                    <BottomLabel>Last updated 23 days ago</BottomLabel>
                  </Grid>
                  <Grid item>
                    <BottomLabel>
                      <Link
                        href="#"
                        color="inherit"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <RefreshIcon sx={{ fontSize: "15px" }} /> Updated Equity
                      </Link>
                    </BottomLabel>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <BtnDetail>
                  <Link href="#" color="inherit">
                    View Details
                  </Link>
                </BtnDetail>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

StockPlan.propTypes = {
  children: PropTypes.any,
};

export default StockPlan;
