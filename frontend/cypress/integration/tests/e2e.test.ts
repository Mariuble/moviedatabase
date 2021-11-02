import cypress from 'cypress'
import '@testing-library/cypress/add-commands'

describe('renders front page', () => {
  it('renders correctly', () => {
    cy.visit('')
    cy.get('#dropdown-menu')
    cy.get('#dropdown-menu2')
  })
  it('Episode have all attributes it needs', () => {
    cy.visit('')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#accordion-button-4 > .col > .row > .chakra-heading').click()
    cy.get('#accordion-button-4 > .col > .row > .chakra-heading').contains(
      'Clannad: After Story'
    )
    cy.findAllByText('Score: 9.04').should('exist')
    cy.findAllByText('Type: Movie').should('exist')
    cy.findAllByText('Episodes: 1').should('exist')
    cy.findAllByText(
      "When Gintoki apprehends a movie pirate at a premiere, he checks the camera's footage and finds himself transported to a bleak, post-apocalyptic version of Edo, where a mysterious epidemic called the " +
        '"White Plague" ' +
        "has ravished the world's population. It turns out that the movie pirate wasn't a pirate after all—it was an android time machine, and Gintoki has been hurtled five years into the future! Shinpachi and Kagura, his Yorozuya cohorts, have had a falling out and are now battle-hardened solo vigilantes and he himself has been missing for years, disappearing without a trace after scribbling a strange message in his journal. Setting out in the disguise given to him by the android time machine, Gintoki haphazardly reunites the Yorozuya team to investigate the White Plague, and soon discovers that the key to saving the future lies in the darkness of his own past. Determined to confront a powerful foe, he makes an important discovery—with a ragtag band of friends and allies at his side, he doesn't have to fight alone. [Written by MAL Rewrite]"
    ).should('exist')
    /* ==== End Cypress Studio ==== */
  })

  it('Allows filter', () => {
    cy.visit('')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#accordion-button-4 > .col > .row > .chakra-heading').contains(
      'Clannad: After Story'
    )
    cy.get('#dropdown-menu2').click()
    cy.get('.dropdown-menu > :nth-child(1)').click()
    cy.get('#accordion-button-4 > .col > .row > .chakra-heading').contains(
      'Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare'
    )
    /* ==== End Cypress Studio ==== */
  })

  it('Search works', () => {
    cy.visit('')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('input').clear()
    cy.get('input').type('Gintama')
    cy.get('#accordion-button-5 > .col > .row > .chakra-heading').contains(
      'Gintama.'
    )
    cy.get('#accordion-button-5 > .col > .row > .chakra-heading').click()
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#accordion-button-4 > .col > .row > .chakra-heading').contains(
      'Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare'
    )
    cy.get('#accordion-button-4 > .col > .row > .chakra-heading').click()
    /* ==== End Cypress Studio ==== */
  })
})

export {}
