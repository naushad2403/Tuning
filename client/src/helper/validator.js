export const validateInput = (text) => {
  return text !== undefined && text.length > 0;
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password) => {
  const regex =
    /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
  return regex.test(password);
};

const validate = (type, data, key) => {
  const value = data[key];
  console.log("type s", type);
  switch (type) {
    case "required":
      const valid = value && value.length > 0;
      return { valid: valid, error: `${key} is required` };

    case "email":
      const isEmail = validateEmail(value);
      return {
        valid: isEmail,
        error: "invalid Email",
      };

    case "password":
      console.log("pass", validatePassword(value));
      return {
        valid: validatePassword(value),
        error:
          "Contains at least 1 number \nContains at least 1 special character\nContains at least 1 uppercase letter\nContains at least 1 lowercase letter",
      };

    default:
      return { valid: true, error: "" };
  }
};

export const performValidations = (fields, data) => {
  let errors = {};
  for (let key in data) {
    const fieldInfo = fields.find((item) => item.name === key);
    const validation = fieldInfo?.validation;
    console.log("vaidations", validation, fieldInfo);
    if (validation) {
      for (let type of validation) {
        const { valid, error } = validate(type, data, key);
        console.log("here", valid);

        errors[key] = !valid ? error : "";
        if (!valid) {
          break;
        }
      }
    }
  }

  return errors;
};
