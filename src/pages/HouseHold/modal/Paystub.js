import * as React from "react";
import { Box, Button, Container, Divider, Grid, Stack, Typography } from "@mui/material"
import Details from "../../../components/Details"
import { StyledTab, StyledTabs, TabPanel } from "../../../style/styledComponents"
import Category from "../../../components/Category";
import Summary from "../../../components/Summary";

import AddIcon from "@mui/icons-material/Add";

const btnCancel = {
    border: "1px solid gray !important",
    color: "gray !important",
    marginRight: "12px !important",
    textTransform: "none !important",
}

const btnSave = {
    border: "1px solid #2F80ED !important",
    textTransform: "none !important",
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    minHeight: '90%',
    bgcolor: '#fff',
    // boxShadow: 24,
    outline:0,
};

const SummaryProps = {
    title:'Paystub Summary',
    table: [
        {
        category: "Total wage income",
        current: 12280.83,
        ytd: 347544.18,
        },
        {
        category: "Pre-tax deductions",
        current: -1016.96,
        ytd: -4067.84,
        },
        {
        category: "Post-tax dedutions",
        current: -1514.8,
        ytd: -148629.97,
        },
        {
        category: "Empoloyee tax deductions",
        current: -3209.39,
        ytd: -169737.59,
        },
    ],
};
    
const Paystub = React.forwardRef(() => {
    
    const [value, setValue] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const [DetailsProps, setDetailsProps] = React.useState({
        member: {
        value: "Jenny Thompson",
        options: ["Jenny Thompson", "Benny Thompson"],
        },
        company: {
        value: "Google",
        options: ["Google"],
        },
        frequency: {
        value: "Twice a month",
        options: ["Twice a month"],
        },
        type: {
        value: "Regular",
        options: ["Regular"],
        },
        handleChange: (e) => {
            DetailsProps[e.target.name].value = e.target.value;
            setDetailsProps({ ...DetailsProps });
        }
    });
    
    const [CategoryProps, setCategoryProps] = React.useState({
        category: {
        value: "Type 1",
        options: ["Type 1", "Type 2", "Type 3"],
        },
        description: { value: "Desciption" },
        recurring: {
        value: "Recurring",
        options: ["Recurring"],
        },
        currentAmount: { value: 33.65 },
        YTDAmount: { value: 135.8 },
        handleChange: (e) => {
            CategoryProps[e.target.name].value = e.target.value;
            setCategoryProps({ ...CategoryProps });
        },
    });

    return (
        <Box sx={style}>
            <Grid item xs={12} sx={{width:'100%'}}>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={0}
                    height="90vh"
                >
                    <Box width='70%' height={'100% !important'}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Details title="Paystub" {...DetailsProps} />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Container>
                                    <StyledTabs
                                    onChange={handleTabChange}
                                    value={value}
                                    textColor="inherit"
                                    >
                                    <StyledTab label="Income" />
                                    <StyledTab label="Equity" />
                                    <StyledTab label="Taxes"/>
                                    </StyledTabs>
                                    <Divider sx={{my:'20px'}} />
                                    <TabPanel value={value} index={0}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Category {...CategoryProps} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    sx={{
                                                        fontSize: "12px",
                                                        padding: "8px",
                                                        border: "1px dashed #BDBDBD",
                                                        justifyContent: 'start',
                                                        color: '#828282',
                                                        textTransform: 'none'
                                                    }}>
                                                    <AddIcon sx={{ color: '#828282' }} />
                                                    <Typography>Add Item</Typography>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <Typography>assdfdf</Typography>
                                    </TabPanel>
                                    <TabPanel value={value} index={2}>
                                        <Typography>as23df</Typography>
                                    </TabPanel>
                                    </Container>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box width="30%" p={3}>
                        <Summary {...SummaryProps} />
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} sx={{position:'absolute', bottom:'0px', top:'auto', width:'100%', bgcolor:'white'}}>
              <Divider />
              <Container>
                <Grid container justifyContent='end' py={4}>
                  <Button className=''>
                    Cancel
                  </Button>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    className=''
                    // onClick={() => props.onSave()}
                  >
                    Save
                  </Button>
                </Grid>
              </Container>
            </Grid>
        </Box>
    )
})

export default Paystub