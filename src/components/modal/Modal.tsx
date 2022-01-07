import { StyledDialog } from "./Modal.styles";
import { forwardRef, ReactChild, ReactChildren } from "react";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

const  Modal = (props: ModalProps): JSX.Element => {
    return (
        <StyledDialog
            open={props.modalOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={props.toggleModal}
            aria-describedby={props.ariaLabel}
            fullWidth={true}
            maxWidth={"xs"}
            fullScreen
            style={{
                height: "max-content",
            }}>
            {props.children}
        </StyledDialog>
    );
};

export interface ModalProps {
    toggleModal: () => void;
    modalOpen: boolean;
    ariaLabel: string;
    children: ReactChild | ReactChildren;
}


export default Modal;
