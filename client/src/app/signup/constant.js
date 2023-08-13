export const fields = [
  {
    name: "name",
    label: "Name",
    validation: ["required"],
  },
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
