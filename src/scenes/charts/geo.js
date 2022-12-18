import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { token } from "../../theme";

const Geo=()=>{
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return(
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} >
                <GeographyChart/>
            </Box>

        </Box>
    )
}

export default Geo;