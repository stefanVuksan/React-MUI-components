import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  TableFooter,
  Box,
  Link,
 } from '@mui/material';
import { BoxPanel, TypoItem } from '../../style/styledComponents';
import { makeStyles } from '@mui/styles';


//styles
const useStyles = makeStyles({
  table: { marginLeft:'16px', '& th, & td': {color:'#828282', paddingTop:'4px !important', paddingBottom:'4px !important' }},
  tableHead: { "& td, & th": { padding:'0px 4px',},},
  tableBody: { "& td, & th": { border: 0, padding:'0px 4px'},},
  tableFoot: { "& td, & th": { border: 0, padding:'0px 4px', color:'#333333', fontSize:'14px'},},
});


const Summary = ( props ) => {

    const classes = useStyles();

    const getSumByKey = (arr, key) => {
        return arr.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
    }

    return (
        // <Box p={3} width='100%'>
            <Grid container spacing={2}>
                <Grid container item xs={12} alignItems="center">
                    <TypoItem flexGrow={'1'} variant="subtitle2">{props.title}</TypoItem>
                    <Link className="cursor" fontSize='1rem'>
                    {props.link}
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Table className={classes.table}>
                            <TableHead className={classes.tableHead}>
                                <TableRow>
                                    <TableCell>Vest No.</TableCell>
                                    <TableCell align="right">Current</TableCell>
                                    <TableCell align="right">YTD</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.tableBody}>
                                {props.table.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">{row.category}</TableCell>
                                        <TableCell align="right">{((row.current<0 && '-')||'')+`$`+Math.abs(row.current).toLocaleString('en-US')}</TableCell>
                                        <TableCell align="right">{((row.ytd<0 && '-')||'')+`$`+Math.abs(row.ytd).toLocaleString('en-US')}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter className={classes.tableFoot}>
                                <TableRow>
                                    <TableCell><Typography fontSize='0.875rem' color='#828282'><b>Net to bank</b></Typography></TableCell>
                                    <TableCell align='right'>
                                        <Typography fontSize='0.875rem'>
                                            <b>${getSumByKey(props.table, 'current').toLocaleString('en-US')}</b>
                                        </Typography>
                                    </TableCell>
                                    <TableCell align='right'>
                                        <Typography fontSize='0.875rem'>
                                            <b>${getSumByKey(props.table, 'ytd').toLocaleString('en-US')}</b>
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </Grid>
                </Grid>
            </Grid>
        // </Box>
    );
}

Summary.propTypes = {
  children: PropTypes.any
}

export default Summary;