import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import NotAccessibleIcon from "@mui/icons-material/NotAccessible";
import { Boxed } from "..";
import { Stack } from "@mui/material";

const iconStyles = {fontSize: "100px", marginBottom: "30px"};

export default function Error(props: ErrorProps): JSX.Element {
    return (
        <Boxed>
            <Stack alignItems="center" mt={4}>
                {!props.matchError ? <ErrorIcon sx={iconStyles}/> : <NotAccessibleIcon  sx={iconStyles} />}
                <Typography variant="h4" component="div" color="secondary" mb={2} fontStyle="bold">
                    {props.errorHeading}
                </Typography>
                <Typography variant="body1" component="div" color="gray" fontStyle="italic" >
                    {props.errorsubText}
                </Typography>
            </Stack>
        </Boxed>
    );
}

interface ErrorProps {
    errorHeading: string;
    errorsubText: string;
    matchError?: boolean;
}
