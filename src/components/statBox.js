import { Box, useTheme, Typography} from "@mui/material";
import { token } from "../theme"
import ProgressCircle from "./progressCircle";

const StatBox=({title, subtitle,icon, progress,inc})=>{
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between" >
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{color:colors.grey[100]}} >{title}</Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" mt="2px">
                    <Typography variant="h5" fontWeight="bold" sx={{color:colors.greenAccent[500]}} >{subtitle}</Typography>
                    <Typography variant="h5" fontWeight="italic" sx={{color:colors.greenAccent[600]}} >{inc}</Typography>
                </Box>
            

        </Box>
    )
}

export default StatBox;