const csv = require("csv-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");
const {
  PROCESSED_RECORDS_TEMPLATE,
  FAILED_RECORDS_TEMPLATE,
  SUCCESS_MESSAGES,
} = require("./constants");
const {
  setDiscountCode,
  checkValidations,
} = require("./utils");

// Initialize csv writer for processed and failed
const processedCsvWriter = createCsvWriter(PROCESSED_RECORDS_TEMPLATE);
const failedCsvWriter = createCsvWriter(FAILED_RECORDS_TEMPLATE);

// Declare variables
const processedDataSets = [];
const failedDataSets = [];

// Read the input CSV file using createReadStream
fs.createReadStream("data.csv")
  .pipe(csv())
  .on("data", (row) => {
    const validationResult = checkValidations(row);
    if (validationResult.length === 0) {
      const discountCode = setDiscountCode(row);
      processedDataSets.push(
        discountCode ? { ...row, Discount_code: discountCode } : row
      );
    } else {
      failedDataSets.push({ ...row, Error: validationResult.join(", ") });
    }
  })
  .on("end", () => {
    processedDataSets &&
      processedCsvWriter
        .writeRecords(processedDataSets)
        .then(() => console.log(`Processed record's ${SUCCESS_MESSAGES.FILE_CREATED}`));
    failedDataSets &&
      failedCsvWriter
        .writeRecords(failedDataSets)
        .then(() => console.log(`Failed record's ${SUCCESS_MESSAGES.FILE_CREATED}`));
	});