import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { token } from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accord = (colors)=>{
    let td=[];
    for(var i=0;i<4;i++){
        td.push(
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                    <Typography color={colors.greenAccent[500]} variant="h5"  >
                        One important question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        )
    }
    return td;
}

const Faq = ()=>{
    const theme = useTheme();
    const colors = token(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently asked questions" />
            {/* <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                    <Typography color={colors.greenAccent[500]} variant="h5"  >
                        One important question
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </AccordionDetails>
            </Accordion> */}
            {accord(colors)}
        </Box>
    )
}

export default Faq;
