import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarCharts";
import { token } from "../../theme";

const Bar=()=>{
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return(
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box height="75vh">
                <BarChart/>
            </Box>

        </Box>
    )
}

export default Bar;