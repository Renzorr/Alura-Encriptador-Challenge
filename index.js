const inputArea = document.querySelector(".input-area");
const resultArea = document.querySelector(".result-area");

const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopy = document.querySelector(".btn-copy");

const resultSection = document.querySelector(".result-section");
const noContent = document.querySelector(".result-no-content");
const warningAlert = document.querySelector(".warning");

let str;
let isAlertActive = false;
const regex = /^[a-z\s]+$/;

btnEncriptar.addEventListener("click", () => {
  validarInput(str, encriptarTexto);
});

btnDesencriptar.addEventListener("click", () => {
  validarInput(str, desencriptarTexto);
});

btnCopy.addEventListener("click", () => {
  copiarContenido();
});

function revelarContenido() {
  resultSection.style.justifyContent = "space-between";
  noContent.style.display = "none";
  btnCopy.style.display = "initial";
  resultArea.style.display = "initial";
}

function encriptarTexto(str) {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "a") {
      arr[i] = "ai";
    }
    if (arr[i] == "e") {
      arr[i] = "enter";
    }
    if (arr[i] == "i") {
      arr[i] = "imes";
    }
    if (arr[i] == "o") {
      arr[i] = "ober";
    }
    if (arr[i] == "u") {
      arr[i] = "ufat";
    }
  }

  resultArea.textContent = arr.join("");
  inputArea.value = "";
}

function desencriptarTexto(str) {
  let newStr = str
    .replaceAll(/ai/gi, "a")
    .replaceAll(/enter/gi, "e")
    .replaceAll(/imes/gi, "i")
    .replaceAll(/ober/gi, "o")
    .replaceAll(/ufat/gi, "u");

  resultArea.textContent = newStr;
  inputArea.value = "";
}

function validarInput(str, accion) {
  str = inputArea.value;

  if (str == null || !regex.test(str)) {
    mostrarAlerta(isAlertActive);
  } else {
    revelarContenido();
    accion(str);
  }
}

function copiarContenido() {
  resultArea.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  btnCopy.textContent = "Copiado";
  setTimeout(() => {
    btnCopy.textContent = "Copiar";
  }, 3000);
}

function mostrarAlerta(isAlertActive) {
  if (!isAlertActive) {
    warningAlert.classList.add("active");
    isAlertActive = true;

    setTimeout(() => {
      warningAlert.classList.remove("active");
      isAlertActive = false;
    }, 3000);
  }
}
