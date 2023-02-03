function containsNumbers(str) {
  return /[0-9]/.test(str);
}

function containsSpecialCharacters(str) {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str);
}

function containsUpperCase(str) {
  return str !== str.toLowerCase();
}

function containsLowerCase(str) {
  return str.toUpperCase() != str;
}

const validatePassword = (passwordInput) => {
  let result = {
    length: false,
    upperCase: false,
    lowerCase: false,
    number: false,
    specialCharacter: false,
  };

  if (passwordInput.length > 8 && passwordInput.length < 256) {
    result.length = true;
  }
  result.upperCase = containsUpperCase(passwordInput);
  result.lowerCase = containsLowerCase(passwordInput);
  result.number = containsNumbers(passwordInput);
  result.specialCharacter = containsSpecialCharacters(passwordInput);
  return result;
};

export default validatePassword;
