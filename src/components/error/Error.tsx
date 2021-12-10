import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import DoNotTouchOutlinedIcon from "@mui/icons-material/DoNotTouchOutlined";
import { Boxed } from "..";
import { Stack } from "@mui/material";

const iconStyles = {fontSize: "100px", marginBottom: "30px"};

export default function Error(props: ErrorProps): JSX.Element {
    return (
        <Boxed>
            <Stack alignItems="center" mt={8}>
                {!props.matchError ? <ErrorIcon sx={iconStyles}/> : <DoNotTouchOutlinedIcon  sx={iconStyles} />}
                <Typography variant="h4" component="div" color="secondary" mb={2} fontStyle="bold" textAlign="center" data-testid="error-heading">
                    {props.errorHeading}
                </Typography>
                <Typography variant="body1" component="div" color="gray" fontStyle="italic" textAlign="center" data-testid="error-description">
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
