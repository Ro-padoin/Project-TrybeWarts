const inputEmail = document.getElementById('email');
const email = 'tryber@teste.com';
const inputSenha = document.getElementById('password');
const senha = '123456';
const btnEntrar = document.getElementById('button');
const btnSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

btnEntrar.addEventListener('click', () => {
  if (inputEmail.value === email && inputSenha.value === senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

btnSubmit.disabled = true;
function desabilitar() {
  if (agreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}
agreement.addEventListener('click', desabilitar);

// Outra forma de resolver:
// const btnEnviar = document.getElementById('submit-btn');
// const checkbox = document.getElementById('agreement');
// checkbox.addEventListener('change', () => {
// btnEnviar.disabled = !checkbox.checked;
// });

const caracteres = document.getElementById('textarea');
const counter = document.getElementById('counter');
const qtMaxCaracteres = caracteres.maxLength;
counter.innerText = qtMaxCaracteres;

caracteres.addEventListener('input', () => {
  const contador = caracteres.value.length;
  counter.innerText = qtMaxCaracteres - contador;
});

const formCadastro = document.getElementById('evaluation-form');
const parentCadastro = document.getElementById('box-text-form');
const materias = document.getElementsByClassName('subject');
const camposForm = document.getElementById('campos-form');

function adicionarConteudoCadastro(conteudo) {
  const campo = document.createElement('p');
  parentCadastro.appendChild(campo);
  campo.innerText = conteudo;
}

const result = [];
function iterarMaterias() {
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      result.push(materias[i].value);
    }
  }
  // Outras formas de resolver para passar no Lint (existem mais 2 formas(for...of e for...in) mas nao passaria no Lint):
  // Transformando o objeto em array e usando forEach:
  // Array.from(materias).forEach((materia) => {
  // if (materia.checked) {
  // result.push(materia.value);
  // }
  // });
}

formCadastro.addEventListener('submit', (event) => {
  event.preventDefault(); // previne que o evento de enviar form seja disparado.
  camposForm.classList.add('hidden');
  adicionarConteudoCadastro(`Nome: ${formCadastro.nome.value} ${formCadastro.sobrenome.value}`);
  adicionarConteudoCadastro(`Email: ${formCadastro.email.value}`);
  adicionarConteudoCadastro(`Casa: ${formCadastro.house.value}`);
  adicionarConteudoCadastro(`Família: ${formCadastro.family.value}`);
  iterarMaterias();
  adicionarConteudoCadastro(`Matérias: ${result.join(', ')}`);
  adicionarConteudoCadastro(`Avaliação: ${formCadastro.rate.value}`);
  adicionarConteudoCadastro(`Observações: ${formCadastro.textarea.value}`);
  parentCadastro.classList.remove('hidden');
});
