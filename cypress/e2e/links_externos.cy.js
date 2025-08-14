describe('Links externos', () => {
  beforeEach(() => {
    cy.visit('https://guilhermeamarodev.github.io/jogo_sete_bugs/')
  })

  it('Link do GitHub está correto e acessível', () => {
    cy.get('a[href="https://github.com/GuilhermeAmaroDev"]')
      .should('exist')
      .invoke('removeAttr', 'target')
      .click();

    //Apenas para visualizar o click no botão, em produção esse wait não deve existir
    cy.wait(2000);

    cy.origin('https://github.com', () => {
      cy.visit('https://github.com/GuilhermeAmaroDev');
      cy.get('h1').should('contain', 'Guilherme Amaro');
    });
  });

  it('Link do LinkedIn está correto e acessível', () => {
    cy.get('a[href="https://www.linkedin.com/in/guilherme-amaro-dev/"]')
      .should('exist')
      .invoke('removeAttr', 'target')
      .click();

    cy.wait(2000);

    cy.origin('https://www.linkedin.com/in', () => {
      //Infelizmente, para acessar a conta que está no link do botão da page precisaria de login, 
      //caso o usuario tenha login vai acessar o link com a minha conta do LinkedIn, senão vai aparecer a tela de cadastro
      //como o código atualmente é publico, por questões de segurança, não é possível acessar a conta do LinkedIn para realizar o teste
      cy.get('h1').should('contain', 'Cadastre-se no LinkedIn');
    });
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