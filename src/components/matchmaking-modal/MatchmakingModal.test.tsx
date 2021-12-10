import { render, cleanup } from "@testing-library/react";
import MatchmakingModal, {MatchmakingModalProps} from "./MatchmakingModal";

describe("Match making modal", () => {
    const matchmakingModalProps = {matchMakingOpen: true} as MatchmakingModalProps;
    const component =   <MatchmakingModal {...matchmakingModalProps}/>;

    test("Match making modal renders", () => {
        const result = render(component);
        expect(result).not.toBeUndefined();
    });
    test("Has a cross button", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("cross-button")).not.toBeUndefined();
    });
    test("Has interest perncetage", () => {
        const {getByTestId} = render(component);
        expect(getByTestId("interest-percentage")).not.toBeUndefined();
    });
});
