import { ReactChild, ReactChildren } from "react";
import Box from "@mui/material/Box";

const styleProps = {
    width: "200px",
    height: "1px",
    background: "white",
    margin: "30px auto 10px",
    borderRadius: "15px"
};

const  Bar = (props: BarProps): JSX.Element => {
    return (
      <Box sx={styleProps} width={props.width} color={props.color}>
      </Box>
    );
};

interface BarProps {
    width?: string;
    color?: string;
}

export default Bar;
