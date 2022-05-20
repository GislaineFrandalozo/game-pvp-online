    // Resource
import { toast } from "react-toastify";

function createMetadataInput(idInputs) {
  const defaultFeedback = "Este campo é obrigatório."
  const configInput = idInputs.map((idInput) => {
    const configInput = {
      name: {
        label: "Nome",
        attributes: {
          type: "text",
          name: "name",
          required: true,
          minLength: "3",
          maxLength: "20",
        },
        feedback: `${defaultFeedback} Mínimo 3 caracteres.`
      },
      email: {
        label: "Email",
        feedback: `${defaultFeedback} Ex: "nome@exemplo.com".`,
        attributes: {
          type: "text",
          name: "email",
          required: true,
          minLength: "10",
          maxLength: "50",
          pattern: ".+@.+\.com",
        },
      },
      birthdate: {
        label: "Data de nascimento",
        feedback: defaultFeedback,
        attributes: {
          type: "date",
          name: "birthdate",
          required: true,
        },
      },
      password: {
        label: "Senha",
        feedback: `${defaultFeedback} Mínimo 5 caracteres.`,
        attributes: {
          type: "password",
          name: "password",
          required: true,
          minLength: "5",
          maxLength: "50",
        },
      },
      profilePicture: {
        label: "Imagem de perfil",
        feedback: `${defaultFeedback} ( .png .jpg .jpeg )`,
        attributes: {
          type: "file",
          name: "photo",
          required: true,

          accept: ".jpg, .jpeg, .png",
          onChange: (e) => {
            var preview = document.querySelector('img');
            const input = document.querySelector('input[name="photo"]')
            var file = input.files[0];
            var fileExtension = "";
            if (input.value.lastIndexOf(".") > 0) {
              fileExtension = input.value.substring(input.value.lastIndexOf(".") + 1, input.value.length);
              var extension = fileExtension.toLowerCase()
            }
            if (!/jpg|jpeg|png/.test(extension)) {
              preview.src = "";
              file = null;
              input.value = null;
              toast("Formato do arquivo da imagem inválido!")
              return
            }
            var reader = new FileReader();
            reader.onloadend = function () {
              preview.src = reader.result;
            }
            if (file) {
              reader.readAsDataURL(file);
            } else {
              preview.src = "";
            }
          }
        },
      },
    }
    return configInput[idInput];
  })
  return configInput;
}

export { createMetadataInput }
