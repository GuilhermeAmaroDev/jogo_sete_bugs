describe('Jogo dos 7 Bugs', () => {
  beforeEach(() => {
    cy.visit('https://guilhermeamarodev.github.io/jogo_sete_bugs/')
  })

  it('Cadastro com sucesso aceitando os termos!', () => {
    cy.contains('Desafio dos 7 Bugs').should('exist')
    cy.camposObrigatorios('Guilherme Amaro', 'guilherme@example.com', '(11) 98765-4321', '123.456.789-09', '1994-04-27', 'senha123!1', 'qualquer-senha-nao-valida-mesmo')

    cy.get('#termos-link').click()

    //Simulando o usuário lendo os termos e condições antes de aceitar
    cy.get('.termos-content')
      .scrollTo('bottom', { duration: 3000 })
      .then(() => {
        cy.get('#aceitar-termos-btn').click();
      });

    cy.get('#cadastrar-btn').click()

    cy.contains('Cadastro Realizado com Sucesso!').should('exist')
  })
})