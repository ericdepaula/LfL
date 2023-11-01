const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();


const btn = document.getElementById('button');

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

   btn.value = 'Enviando...';

   var templateParams = {
    from_name: document.getElementById("user_name").value,
    email_id: document.getElementById("email").value,
    contact_number: document.getElementById("number").value,
    message: document.getElementById("message").value
  };
   const serviceID = 'default_service';
   const templateID = 'template_qc0d7mg';

   emailjs.send(serviceID, templateID,templateParams)
   .then(function(response) {

      btn.value = 'Enviar';
      console.log("Email enviado com sucesso!\nEm breve nossa equipe entrará em contato!", response.status, response.text);

        // Limpando formulário
        document.getElementById("user_name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("number").value = "";

        // Mostrando mensagem de alerta
        alert('Email enviado com sucesso');
    }, function(error) {
      console.error("Houve um problema ao enviar o email.", error);
      // Alerta de erro
      alert('Email não enviado com sucesso, tente novamente!', error);
      btn.value = 'Enviar';
    });
});