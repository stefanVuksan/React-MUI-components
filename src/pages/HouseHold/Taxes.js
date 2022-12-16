import * as React from "react";
import { Container, Grid, Link, Stack, styled, Typography } from "@mui/material"
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { BoxPanel, PriceLabel, PriceValue, TypoItem } from "../../style/styledComponents";
import Gauge from "../../components/Gauge";
import Employer from "../../components/Employer";
import HeatMap from "../../components/HeatMap";
import Title from "../../components/Title";
import Quarterly from "../../components/Quarterly";
import ToolTip from "../../components/ToolTip";


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

const Taxes = (props) => {

    return(
        <Grid container spacing={2} mb={15}>
            <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color='#333333' fontSize={24} lineHeight="29px" fontWeight="bold">2022 Taxes</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={0}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Stack direction='column' spacing={1}>
                                <PriceLabel>{props.TotalTaxes[0].title}</PriceLabel>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Typography fontSize={48} lineHeight="58px">${props.TotalTaxes[0].value.toLocaleString('US-en')}</Typography>
                                    <HtmlTooltip
                                        title={
                                        <React.Fragment>
                                            <ToolTip {...props.ToolTipProps} />
                                        </React.Fragment>
                                        }
                                    >
                                        <InfoOutlinedIcon sx={{fontSize:"24px", cursor:'pointer'}} />
                                    </HtmlTooltip>
                                </Stack>
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <PriceLabel>{props.TotalTaxes[1].title}</PriceLabel>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Typography fontSize={48} lineHeight="58px">{props.TotalTaxes[1].value}%</Typography>
                                    <HtmlTooltip
                                        title={
                                        <React.Fragment>
                                            <ToolTip {...props.ToolTipProps} />
                                        </React.Fragment>
                                        }
                                    >
                                        <InfoOutlinedIcon sx={{fontSize:"24px", cursor:'pointer'}} />
                                    </HtmlTooltip>
                                </Stack>
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <PriceLabel>{props.TotalTaxes[2].title}</PriceLabel>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Typography fontSize={48} lineHeight="58px">${props.TotalTaxes[2].value.toLocaleString('US-en')}</Typography>
                                    <HtmlTooltip
                                        title={
                                        <React.Fragment>
                                            <ToolTip {...props.ToolTipProps} />
                                        </React.Fragment>
                                        }
                                    >
                                        <InfoOutlinedIcon sx={{fontSize:"24px", cursor:'pointer'}} />
                                    </HtmlTooltip>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <HeatMap {...props.HeatMapProps} />
                    </Grid>
                    <Grid item xs={12}>
                        <Title {...props.TaxesWageIncome} />
                    </Grid>
                    <Grid item xs={12}>
                        <BoxPanel p={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Stack direction='row' spacing={2} className="align-items-center">
                                        <TypoItem variant="subtitle2">{props.TaxesInvestmentIncome.title}</TypoItem>
                                        <Stack direction='row' flexGrow='1' pt='5px'>
                                            <Stack direction='row' spacing='5px'>
                                                <Typography fontSize='0.75rem' lineHeight="14.52px" color="#828282">
                                                Last updated {props.TaxesInvestmentIncome.updated} days ago ·
                                                </Typography>
                                            </Stack>
                                            <Stack direction='row' color='#828282' >
                                                <Link color='#828282' className='cursor text-decoration-gray' display='flex' >
                                                    <RefreshOutlinedIcon fontSize="9px" />
                                                    <Typography fontSize='0.75rem' lineHeight="15px">
                                                        Update
                                                    </Typography>
                                                </Link>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    {props.TaxesInvestmentIncome.data.map((list, index)=>(
                                    <Grid item xs md={3} key={index}>
                                        <Grid container spacing="4px">
                                        <Grid item xs={12}>
                                            <PriceLabel>{list.title}</PriceLabel>
                                        </Grid>
                                        <Grid container item xs={12} spacing={1} alignItems="center">
                                            <Grid item>
                                            {
                                                list.value < 0 &&
                                                (
                                                <PriceValue sx={{color:'#EB5757'}}>-${Math.abs(list.value).toLocaleString('en-US')}</PriceValue>
                                                ) ||
                                                (
                                                <PriceValue>${list.value.toLocaleString('en-US')}</PriceValue>
                                                )
                                            }
                                            </Grid>
                                            <Grid item>
                                            {
                                                list.info === 1 && 
                                                (
                                                    <InfoOutlinedIcon sx={{fontSize:"18px"}} />
                                                )
                                            }
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            {
                                            list.subtitle !=='' &&
                                            (
                                            <PriceLabel>{list.subtitle[0]} ${list.subtitle[1].toLocaleString('en-US')}</PriceLabel>
                                            ) || (
                                            <PriceLabel><br/></PriceLabel>
                                            )
                                            }
                                        </Grid>
                                        </Grid>
                                    </Grid>
                                    ))}
                                </Grid>
                                </Grid>
                            </Grid>
                        </BoxPanel>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography color='#333333' fontSize={24} lineHeight="29px" fontWeight="bold">Estimated Tax Payments</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={0}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Stack direction='column' spacing={1}>
                                <PriceLabel>{props.Underwithheld.title}</PriceLabel>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <Typography fontSize={48} lineHeight="58px">${props.Underwithheld.value.toLocaleString('US-en')}</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Quarterly {...props.QuarterlyProps} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Taxes