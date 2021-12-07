import { render, cleanup, fireEvent } from "@testing-library/react";
import InvitesModal, {InvitesModalProps} from "./InvitesModal";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";

describe("Invites modal component", () => {
    afterEach(cleanup);
    const inviteProps = {inviteModalOpen: true} as InvitesModalProps;
    test("Renders invites modal component", () => {
        const result = render(<InvitesModal {...inviteProps}/>);
        expect(result).not.toBeUndefined();
    });

    test("Displays food item section", () => {
        inviteProps.pageNumber = 0;
        inviteProps.itemData = [];
        const {getByTestId} = render(<InvitesModal {...inviteProps}/>);
        expect(getByTestId("food-section")).not.toBeUndefined();
    });

    test("Displays calendar screen", () => {
        inviteProps.pageNumber = 1;
        const {getByTestId} = render(<LocalizationProvider dateAdapter={DateAdapter}><InvitesModal {...inviteProps}/></LocalizationProvider>);
        expect(getByTestId("calendar-section")).not.toBeUndefined();
    });

    test("Cross button exists", () => {
        inviteProps.pageNumber = 0;
        const {getByTestId} = render(<InvitesModal {...inviteProps}/>);
        expect(getByTestId("cross-button")).not.toBeUndefined();
    });

    test("apply button exists", () => {
        inviteProps.pageNumber = 1;
        const {getByTestId} = render(<LocalizationProvider dateAdapter={DateAdapter}><InvitesModal {...inviteProps}/></LocalizationProvider>);
        expect(getByTestId("apply-button")).not.toBeUndefined();
    });

    test("Cross button calls cross button function", () => {
        const backFunction = jest.fn();
        inviteProps.toggleInviteModal = backFunction;
        inviteProps.pageNumber = 0;
        const {getByTestId} = render(<InvitesModal {...inviteProps}/>);
        fireEvent.click(getByTestId("cross-button"));
        expect(backFunction).toHaveBeenCalledTimes(1);
    });

    test("Displays invites success screen", () => {
        inviteProps.pageNumber = 2;
        const {getByTestId} = render(<InvitesModal {...inviteProps}/>);
        expect(getByTestId("invites-section")).not.toBeUndefined();
    });

});
