import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { token } from "../../theme";

const Line=()=>{
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return(
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <LineChart/>
            </Box>

        </Box>
    )
}

export default Line;