document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const successModal = document.getElementById('success-modal');
    const termosModal = document.getElementById('termos-modal');
    const termosLink = document.getElementById('termos-link');
    const aceitarTermosBtn = document.getElementById('aceitar-termos-btn');
    const okBtn = document.getElementById('ok-btn');
    const closeButtons = document.querySelectorAll('.close');

    // Verificando se os elementos foram encontrados corretamente
    console.log('okBtn:', okBtn);
    console.log('aceitarTermosBtn:', aceitarTermosBtn);
    console.log('closeButtons:', closeButtons);


    // Manipuladores de eventos para os modais
    aceitarTermosBtn.addEventListener('click', function () {
        const termosCheckbox = document.getElementById('termos');
        termosCheckbox.disabled = false;
         termosCheckbox.checked = true;
        termosModal.style.display = 'none';
    });

    okBtn.addEventListener('click', function () {
        successModal.style.display = 'none';
        // Reseta o formulário apenas quando o usuário confirma o sucesso
        form.reset();
    });

    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // if (successModal.style.display === 'block') {
            //     form.reset();
            // }
            successModal.style.display = 'none';
            termosModal.style.display = 'none';

        });
    });

    // Fecha os modais quando clica fora deles
    window.addEventListener('click', function (event) {
        if (event.target === successModal) {
            successModal.style.display = 'none';
            form.reset();
        }
        if (event.target === termosModal) {
            termosModal.style.display = 'none';
        }
    });

    termosLink.addEventListener('click', function (e) {
        e.preventDefault();
        termosModal.style.display = 'block';

    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validações básicas
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const cpf = document.getElementById('cpf').value;
        const dataNascimento = document.getElementById('data-nascimento').value;
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmar-senha').value;
    
        // Limpa mensagens de erro anteriores
        document.querySelectorAll('.error-message').forEach(function (el) {
            el.textContent = '';
        });

        let hasError = false;

        // Validações simples
        if (!nome) {
            document.getElementById('nome-error').textContent = 'Nome é obrigatório';
            hasError = true;
        }

        if (!email) {
            document.getElementById('email-error').textContent = 'E-mail é obrigatório';
            hasError = true;
        } else if (!validateEmail(email)) {
            document.getElementById('email-error').textContent = 'E-mail inválido';
            hasError = true;
        }

        if (!telefone) {
            document.getElementById('telefone-error').textContent = 'Telefone é obrigatório';
            hasError = true;
        }

        // Validação de CPF com bug: ignora campo vazio apesar de ser obrigatório
        if (!cpf) {
            // Bug: não mostra erro quando CPF está vazio
            document.getElementById('cpf-error').textContent = '';
        }

        if (!dataNascimento) {
            document.getElementById('data-nascimento-error').textContent = 'Data de nascimento é obrigatória';
            hasError = true;
        }

        if (!senha) {
            document.getElementById('senha-error').textContent = 'Senha é obrigatória';
            hasError = true;
        } else {
            // Erro 2 modificado: Senha deve ter caractere especial, letra maiúscula e número
            // Mas se tiver letra maiúscula, dá erro sem informar qual é o problema
            const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
            const temMaiuscula = /[A-Z]/.test(senha);
            const temNumero = /[0-9]/.test(senha);

            if (temMaiuscula) {
                // Se tiver letra maiúscula, dá erro sem explicar o motivo
                document.getElementById('senha-error').textContent = 'Senha inválida';
                hasError = true;
            } else if (!temEspecial || !temNumero) {
                // Se não tiver caractere especial ou número, informa o erro
                document.getElementById('senha-error').textContent = 'A senha deve conter caractere especial, letra maiúscula, número e no mínimo 8 caracteres';
                hasError = true;
            }
        }

        if (!hasError) {
            // Mostra o modal de sucesso
            successModal.style.display = 'block';
            // Não reseta o formulário aqui, apenas quando o usuário confirmar o modal
        }
    })
})

// Funções auxiliares
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


// Máscara para o telefone
const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        value = '(' + value;
        if (value.length > 3) {
            value = value.substring(0, 3) + ') ' + value.substring(3);
        }
        if (value.length > 10) {
            value = value.substring(0, 10) + '-' + value.substring(10, 14);
        }
    }
    e.target.value = value;
});

// Máscara para o CPF com erro: mostra formato com hífens mas não permite hífens
const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', function (e) {
     e.target.value;
});

