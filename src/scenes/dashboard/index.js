import { Box } from "@mui/material"
import Header from "../../components/Header";
import BarChart from "../../components/BarCharts";


const Dashboard=()=>{
    return(
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <Header title="DASHBOARD" subtitle="Welcome Pleb" />
                
            </Box>
            <Box height="45vh">
                <BarChart/>
            </Box>
        </Box>
    )
}

export default Dashboard;