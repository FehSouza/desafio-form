const $container = document.querySelector(".container");

const $title = document.createElement("h1");
$title.classList.add("title");
$title.textContent = "Login";

const $textLogin = document.createElement("p");
$textLogin.classList.add("text-login");
$textLogin.textContent =
  "Preencha todos os campos abaixo para efetuar o login:";

const $firstName = document.createElement("span");
$firstName.classList.add("first-name");
$firstName.textContent = "Primeiro nome:";

const $firstNameInput = document.createElement("input");
$firstNameInput.classList.add("name-input");
$firstNameInput.setAttribute("type", "text");
$firstNameInput.setAttribute("placeholder", "Digite o primeiro nome");

const $firstNameWrapper = document.createElement("div");
$firstNameWrapper.classList.add("name-wrapper");
$firstNameWrapper.appendChild($firstName);
$firstNameWrapper.appendChild($firstNameInput);

const $lastName = document.createElement("span");
$lastName.classList.add("last-name");
$lastName.textContent = "Último nome:";

const $lastNameInput = document.createElement("input");
$lastNameInput.classList.add("name-input");
$lastNameInput.setAttribute("type", "text");
$lastNameInput.setAttribute("placeholder", "Digite o último nome");

const $lastNameWrapper = document.createElement("div");
$lastNameWrapper.classList.add("name-wrapper");
$lastNameWrapper.appendChild($lastName);
$lastNameWrapper.appendChild($lastNameInput);

const $wrapperNames = document.createElement("div");
$wrapperNames.classList.add("wrapper-names");
$wrapperNames.appendChild($firstNameWrapper);
$wrapperNames.appendChild($lastNameWrapper);

const $email = document.createElement("span");
$email.classList.add("email");
$email.textContent = "Endereço de e-mail:";

const $emailInput = document.createElement("input");
$emailInput.classList.add("email-input");
$emailInput.setAttribute("type", "email");
$emailInput.setAttribute("placeholder", "Digite o endereço de e-mail");

const $wrapperEmail = document.createElement("div");
$wrapperEmail.classList.add("email-wrapper");
$wrapperEmail.appendChild($email);
$wrapperEmail.appendChild($emailInput);

const $boxInvisibleEmail = document.createElement("div");
$boxInvisibleEmail.classList.add("box-invisible");

const $password = document.createElement("span");
$password.classList.add("password");
$password.textContent = "Senha:";

const $passwordInput = document.createElement("input");
$passwordInput.classList.add("password-input");
$passwordInput.setAttribute("type", "password");
$passwordInput.setAttribute("placeholder", "Digite a senha");

const $passwordWrapper = document.createElement("div");
$passwordWrapper.classList.add("password-wrapper");
$passwordWrapper.appendChild($password);
$passwordWrapper.appendChild($passwordInput);

const $passwordConfirm = document.createElement("span");
$passwordConfirm.classList.add("password");
$passwordConfirm.textContent = "Confirme a senha:";

const $passwordConfirmInput = document.createElement("input");
$passwordConfirmInput.classList.add("password-input");
$passwordConfirmInput.setAttribute("type", "password");
$passwordConfirmInput.setAttribute("placeholder", "Digite a senha");

const $passwordConfirmWrapper = document.createElement("div");
$passwordConfirmWrapper.classList.add("password-wrapper");
$passwordConfirmWrapper.appendChild($passwordConfirm);
$passwordConfirmWrapper.appendChild($passwordConfirmInput);

const $wrapperPassword = document.createElement("div");
$wrapperPassword.classList.add("wrapper-password");
$wrapperPassword.appendChild($passwordWrapper);
$wrapperPassword.appendChild($passwordConfirmWrapper);

const $wrapperForm = document.createElement("div");
$wrapperForm.classList.add("wrapper-form");
$wrapperForm.appendChild($wrapperNames);
$wrapperForm.appendChild($wrapperEmail);
$wrapperForm.appendChild($boxInvisibleEmail);
$wrapperForm.appendChild($wrapperPassword);

const $box = document.createElement("div");
$box.classList.add("box");

const $button = document.createElement("button");
$button.classList.add("button");
$button.setAttribute("disabled", "true");
$button.textContent = "Login";

const $wrapperLogin = document.createElement("div");
$wrapperLogin.classList.add("wrapper-login");
$wrapperLogin.appendChild($title);
$wrapperLogin.appendChild($textLogin);
$wrapperLogin.appendChild($wrapperForm);
$wrapperLogin.appendChild($box);
$wrapperLogin.appendChild($button);

const $content = document.createElement("div");
$content.classList.add("content");
$content.appendChild($wrapperLogin);

$container.appendChild($content);

const $textPassword = document.createElement("span");
const $textEmail = document.createElement("span");
$textEmail.classList.add("text-email");

const verifyEmail = () => {
  if (
    $emailInput.value &&
    $emailInput.value.indexOf("@") === -1 &&
    $emailInput.value.indexOf(".") === -1
  ) {
    $textEmail.textContent = "Por favor, digite um e-mail válido!";
    $boxInvisibleEmail.appendChild($textEmail);
  } else {
    $textEmail.remove();
  }
};

const verifyPassword = () => {
  if (
    $passwordInput.value &&
    $passwordConfirmInput.value &&
    $passwordInput.value === $passwordConfirmInput.value
  ) {
    $textPassword.textContent = "Senha confirmada!";
    $textPassword.classList.add("text-password-okay");
    $textPassword.classList.remove("text-password-noOkay");
    $box.appendChild($textPassword);
  }
  if (
    $passwordInput.value &&
    $passwordConfirmInput.value &&
    $passwordInput.value !== $passwordConfirmInput.value
  ) {
    $textPassword.textContent = "As senhas não são iguais!";
    $textPassword.classList.remove("text-password-okay");
    $textPassword.classList.add("text-password-noOkay");
    $box.appendChild($textPassword);
  }
};

const enableButton = () => {
  if (
    $firstNameInput.value &&
    $lastNameInput.value &&
    $emailInput.value &&
    $passwordInput.value &&
    $passwordConfirmInput.value &&
    $passwordInput.value === $passwordConfirmInput.value
  ) {
    $button.removeAttribute("disabled", "true");
  } else {
    $button.setAttribute("disabled", "true");
  }
};

const finish = () => {
  $content.innerHTML = "";
  $content.classList.add("content-finish");

  const $congratulations = document.createElement("span");
  $congratulations.classList.add("congratulations");
  $congratulations.textContent =
    "Parabéns! Seu login foi efetuado com sucesso!";

  const $congratulationsWrapper = document.createElement("div");
  $congratulationsWrapper.classList.add("congratulations-wrapper");
  $congratulationsWrapper.appendChild($congratulations);

  $content.appendChild($congratulationsWrapper);
};

$firstNameInput.addEventListener("keyup", () => enableButton());
$lastNameInput.addEventListener("keyup", () => enableButton());
$emailInput.addEventListener("keyup", () => enableButton());
$emailInput.addEventListener("blur", () => verifyEmail());
$passwordInput.addEventListener("keyup", () => {
  verifyPassword();
  enableButton();
});
$passwordConfirmInput.addEventListener("keyup", () => {
  verifyPassword();
  enableButton();
});

$button.addEventListener("click", () => {
  finish();
});
