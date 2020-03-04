/// <reference types="cypress" />

it('Visit de codepen and get the box', () => {
  cy.visit('https://codepen.io/choskim/pen/RLYebL')

cy.get('.square')
})
