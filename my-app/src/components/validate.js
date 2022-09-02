export const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) {
    errors.name = "Username is Required";
  } else {
    delete errors.name;
  }
  if (!data.email) {
    errors.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }
  if (!data.password) {
    errors.password = "Password is Required";
  } else if (data.password.length < 6) {
    errors.password = "Password needs to be 6 charecter or more";
  } else {
    delete errors.password;
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm the password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Password do not match";
  } else {
    delete errors.confirmPassword;
  }
  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "Accept our terms";
  }
  return errors;
};

