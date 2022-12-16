import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Typography,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  Box,
 } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { makeStyles } from '@mui/styles';

//styles
const useStyles = makeStyles({
    table: { marginLeft:'16px', '& th, & td': {color:'#828282', paddingTop:'4px !important', paddingBottom:'4px !important' }},
    tableBody: { "& td, & th": { border: 0},},
    tableRowGreen: {
        "& td, th": {
        color:'#219653 !important'
      }}
});


const StockTable = ( props ) => {

    const classes = useStyles();

    const getSumByKey = (arr, key) => {
        return arr.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
    }

    return (
        <Box width='100%' sx={{border:0}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Completed</TableCell>
                                    <TableCell align="right">Taskes done</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.tableBody}>
                                {props.table.map((row, index) => (
                                    <TableRow className={`${new Date(row.Date).getTime() < new Date(new Date().toISOString().slice(0, 10)).getTime() && classes.tableRowGreen}`} key={index}>
                                        <TableCell component="th" scope="row">{row.Id}</TableCell>
                                        <TableCell align="right">{row.Date}</TableCell>
                                        <TableCell align="right">
                                            {
                                            row.Completed===1 && 
                                                <CheckIcon fontSize='0.875rem'/> ||
                                                <ClearIcon fontSize='0.875rem'/>
                                            }
                                        </TableCell>
                                        <TableCell align="right">{row.TasksDone}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Grid item xs={12}>
                            <Grid container px={2}>
                                <Typography fontSize='0.875rem' flexGrow='1' ><b>Total</b></Typography>
                                <Typography fontSize='0.875rem' width='50%' align="right">
                                    <b>{getSumByKey(props.table, 'TasksDone').toLocaleString('en-US')}</b>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

StockTable.propTypes = {
  children: PropTypes.any
}

export default StockTable;