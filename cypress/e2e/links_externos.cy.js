describe('Links externos', () => {
  beforeEach(() => {
    cy.visit('https://guilhermeamarodev.github.io/jogo_sete_bugs/')
  })

it('Link do GitHub está correto e acessível', () => {
  cy.get('a[href="https://github.com/GuilhermeAmaroDev"]')
    .should('exist')
    .then(($link) => {
      const url = $link.prop('href'); // Pega a URL do link

      cy.origin('https://github.com', { args: url }, (linkUrl) => {
        cy.visit(linkUrl.replace('https://github.com', ''))
        cy.get('h1').should('contain', 'Guilherme Amaro');
      });
    });
});

  it('Link do LinkedIn existe e está correto', () => {
  // Não conseguimos visitar o LinkedIn para validar o conteúdo da página
  // porque sites externos como o LinkedIn possuem proteções contra automação
  // (anti-bot, autenticação, captchas etc.).
  // Por isso, neste teste apenas verificamos se o link existe e se o href está correto.
  cy.get('a[href="https://www.linkedin.com/in/guilherme-amaro-dev/"]')
    .should('exist')
    .and('have.attr', 'href', 'https://www.linkedin.com/in/guilherme-amaro-dev/');
});

  it('Whatsapp não faz nada', () => {
    ///Como o botão do whatsapp é um bug, não funciona, o href dele é uma #, ao usar o href = #, o DOM encontra muitos elementos e não consegue fazer o click
    ///portanto, neste caso utilizei a classe para encontrar o elemento, e após isso, usei o scrollIntoView para garantir que o elemento está visível antes de clicar
    cy.get('.fab.fa-whatsapp')
      .scrollIntoView({ duration: 1000 })
      .click();
    cy.url().should('include', '/jogo_sete_bugs/');
  });
})