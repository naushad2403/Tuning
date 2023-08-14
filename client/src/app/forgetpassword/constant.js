export const fields = [
  {
    name: "email",
    label: "Email",
    validation: ["required", "email"],
  },
  {
    name: "newPassword",
    label: "Password",
    validation: ["required", "password"],
  },
  {
    name: "confirmationCode",
    label: "Confirmation Code",
    validation: ["required"],
  },
];
