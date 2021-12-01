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
export const API_BASE_URL =
    process.env.NODE_ENV !== "development"
        ? "https://us-central1-date-a-life.cloudfunctions.net/api"
        : "http://localhost:5001/date-a-life/us-central1/api";
