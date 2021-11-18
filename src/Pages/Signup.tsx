import DateALifeLogo from "../assets/images/logoDateALife.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {  Div,
        LogoDiv,
        LogoImg,
        LogoText,
        PrivacyText,
        FooterText } from "../assets/styles/Styles";
import { SignupButton } from "../assets/styles/Button";

const SignUp = () : JSX.Element  => {
    return (
        <Div>
            <LogoDiv>
                <LogoImg src={DateALifeLogo}  alt="logo" />
            </LogoDiv>
            <LogoText>Date A Life</LogoText>

            <PrivacyText>
                By clicking Sign Up, you agree with our Terms. Learn how we process your data in our <a href="#">Privacy Policy</a> and Cookies Policy.
            </PrivacyText>

            <SignupButton variant="contained" startIcon={<GoogleIcon color="warning" /> } color="inherit">
                Signup with google
            </SignupButton>

            <SignupButton variant="contained" startIcon={<FacebookRoundedIcon color="info" fontSize="large" /> } color="inherit">
                Signup with facebook
            </SignupButton>

            <SignupButton variant="contained" startIcon={<LocalPhoneIcon color="secondary" />} color="inherit">
                Signup with number
            </SignupButton>

            <FooterText>
                Have an account? <strong><a href="/login">Login</a></strong>
            </FooterText>
        </Div>
    );
};

export default SignUp;


