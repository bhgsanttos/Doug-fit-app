function mostrarRegistro() {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("register-form").classList.remove("hidden");
}

function mostrarLogin() {
  document.getElementById("register-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
}

function registrar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("register-email").value;
  const senha = document.getElementById("register-senha").value;

  if (!email || !senha || !nome) {
    alert("Preencha todos os campos.");
    return;
  }

  const usuario = { nome, email, senha };
  localStorage.setItem("usuarioDougFit", JSON.stringify(usuario));
  alert("Conta criada com sucesso!");
  mostrarLogin();
}

function login() {
  const email = document.getElementById("login-email").value;
  const senha = document.getElementById("login-senha").value;

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioDougFit"));

  if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
    alert("Login bem-sucedido!");
    // Redirecionar para próxima tela
    window.location.href = "objetivo.html";
  } else {
    alert("Email ou senha inválidos.");
  }
}
