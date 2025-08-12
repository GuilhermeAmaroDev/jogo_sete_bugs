describe('Jogo dos 7 Bugs', () => {
  beforeEach(() => {
    cy.visit('https://guilhermeamarodev.github.io/jogo_sete_bugs/')
  })

  it('Deve carregar a página corretamente', () => {
    cy.contains('Desafio dos 7 Bugs').should('exist')
  })
})