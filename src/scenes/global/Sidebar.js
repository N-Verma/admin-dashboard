import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { token } from "../../theme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Sidebar=()=>{
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return(
        <Box
            sx={{
                "& .pro-sidebar-inner":{
                    background:`${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper":{
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item":{
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover":{
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active":{
                    color: "#6870fa !important"
                },
            }}
        >
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem>
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed &&(
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile"
                                    width="100px"
                                    height="100px"
                                    src= {`../../../public/assets/user.png`}
                                    style={{cursor:"pointer", borderRadius:"50%"}}
                                />
                            </Box>
                            <Box>
                                <Typography> Hunter </Typography>
                                <Typography> Love sex doka </Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar;