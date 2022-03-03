import { CreateElement } from './components/shared/CreateElement/index.js';

let statusFirstName,
  statusLastName,
  statusEmail,
  statusPassword = false;

const verifyName = ({ input, text, type }) => {
  if (input.value.length <= 2) {
    text.classList.add('text-false');
    text.classList.remove('text-true');
    text.textContent = 'Digite um nome válido!';
    type === 'firstName' ? (statusFirstName = false) : (statusLastName = false);
  } else {
    text.classList.remove('text-false');
    text.classList.add('text-true');
    text.textContent = 'Nome verificado!';
    type === 'firstName' ? (statusFirstName = true) : (statusLastName = true);
  }
};

const verifyEmail = () => {
  const emailTrue = () => {
    $textEmail.classList.remove('text-false');
    $textEmail.classList.add('text-true');
    $textEmail.textContent = 'E-mail verificado!';
    statusEmail = true;
  };

  const emailFalse = () => {
    $textEmail.classList.add('text-false');
    $textEmail.classList.remove('text-true');
    $textEmail.textContent = 'Por favor, digite um e-mail válido!';
    statusEmail = false;
  };

  if ($emailInput.value && $emailInput.value.includes('@')) {
    const partEmail = $emailInput.value.split('@');
    partEmail[0].length !== 0 && partEmail[1].includes('.') ? emailTrue() : emailFalse();
  } else emailFalse();
};

const checkPasswords = () => {
  if ($password1Input.value.length > 0 && $password2Input.value.length > 0) {
    if ($password1Input.value === $password2Input.value) {
      $textPassword.classList.add('text-true');
      $textPassword.classList.remove('text-false');
      $textPassword.textContent = 'Senha confirmada!';
      statusPassword = true;
    } else {
      $textPassword.classList.remove('text-true');
      $textPassword.classList.add('text-false');
      $textPassword.textContent = 'As senhas são diferentes!';
      statusPassword = false;
    }
  }
};

const enableButton = () => {
  if (statusFirstName === true && statusLastName === true && statusEmail === true && statusPassword === true) {
    $button.removeAttribute('disabled', 'true');
  } else {
    $button.setAttribute('disabled', 'true');
  }
};

const register = () => {
  const $congratulations = CreateElement('span', {
    class: 'congratulations',
    textContent: `Parabéns ${$firstNameInput.value}! Seu cadastro foi efetuado com sucesso!`,
  });

  const $congratulationsWrapper = CreateElement('div', {
    class: 'congratulations-wrapper',
    children: $congratulations,
  });

  $content.classList.add('content-finish');
  $content.innerHTML = '';
  $content.appendChild($congratulationsWrapper);
};

const $title = CreateElement('h1', { class: 'title', textContent: 'Cadastro' });

const $text = CreateElement('span', {
  class: 'text',
  textContent: 'Preencha todos os campos abaixo para efetuar o cadastro:',
});

const $textFirstName = CreateElement('span');
const $textLastName = CreateElement('span');

const $firstName = CreateElement('label', { class: 'name', textContent: 'Primeiro nome:', for: 'first-name-input' });
const $firstNameInput = CreateElement('input', {
  class: 'name-input',
  id: 'first-name-input',
  type: 'text',
  placeholder: 'Digite o primeiro nome',
  keyUp: () => {
    verifyName({ input: $firstNameInput, text: $textFirstName, type: 'firstName' });
    enableButton();
  },
});
const $firstNameWrapper = CreateElement('div', {
  class: 'name-wrapper',
  children: [$firstName, $firstNameInput, $textFirstName],
});

const $lastName = CreateElement('label', { class: 'name', textContent: 'Sobrenome:', for: 'last-name-input' });
const $lastNameInput = CreateElement('input', {
  class: 'name-input',
  id: 'last-name-input',
  type: 'text',
  placeholder: 'Digite o sobrenome',
  keyUp: () => {
    verifyName({ input: $lastNameInput, text: $textLastName, type: 'lastName' });
    enableButton();
  },
});
const $lastNameWrapper = CreateElement('div', {
  class: 'name-wrapper',
  children: [$lastName, $lastNameInput, $textLastName],
});

const $namesWrapper = CreateElement('div', { class: 'names-wrapper', children: [$firstNameWrapper, $lastNameWrapper] });

const $email = CreateElement('label', { class: 'name', textContent: 'Endereço de e-mail:', for: 'email-input' });
const $emailInput = CreateElement('input', {
  class: 'email-input',
  id: 'email-input',
  type: 'email',
  placeholder: 'Digite o endereço de e-mail',
  keyUp: () => {
    verifyEmail();
    enableButton();
  },
});
const $emailWrapper = CreateElement('div', { class: 'email-wrapper', children: [$email, $emailInput] });

const $password1 = CreateElement('label', { class: 'name', textContent: 'Senha:', for: 'password-1-input' });
const $password1Input = CreateElement('input', {
  class: 'password-input',
  id: 'password-1-input',
  type: 'password',
  placeholder: 'Digite a senha',
  keyUp: () => {
    checkPasswords();
    enableButton();
  },
});
const $password1Wrapper = CreateElement('div', {
  class: 'password-1-wrapper',
  children: [$password1, $password1Input],
});

const $password2 = CreateElement('label', { class: 'name', textContent: 'Confirme a senha:', for: 'password-2-input' });
const $password2Input = CreateElement('input', {
  class: 'password-input',
  id: 'password-2-input',
  type: 'password',
  placeholder: 'Digite a senha',
  keyUp: () => {
    checkPasswords();
    enableButton();
  },
});
const $password2Wrapper = CreateElement('div', {
  class: 'password-1-wrapper',
  children: [$password2, $password2Input],
});

const $passwordWrapper = CreateElement('div', {
  class: 'password-wrapper',
  children: [$password1Wrapper, $password2Wrapper],
});

const $textEmail = CreateElement('span');
const $textPassword = CreateElement('span');

const $formWrapper = CreateElement('div', {
  class: 'form-wrapper',
  children: [$namesWrapper, $emailWrapper, $textEmail, $passwordWrapper, $textPassword],
});

const $button = CreateElement('button', {
  class: 'button',
  textContent: 'Cadastrar',
  disabled: true,
  onClick: (event) => {
    event.preventDefault();
    register();
  },
});

const $formContent = CreateElement('form', { class: 'form-content', children: [$title, $text, $formWrapper, $button] });

const $content = CreateElement('div', { class: 'content', children: $formContent });

const $container = document.querySelector('.container');
$container.appendChild($content);
