import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  OutlinedInput,
  NativeSelect,
  Box,
  Tab,
  Tabs,
  Select,
} from "@mui/material";
import NumberFormat from 'react-number-format';

export const BoxPanel = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    border: "1px solid #BDBDBD",
    borderRadius: "4px",
    textAlign: "left",
    color: theme.palette.text.secondary,
    elevation: 0,
}));

export const GrayBoxPanel = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#E0E0E0',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    elevation: 0
}));

export const TypoItem = styled(Typography)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    fontSize:"1.25rem",
    padding: theme.spacing(0, 0),
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    fontWeight: '700'
}));

export const PriceLabel = styled(Typography)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(0, 0),
    textAlign: "left",
    color: theme.palette.text.secondary,
    fontWeight: "light",
    fontSize: "12px",
    height:'24px',
    alignItems:'end',
    display:'flex'
}));

export const PriceValue = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? '#fff' : '#333333',
    fontWeight: '400',
    fontSize: '2rem',
    lineHeight:'38.73px'
}));

export const StockInput = styled(OutlinedInput)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    fontSize: "1rem",
    width: "100%",
    "> input": {
        padding: "6px 8px 6px 8px",
    },
}));

export const StockTableInput = styled(OutlinedInput)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    fontsize:'14px',
    direction:'rtl',
    width:'100%',
    "> input": {
        padding: '6px 8px 6px 8px',
    }
}));

export const StockSelect = styled(NativeSelect)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    width: "100%",
    fontSize: "16px",
    "> select": {
        padding: "6px 8px 6px 8px",
    },
}));

export const StockSelectCurrent = styled(Select)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    width: "100%",
    fontSize: "16px",
    "> select": {
        padding: "6px 8px 6px 8px",
    },
}));

export const AvatarTypo = styled(Typography)(({ theme }) => ({
    backgroundColor: '#E0E0E0',
    ...theme.typography.body2,
    fontSize:"12px",
    padding: theme.spacing(0, 0),
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    width:'32px',
    height:'32px',
    borderRadius:'50%', 
    justifyContent:'center', 
    alignItems:'center', 
    display:'flex',
}));

export const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
      />
    );
});

export const PriceNumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
});


export const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiButtonBase-root': {
      padding:0,
      paddingBottom:'2px',
      minHeight:'0px !important',
      minWidth:'0px !important'
  },
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height:'1px'
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 60,
    width: '100%',
    backgroundColor: '#000',
  },
  minHeight:'0px !important'
});

export const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(16),
    marginRight: theme.spacing(4),
    color: '#000',
    '&.Mui-selected': {
      fontWeight:'700'
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

export const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
            <>
            {children}
            </>
        )}
      </div>
    );
}