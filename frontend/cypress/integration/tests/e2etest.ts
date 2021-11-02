import cypress from 'cypress'
import '@testing-library/cypress/add-commands'

describe('renders front page', () => {
  it('renders correctly', () => {
    cy.visit('/')
    cy.get('#dropdown-menu2')
    cy.get('.chakra-input')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.css-5ri2xm > :nth-child(1)').click()
    cy.get('.css-5ri2xm > :nth-child(2)').click()
    cy.get('#accordion-button-2 > .col > .row > .chakra-heading').click()
    cy.get('#accordion-panel-2 > p').click()
    /* ==== End Cypress Studio ==== */
  })
  it('Episode have all attributes it needs', () => {
    cy.visit('/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#dropdown-menu2').click()
    cy.get('.dropdown-menu > :nth-child(2)').click()
    cy.get('#accordion-button-2 > .col > .row > .chakra-heading').contains(
      '3-gatsu no Lion'
    )
    cy.get('#accordion-button-2 > .col > :nth-child(2)').contains('Score: 8.43')
    cy.get('#accordion-button-2 > .col > :nth-child(3)').contains('Type: TV')
    cy.get('#accordion-button-2 > .col > :nth-child(4)').contains(
      'Episodes: 22'
    )
    cy.get('#accordion-panel-2 > p').contains(
      "Having reached professional status in middle school, Rei Kiriyama is one of the few elite in the world of shogi. Due to this, he faces an enormous amount of pressure, both from the shogi community and his adoptive family. Seeking independence from his tense home life, he moves into an apartment in Tokyo. As a 17-year-old living on his own, Rei tends to take poor care of himself, and his reclusive personality ostracizes him from his peers in school and at the shogi hall. However, not long after his arrival in Tokyo, Rei meets Akari, Hinata, and Momo Kawamoto, a trio of sisters living with their grandfather who owns a traditional wagashi shop. Akari, the oldest of the three girls, is determined to combat Rei's loneliness and poorly sustained lifestyle with motherly hospitality. The Kawamoto sisters, coping with past tragedies, also share with Rei a unique familial bond that he has lacked for most of his life. As he struggles to maintain himself physically and mentally through his shogi career, Rei must learn how to interact with others and understand his own complex emotions. [Written by MAL Rewrite]"
    )
    /* ==== End Cypress Studio ==== */
  })
  it('Search works as intended', () => {
    cy.visit('/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.chakra-input').clear()
    cy.get('.chakra-input').type('hunter{enter}')
    cy.get('.css-xi606m > :nth-child(2)').click()
    cy.get('#accordion-button-27 > .col > .row > .chakra-heading').contains(
      'Vampire Hunter D (2000)'
    )
    /* ==== End Cypress Studio ==== */
  })
  it('Sort works as intended', () => {
    cy.visit('/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#accordion-button-2 > .col > .row > .chakra-heading').contains(
      '3-gatsu no Lion'
    )
    cy.get('#dropdown-menu2').click()
    cy.get('.dropdown-menu > :nth-child(1)').click()
    cy.get('#accordion-button-12 > .col > .row > .chakra-heading').contains(
      'Fullmetal Alchemist: Brotherhood'
    )
    /* ==== End Cypress Studio ==== */
  })
  it('Pagination works', () => {
    cy.visit('/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#accordion-button-2 > .col > .row > .chakra-heading').contains(
      '3-gatsu no Lion'
    )
    cy.get('.css-xi606m > :nth-child(2)').click()
    cy.get('#accordion-button-12 > .col > .row > .chakra-heading').contains(
      'Aa! Megami-sama!: Tatakau Tsubasa'
    )
    cy.get('.css-xi606m > :nth-child(1)').click()
    cy.get('#accordion-button-22 > .col > .row > .chakra-heading').contains(
      '3-gatsu no Lion'
    )
    /* ==== End Cypress Studio ==== */
  })
  it('Color theme works', () => {
    cy.visit('/')
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('#accordion-button-2 > .col > :nth-child(2)').should(
      'have.css',
      'background-color',
      'rgb(237, 242, 247)'
    )
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.css-xrxou1').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    )
    cy.get('.chakra-stack > .chakra-button > .chakra-icon > path').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(26, 32, 44)')
    cy.get('#accordion-button-2 > .col > :nth-child(2)').should(
      'have.css',
      'background-color',
      'rgba(226, 232, 240, 0.16)'
    )
    cy.get('.css-xrxou1').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    )
    /* ==== End Cypress Studio ==== */
  })
})

export {}
