import { Typography, Stack, Grid, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ReactElement } from "react";
import { Modal, Boxed, Slider, ToggleButton, ToggleButtonGroup } from "..";
import { GENDER_VALUES, ORIENTATION_VALUES } from "../../const";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const MatchmakingFilterModal = (props: MatchmakingFilterModalProps): ReactElement => {
    return (
        <Modal modalOpen={props.filterOpen} toggleModal={props.toggleFilter} ariaLabel={"matchmaking filter modal"}>
            <Boxed>
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="back icon"
                                onClick={props.toggleFilter}>
                                <ArrowBackRoundedIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4} textAlign="center">
                            Filter
                        </Grid>
                        <Grid item xs={4} textAlign="right">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="apply icon"
                                onClick={props.applyFilter}>
                                <CheckRoundedIcon color="error" />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Boxed>
                        <Stack>
                            <Typography variant="subtitle1" mb={1}>
                                Gender
                            </Typography>
                            <ToggleButtonGroup
                                value={props.currentGender}
                                exclusive
                                onChange={props.handleGenderChange}
                                aria-label="gender select"
                            >
                                {GENDER_VALUES.map((gender, index) => {
                                    return (
                                        <ToggleButton
                                            value={gender.toLocaleLowerCase()}
                                            curved={index === 0 || index === GENDER_VALUES.length - 1}
                                            key={gender}
                                        >
                                            {gender}
                                        </ToggleButton>
                                    );
                                })}
                            </ToggleButtonGroup>
                        </Stack>
                    </Boxed>

                    <Boxed>
                        <>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">Age</Typography>
                                </Grid>
                                <Grid item xs={6} textAlign="right">
                                    <Typography variant="body2" color="warning">
                                        {props.sliderValue[0]} - {props.sliderValue[1]}{" "}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Slider
                                getAriaLabel={() => "Age range"}
                                value={props.sliderValue}
                                onChange={props.handleAgeSliderChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={props.valuetext}
                                min={18}
                                max={80}
                            />
                        </>
                    </Boxed>

                    <Boxed>
                        <FormControl fullWidth>
                            <InputLabel id="orientation-label" color="warning">
                                Orientation
                            </InputLabel>
                            <Select
                                labelId="orientation-label"
                                id="orientation-select"
                                value={props.currentOrientation}
                                label="orientation"
                                onChange={props.handleOrientationChange}
                                color="warning"
                            >
                                {ORIENTATION_VALUES.map((orientation) => {
                                    return (
                                        <MenuItem value={orientation.toLowerCase()} key={orientation}>
                                            {orientation}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Boxed>
                </>
            </Boxed>
        </Modal>
    );
};

export default MatchmakingFilterModal;

interface MatchmakingFilterModalProps {
    toggleFilter: () => void;
    filterOpen: boolean;
    applyFilter: () => void;
    currentGender: string;
    handleGenderChange: (event: React.MouseEvent<HTMLElement>, newGender: string) => void;
    sliderValue: number[];
    handleAgeSliderChange: (event: Event, newValue: number | number[], activeThumb: number) => void;
    valuetext: (value: number) => string;
    currentOrientation: string;
    handleOrientationChange: (event: SelectChangeEvent) => void;
}
