Cypress.Commands.add('camposObrigatorios', (nome, email, telefone, cpf, dataNascimento, senha, confirmarSenha) => {
    cy.get('#nome').type(nome);
    cy.get('#email').type(email);
    cy.get('#telefone').type(telefone);
    cy.get('#cpf').type(cpf);
    cy.get('#data-nascimento').type(dataNascimento);
    cy.get('#senha').type(senha);
    cy.get('#confirmar-senha').type(confirmarSenha);
});