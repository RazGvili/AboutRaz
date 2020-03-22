import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import RowingOutlinedIcon from '@material-ui/icons/RowingOutlined'; 
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import BatteryChargingFullOutlinedIcon from '@material-ui/icons/BatteryChargingFullOutlined';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
            background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);",
            fontSize: '16px',
            fontWeight: '600'
        },
        '& > *:hover': {
            margin: theme.spacing(0.5),
            background: "linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);",
        }
    },
}));

export default function Chips() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Chip
            icon={<WbIncandescentOutlinedIcon />}
            label="Critical Thinking"
            />

            <Chip
            icon={<BarChartOutlinedIcon />}
            label="Analytical Skills"
            />

            <Chip
            icon={<WhatshotOutlinedIcon />}
            label="‘can do’ attitude"
            />

            <Chip
            icon={<BatteryChargingFullOutlinedIcon />}
            label="highly-motivated"
            />

            <Chip
            icon={<RowingOutlinedIcon />}
            label="Leadership & Teamwork"
            />



        </div>
    );
}