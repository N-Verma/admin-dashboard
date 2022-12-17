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
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const titlesarr = ["Dashboard", "Manage Team","Contact Information","Invoices Balance","Profile Form","Calender","FAQ Page","Bar Chart",
"Pie Chart","Line Chart","Geography Chart"];
const linkarr=["/","/team","/contacts","/invoices","/profile","/calendar","/faq","/bar","/line","/pie","/geography"]
const iconarr=[<HomeOutlinedIcon/>,<PeopleOutlinedIcon/>,<ContactsOutlinedIcon/>,<ReceiptOutlinedIcon/>,<PersonOutlineOutlinedIcon/>,
<CalendarTodayOutlinedIcon/>,<HelpOutlineOutlinedIcon/>,<BarChartOutlinedIcon/>,<PieChartOutlineOutlinedIcon/>,<TimelineOutlinedIcon/>,
<MapOutlinedIcon/>]


const items=(i,j,selected,setSelected)=>{
    const arr=[]
    for(var k=i;k<=j;k++){
        arr.push(
            <Item title={titlesarr[k]} to={linkarr[k]} icon={iconarr[k]} selected={selected} 
                                setSelected={setSelected} />
        )
    }
    return arr;
}

const Item=({key,title, to, icon,selected,setSelected})=>{
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return(
        <>
        {console.log(key)}
        {key===0 && <Typography> Data </Typography>}
        <MenuItem active={selected===title}
            style={{color:colors.grey[100]}}
            onClick={()=>setSelected(title)}
            icon={icon}
            
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
        </>
    )
}

const Sidebar=()=>{
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

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
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO */}
                    <MenuItem
                    onClick={()=>setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed?<MenuOutlinedIcon/>:undefined}
                    style={{
                        margin:"10px 0 20px 0",
                        color:colors.grey[100]
                    }}
                    >
                         {!isCollapsed && (
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                          >
                            <Typography variant="h3" color={colors.grey[100]}>
                              ADMIN
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                              <MenuOutlinedIcon />
                            </IconButton>
                          </Box>
                        )}
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
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m:"10px 0 0 0"}}> 
                                Hunter </Typography>
                                <Typography variant="h5" color={colors.grey[500]}> Love sex doka </Typography>
                            </Box>
                        </Box>
                    )}
                    {/* USER ITEM */}
                    <Box paddingLeft={isCollapsed?undefined:"10%"}>
                        <Item 
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}> Data  </Typography>
                        {items(1,3,selected,setSelected)}

                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}> Pages  </Typography>
                        {items(4,6,selected,setSelected)}

                        <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}> Charts </Typography>
                        {items(7,10,selected,setSelected)}
                        
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar;