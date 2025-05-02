document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn-acompanhar").addEventListener("click", () => {
    alert("Você será redirecionado para a página de tutorial.");
    // window.location.href = "acompanhar.html";
  });

  document.querySelector("#btn-login").addEventListener("click", () => {
    alert("Você será redirecionado para a página de login.");
    // window.location.href = "login.html";
  });

  document.querySelector("#btn-cadastrar").addEventListener("click", () => {
    alert("Você será redirecionado para a página de cadastro.");
    // window.location.href = "cadastro.html";
  });
});
