export const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    validation: ["required"],
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    validation: ["required", "email"],
  },
  {
    name: "password",
    label: "Password",
    type: "text",
    validation: ["required", "password"],
  },
  {
    name: "confirm",
    label: "Confirm Password",
    type: "text",
    validation: ["required"],
  },
];
