export const fields = [
  {
    name: "email",
    label: "Email",
    validation: ["required", "email"],
  },
  {
    name: "password",
    label: "Password",
    validation: ["required", "password"],
  },
  {
    name: "confirm",
    label: "Confirm Password",
    validation: ["required"],
  },
];
