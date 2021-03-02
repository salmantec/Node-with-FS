import { BOOKED_CABIN, DISCOUNT_CODES, FAILURE_MESSAGES } from "./constants";

// Set discountCode based on the "Fare_class"
export const setDiscountCode = (row) => {
  let discountCode;
  switch (true) {
    case ["A", "B", "C", "D", "E"].includes(row["Fare_class"]):
      discountCode = DISCOUNT_CODES.OFFER_20;
      break;
    case ["F", "G", "H", "I", "J", "K"].includes(row["Fare_class"]):
      discountCode = DISCOUNT_CODES.OFFER_30;
      break;
    case ["L", "M", "N", "O", "P", "Q", "R"].includes(row["Fare_class"]):
      discountCode = DISCOUNT_CODES.OFFER_25;
      break;
    default:
      break;
  }
  return discountCode;
};

// Checks every row in the CSV with below validation function
export const checkValidations = (row) => {
  const errorStrings = [];

  // regex for validate EMail and PNR
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexPnr = /^[a-zA-Z0-9\b]{6}$/;

  switch (true) {
    case !regexEmail.test(row["Email"]):
      errorStrings.push(FAILURE_MESSAGES.EMAIL_INVALID);
      break;
    case row["Mobile_phone"].length !== 10:
      errorStrings.push(FAILURE_MESSAGES.MOBILE_NUMBER_INVALID);
      break;
    case !regexPnr.test(row["PNR"]):
      errorStrings.push(FAILURE_MESSAGES.PNR_INVALID);
      break;
    case row["Ticketing_date"] >= row["Travel_date"]:
      errorStrings.push(FAILURE_MESSAGES.TICKETING_DATE_INVALID);
      break;
    case !BOOKED_CABIN.includes(row["Booked_cabin"]):
      errorStrings.push(FAILURE_MESSAGES.BOOKED_CABIN_INVALID);
      break;
    default:
      break;
  }
  return errorStrings;
};
