
import { ReactChild, ReactChildren } from "react";
import Box from "@mui/material/Box";

const  Boxed = (props: BoxedProps): JSX.Element => {
    return (
      <Box sx={{padding: "20px 40px"}}>
        {props.children}
      </Box>
    );
};

interface BoxedProps {
    children: ReactChild | ReactChildren;
}


export default Boxed;
