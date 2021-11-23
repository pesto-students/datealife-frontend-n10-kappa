import { StyledBody } from "../assets/styles/Common.styles";
import Header from "../components/header/Header";
import ChipStack from "../components/chip-stack/ChipStack";
import Layout from "../components/layout/Layout";

const Interests = (): JSX.Element => {
    return (
        <Layout
            hasDrawer
            headerProps={{
                text: "Interests",
            }}
        >
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
        </Layout>
    );
};

export default Interests;
