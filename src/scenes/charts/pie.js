import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart"
import { token } from "../../theme";

const Pie=()=>{
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return(
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChart/>
            </Box>

        </Box>
    )
}

export default Pie;