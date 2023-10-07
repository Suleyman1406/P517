const registerEmailInputElement = document.querySelectorAll("input")[0];
const registerPasswordInputElement = document.querySelectorAll("input")[1];
const registerConfirmPasswordInputElement =
  document.querySelectorAll("input")[2];
const registerBtnElement = document.querySelectorAll("button")[0];
const usersTableElement = document.querySelector("tbody");
const registerErrorElement = document.getElementById("register-error");
const loginEmailInputElement = document.querySelectorAll("input")[3];
const loginPasswordInputElement = document.querySelectorAll("input")[4];
const loginBtnElement = document.querySelectorAll("button")[1];
const loginResultElement = document.getElementById("login-result");

const users = [];
let userCount = 1;

registerBtnElement.onclick = () => {
  registerErrorElement.textContent = "";
  let { isSucces, error } = validateRegisterInputs();
  if (!isSucces) {
    registerErrorElement.textContent = error;
    return;
  }

  const isAlreadyExist = users.some(
    (u) => u.email === registerEmailInputElement.value
  );

  if (isAlreadyExist) {
    registerErrorElement.textContent = "User already exist with email!";
    return;
  }

  const newUser = {
    id: userCount++,
    email: registerEmailInputElement.value,
    password: registerPasswordInputElement.value,
  };

  users.push(newUser);

  createAndAppendUserRow(newUser);
  emptyRegisterFields();
};

function createAndAppendUserRow(user) {
  const userRow = document.createElement("tr");
  const userEmailData = document.createElement("td");
  const userPassData = document.createElement("td");
  const userOperationData = document.createElement("td");
  const userDeleteBtn = document.createElement("button");
  userEmailData.textContent = user.email;
  userPassData.textContent = user.password;
  userDeleteBtn.textContent = "X";
  userDeleteBtn.onclick = () => {
    userRow.remove();
    const userIndex = users.findIndex((u) => u.id === user.id);
    users.splice(userIndex, 1);
  };

  userOperationData.append(userDeleteBtn);
  userRow.append(userEmailData, userPassData, userOperationData);
  usersTableElement.append(userRow);
}

function validateRegisterInputs() {
  if (
    !registerEmailInputElement.value ||
    !registerPasswordInputElement.value ||
    !registerConfirmPasswordInputElement.value
  ) {
    return { isSucces: false, error: "Email, password is required!" };
  }

  if (!validateEmail(registerEmailInputElement.value)) {
    return { isSucces: false, error: "Email wrong format!" };
  }

  const passwordValidationResult = validatePassword(
    registerPasswordInputElement.value
  );
  if (passwordValidationResult) {
    return { isSucces: false, error: passwordValidationResult };
  }

  if (
    registerPasswordInputElement.value !==
    registerConfirmPasswordInputElement.value
  ) {
    return {
      isSucces: false,
      error: "Confirm password must match with password!",
    };
  }

  return {
    isSucces: true,
    error: null,
  };
}

function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function validatePassword(value) {
  if (value.length < 8) {
    return "Your password must be at least 8 characters";
  }
  if (value.search(/[a-z]/i) < 0) {
    return "Your password must contain at least one letter.";
  }
  if (value.search(/[0-9]/) < 0) {
    return "Your password must contain at least one digit.";
  }
  if (value.search(/[A-Z]/) < 0) {
    return "Your password must contain at least one upper letter.";
  }
  if (value.search(/[!#$%&?]/) < 0) {
    return "Your password must contain at least one special character.";
  }
  return null;
}

function emptyRegisterFields() {
  registerEmailInputElement.value = "";
  registerPasswordInputElement.value = "";
  registerConfirmPasswordInputElement.value = "";
}

loginBtnElement.onclick = () => {
  loginResultElement.textContent = "";
  let { isSucces, error } = validateLoginInputs();
  if (!isSucces) {
    loginResultElement.style.color = "red";
    loginResultElement.textContent = error;
    return;
  }

  const loggedUser = users.find(
    (user) =>
      user.email === loginEmailInputElement.value &&
      user.password === loginPasswordInputElement.value
  );

  if (loggedUser) {
    loginResultElement.style.color = "green";
    loginResultElement.textContent = "Successfully Logged In.";
  } else {
    loginResultElement.style.color = "red";
    loginResultElement.textContent = "Login Failed.";
  }
};

function validateLoginInputs() {
  if (!loginEmailInputElement.value || !loginPasswordInputElement.value) {
    return { isSucces: false, error: "Email, password is required!" };
  }
  return {
    isSucces: true,
    error: null,
  };
}
