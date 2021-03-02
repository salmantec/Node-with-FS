export const PROCESSED_RECORDS_TEMPLATE = {
  path: "Processed Records.csv",
  header: [
    { id: "First_name", title: "First_name" },
    { id: "Last_name", title: "Last_name" },
    { id: "PNR", title: "PNR" },
    { id: "Fare_class", title: "Fare_class" },
    { id: "Travel_date", title: "Travel_date" },
    { id: "Pax", title: "Pax" },
    { id: "Ticketing_date", title: "Ticketing_date" },
    { id: "Email", title: "Email" },
    { id: "Mobile_phone", title: "Mobile_phone" },
    { id: "Booked_cabin", title: "Booked_cabin" },
    { id: "Discount_code", title: "Discount_code" },
  ],
};

export const FAILED_RECORDS_TEMPLATE = {
  path: "Failed Records.csv",
  header: [
    { id: "First_name", title: "First_name" },
    { id: "Last_name", title: "Last_name" },
    { id: "PNR", title: "PNR" },
    { id: "Fare_class", title: "Fare_class" },
    { id: "Travel_date", title: "Travel_date" },
    { id: "Pax", title: "Pax" },
    { id: "Ticketing_date", title: "Ticketing_date" },
    { id: "Email", title: "Email" },
    { id: "Mobile_phone", title: "Mobile_phone" },
    { id: "Booked_cabin", title: "Booked_cabin" },
    { id: "Error", title: "Error" },
  ],
};

export const SUCCESS_MESSAGES = {
    FILE_CREATED: "csv file was written successfully"
};

export const FAILURE_MESSAGES = {
    EMAIL_INVALID: "Email invalid",
    MOBILE_NUMBER_INVALID: "Mobile number invalid",
    PNR_INVALID: "PNR invalid",
    TICKETING_DATE_INVALID: "Ticketing date is invalid",
    BOOKED_CABIN_INVALID: "Booked cabin is invalid" 
};

export const BOOKED_CABIN = ["Economy", "Business", "Premium Economy", "First"];

export const DISCOUNT_CODES = {
    OFFER_20: "OFFER_20",
    OFFER_30: "OFFER_30",
    OFFER_25: "OFFER_25"
};
