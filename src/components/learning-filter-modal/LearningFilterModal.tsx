import { Grid, IconButton, Typography } from "@mui/material";
import { ReactElement } from "react";
import { Modal, Boxed, ToggleButtonGroup, ToggleButton } from "..";
import { GENDER_VALUES } from "../../const";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const LearningFilterModal = (props: LearningFilterModalProps): ReactElement => {
    return (
        <Modal modalOpen={props.filterOpen} toggleModal={props.toggleFilter} ariaLabel={"learning filter modal"}>
            <Boxed>
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="back icon"
                                onClick={props.toggleFilter}
                                data-testid="cross-button">
                                <ArrowBackRoundedIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} textAlign="center" data-testid="filter-text">
                            Filter
                        </Grid>
                        <Grid item xs={4} textAlign="right">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="apply icon"
                                onClick={props.applyFilter}
                                data-testid="apply-button">
                                <CheckRoundedIcon color="error" />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Boxed>
                        <>
                            <Typography variant="subtitle1" mb={2}>Gender</Typography>
                            <ToggleButtonGroup
                                value={props.currentGender}
                                exclusive
                                onChange={props.handleGenderChange}
                                data-testid="button-group">
                                {GENDER_VALUES.map((gender, index) => {
                                    return (<ToggleButton value={gender.toLocaleLowerCase()} curved={index === 0 || index === GENDER_VALUES.length -1} key={index}>
                                                {gender}
                                            </ToggleButton>);
                                })}
                            </ToggleButtonGroup>
                        </>
                    </Boxed>
                </>
            </Boxed>
        </Modal>
        );
    };

export default LearningFilterModal;

export interface LearningFilterModalProps {
    toggleFilter: () => void;
    filterOpen: boolean;
    applyFilter: () => void;
    currentGender: string;
    handleGenderChange: (event: React.MouseEvent<HTMLElement>, newGender: string) => void;
}
