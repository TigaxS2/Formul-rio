const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const JobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {

    event.preventDefault();

    //  Verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome!")
        return;
    }

    //  Verifica se o email está preenchido e se é válido
    if(emailInput.value == "" || !isEmailvalid(emailInput.value)){
        alert("Por favor, preencha o seu email corretamente!")
        return;
    }

    // Função que valida e-mail
    function isEmailvalid(email){
        //cria uma regex para validar o e-mail
        const emailRegex = new RegExp(
            //usuario12@host.com.br
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if(emailRegex.test(email)){
            return true;
        }

        return false;
    }

    // Verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ser no mínimo de 8 dígitos!")
        return;
    }

    // Verificar se a situação foi selecionada
    if(job.JobSelect.value === ""){
        alert("Por favor, selecione a sua situação!")
        return;
    }
    

    // Verificar se a mensagem foi escrita
    if(messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem.")
        return;
    }

    //Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();

})

    // Função que valida a senha
    function validatePassword(password, minDigits){
        if(password.length >= minDigits){
            // Senha Válida
            return true;
        }
        // Senha inválida
        return false;
    }
    