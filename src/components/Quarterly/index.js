import * as React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { BankNoteIcon } from "../commons/icon/multipleIcons";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import {
  BoxPanel,
  TypoItem,
} from "../../style/styledComponents";

const Quarterly = (props) => {

  return (
      <BoxPanel sx={{border:'none', padding:0}}>
        <Grid container spacing='20px'>
          <Grid container item xs={12}>
            <TypoItem flexGrow='1' color='#333333 !important' variant="subtitle2">Quarterly</TypoItem>
            <Link className="cursor" fontSize='1rem'>
              Confirm Payment
            </Link>
          </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {
                  props.data.map((list, index)=>{
                    if (index !== 0)
                      var year = new Date(props.data[index-1].date).getFullYear();
                      // console.log(';;;;;;', new Date(list.date).getFullYear(), year)
                    return (
                      new Date(list.date).getFullYear() > year &&
                      <Grid item xs={12}  color={list.icon==='bankNote' && '#000'} key={index}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Typography fontSize='1rem' fontWeight='bold' color="#333333">{new Date(list.date).getFullYear()}</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            {((list.icon==='check' && <CheckCircleOutlineOutlinedIcon sx={{color:"#219653"}} fontSize="small" />) || <BankNoteIcon />) }
                          </Grid>
                          <Grid item xs={5}>
                            {list.date}
                          </Grid>
                          <Grid item xs={3.5}>
                            {list.text}
                          </Grid>
                          <Grid item xs={2.5}>
                            ${list.price}
                          </Grid>
                        </Grid>
                      </Grid> ||
                      <Grid item xs={12}  color={list.icon==='bankNote' && '#000'} key={index}>
                        <Grid container spacing={2}>
                          <Grid item xs={1}>
                            {((list.icon==='check' && <CheckCircleOutlineOutlinedIcon sx={{color:"#219653"}} fontSize="small" />) || <BankNoteIcon />) }
                          </Grid>
                          <Grid item xs={5}>
                            {list.date}
                          </Grid>
                          <Grid item xs={3.5}>
                            {list.text}
                          </Grid>
                          <Grid item xs={2.5}>
                            ${list.price}
                          </Grid>
                        </Grid>
                      </Grid>
                    )
                  })
                }
              </Grid>
            </Grid>
        </Grid>
      </BoxPanel>
  );
};

Quarterly.propTypes = {
  children: PropTypes.any,
};

export default Quarterly;
