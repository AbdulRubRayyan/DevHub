const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text is required";
  }

  if (!Validator.isLength(data.text, { min: 4, max: 500 })) {
    errors.text = "Post must be between 4 and 500 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
