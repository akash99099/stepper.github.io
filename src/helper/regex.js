export const REGEX =   {
    NAME_REGEX : /^[a-zA-Z]{0,40}([a-zA-Z]{0,40})+$/,
    EMAIL_REGEX:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    NUMBER_REGEX: /^\d+$/,
    PANCARD_NUMBER_REGEX: /^[A-Z]{5}[0-9]{4}[A-Z]{1}/,
}