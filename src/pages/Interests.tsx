import { StyledBody } from "../assets/styles/Common.styles";
import Header from "../components/header/Header";
import ChipStack from "../components/chip-stack/ChipStack";

const Interests = (): JSX.Element => {
    return (
        <>
            <Header
                text={"Interests"}
                backFunction={() => {
                    alert("Moving back");
                }}
            />
            <StyledBody>
                <ChipStack
                    chips={[
                        { label: "Dancing", value: "dancing" },
                        { label: "Singing", value: "singing" },
                        { label: "Reading", value: "reading" },
                        { label: "Playing", value: "playing" },
                        { label: "Trekking", value: "trekking" },
                        { label: "Cricket", value: "cricket" },
                        { label: "Football", value: "football" },
                    ]}
                />
            </StyledBody>
        </>
    );
};

export default Interests;
