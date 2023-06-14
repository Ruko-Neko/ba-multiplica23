document.getElementById("formulario").addEventListener("submit"), function(event) {event.preventDefault()};

  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("msg").value;


  if (nombre === '' || email === '' || message === '') {
    alert("Por favor, complete todos los campos");
    return;
  }
  