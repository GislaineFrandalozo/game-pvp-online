export class createMetadataForm {
    constructor(request) {
        this.request = request || {
            route: "/",
            toastPromiseConfiguration: { pending: "Carregando, aguarde!", success: "Requisição realizada com sucesso" },
            callbackAfterPost: (response) => { console.log(response) },
        }
    }

    createMetadataInput(idInputs) {
        const defaultFeedback = "Este campo é obrigatório."
        let configInput = idInputs.map((idInput) => {
            const configInput = {
                name: {
                    label: "Nome",
                    type: "text",
                    nameAtributeRequest: "name",
                    validate: {
                        required: true,
                        min: "3",
                        max: "20",
                        pattern: ".+.",
                        feedback: `${defaultFeedback} Mínimo 3 caracteres.`
                    },
                    onChange: null
                },
                email: {
                    label: "Email",
                    type: "text",
                    nameAtributeRequest: "email",
                    validate: {
                        required: true,
                        min: "10",
                        max: "50",
                        pattern: ".+@.+\.com",
                        feedback: `${defaultFeedback} Ex: "nome@exemplo.com".`
                    },
                    onChange: null
                },
                birthdate: {
                    label: "Data de nascimento",
                    type: "date",
                    nameAtributeRequest: "birthdate",
                    validate: {
                        required: true,
                        min: "0",
                        max: "",
                        pattern: ".+.",
                        feedback: defaultFeedback
                    },
                    onChange: null
                },
                password: {
                    label: "Senha",
                    type: "password",
                    nameAtributeRequest: "password",
                    validate: {
                        required: true,
                        min: "5",
                        max: "50",
                        pattern: ".+.",
                        feedback: `${defaultFeedback} Mínimo 5 caracteres.`
                    },
                    onChange: null
                },
                photo: {
                    label: "Imagem de perfil",
                    type: "file",
                    nameAtributeRequest: "photo",
                    validate: {
                        required: true,
                        min: "0",
                        max: "",
                        pattern: ".+.",
                        feedback: defaultFeedback
                    },
                    onChange: (e) => {
                        var preview = document.querySelector('img');
                        var file = document.querySelector('input[type=file]').files[0];
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

            }
            return configInput[idInput];
        })
        return configInput;
    }
}