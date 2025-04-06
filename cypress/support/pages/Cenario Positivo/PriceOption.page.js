const BTN_NEXT_PAGE = '#nextsendquote'

Cypress.Commands.add('selecionarPlano', () => {
    cy.get('input[name="Select Option"]').then($radios => {
      const radiosArray = Cypress._.sample($radios.toArray()) // pega 1 aleatório
      cy.wrap(radiosArray).check({ force: true })
    })
})

Cypress.Commands.add('clicarNextQuote', () => {
    cy.wait(1000)
    cy.get(BTN_NEXT_PAGE).click()
})