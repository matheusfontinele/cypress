/// <reference types="cypress" />
// our Codepen has top level URL
const url = 'https://codepen.io/choskim/full/RLYebL'
// that loads app from this URL
const iframeUrl = 'https://cdpn.io/choskim/fullpage/RLYebL'

describe('HyperApp Counter Codepen', () => {
  beforeEach(function loadAppIFrameAndSetAsOurTestDocument () {
    // we could even cache the received HTML code
    cy.request({
      method: 'GET',
      url: iframeUrl,
      headers: {
        Referer: url,
        accept: 'text/html',
      },
    })
    .its('body')
    .then((html) => {
      const doc = cy.state('document')

      cy.log('Writing HTML into test document')
      doc.write(html)
      doc.close()
    })

    cy.wait(1000)
    cy.url().should('include', 'localhost:')
  })

  it('get the box and expand using mousedown and mouseleave', () => {

    cy.get('.square').trigger('mousedown').wait(1000)
    cy.get('.square').trigger('mouseleave')
  })

  it('get the box and expand using pointerdown and pointerup', () => {
    const pointerEvent = {
        force: true,
        pointerType: 'Mouse'
      }
  
      cy.get('.square').trigger('mousedown', pointerEvent).wait(1000)
      cy.get('.square').trigger('mouseleave', pointerEvent)
  })

})
