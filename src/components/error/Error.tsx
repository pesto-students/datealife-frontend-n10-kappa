import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import NotAccessibleIcon from "@mui/icons-material/NotAccessible";

const iconStyles = {fontSize: "70px", marginBottom: "20px"};

export default function Error(props: ErrorProps): JSX.Element {
    return (
        <Box sx={{ flexGrow: 1, textAlign: "center", padding: "60px 0" }}>
            {props.matchError ? <ErrorIcon sx={iconStyles}/> : <NotAccessibleIcon  sx={iconStyles} />}
            <Typography variant="h6" component="div" color="secondary" sx={{ marginBottom: "7px" }} fontStyle="bold">
                {props.errorHeading}
            </Typography>
            <Typography variant="body2" component="div" color="gray" fontStyle="italic" >
                {props.errorsubText}
            </Typography>
        </Box>
    );
}

interface ErrorProps {
    errorHeading: string;
    errorsubText: string;
    matchError?: boolean;
}
