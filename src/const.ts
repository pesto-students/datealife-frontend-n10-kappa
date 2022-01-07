export const PRIMARY_COLOR = "#9B8AF4";
export const SECONDARY_COLOR = "#F66699";
export const ERROR_COLOR = "#F56E65";
export const INFO_COLOR = "#00B1CD";
export const SUCCESS_COLOR = "#29AE62";
export const DEFAULT_TEXT_COLOR = "#474747";
export const WHITE_TEXT_COLOR = "#FFFFFF";
export const WARNING_COLOR = "#DC823A";
export const GENDER_VALUES = ["Male", "Female", "No Filter"];
export const ORIENTATION_VALUES = ["Straight", "Gay/Lesbian", "Bisexual", "Pansexual", "Transexual"];
export const CURRENT_LEARNING_KEY = "currentLearning";
export const INTERESTS_VALUES = [
    { label: "Dancing", value: "dancing" },
    { label: "Singing", value: "singing" },
    { label: "Reading", value: "reading" },
    { label: "Playing", value: "playing" },
    { label: "Trekking", value: "trekking" },
    { label: "Cricket", value: "cricket" },
    { label: "Football", value: "football" },
    { label: "Martial arts", value: "martial arts" },
    { label: "Piano", value: "piano" },
    { label: "Guitar", value: "guitar" },
    { label: "Table tennis", value: "table tennis" },
    { label: "Carrom", value: "carrom" },
    { label: "Card games", value: "card games" },
    { label: "Programming", value: "programming" },
    { label: "Workout", value: "workout" },
    { label: "Kite flying", value: "kite flying" },
    { label: "Knitting", value: "knitting" },
    { label: "Cooking", value: "cooking" },
    { label: "Designing", value: "designing" },
    { label: "Walking", value: "walking" },
];
export const LISTING_TABS = [
    {
        label: "Likes",
        value: "likes",
    },
    {
        label: "Matches",
        value: "matches",
    },
    {
        label: "Invites",
        value: "invites",
    },
];
export const COMETCHAT_CONSTANTS = {
    APP_ID: "199841cdb8ea703b",
    REGION: "us",
    AUTH_KEY: "edba1aed180ff5fa4f5d76566d37fcabef0966dd",
};
export const API_BASE_URL =
    process.env.NODE_ENV !== "development"
        ? "https://us-central1-date-a-life.cloudfunctions.net/api"
        : "http://localhost:5001/date-a-life/us-central1/api";
