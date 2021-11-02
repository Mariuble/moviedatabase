import cypress from 'cypress'
import '@testing-library/cypress/add-commands'

describe('renders front page', () => {
  it('renders correctly', () => {
    cy.visit('/')
    cy.get('.chakra-input').clear()
    cy.get('.chakra-input').type('Hunter x Hunter OVA{enter}')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#dropdown-menu2')
    cy.get('#dropdown-menu2')
    cy.get('.chakra-input')
    cy.get('.chakra-input__group > .chakra-button > .chakra-icon > path')
    cy.get('[href="/RegisterMovie"]')
    cy.get('[href="/Anime"]')
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.chakra-heading').click()
    /* ==== End Cypress Studio ==== */
  })
  it('Episode have all attributes it needs', () => {
    cy.visit('/')
    cy.get('.chakra-input').clear()
    cy.get('.chakra-input').type('Hunter x Hunter OVA{enter}')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.chakra-heading').contains('Hunter x Hunter OVA')
    cy.get('.col > :nth-child(2)').contains('Score: 8.39')
    cy.get('.col > :nth-child(3)').contains('Type: OVA')
    cy.get('.col > :nth-child(4)').contains('Episodes: 8')
    cy.get('p').contains(
      "After reuniting with Gon and his friends, Kurapika explained to them the risks he bears because of his abilities. Believing that his target of revenge is no longer alive and the search for his fallen comrade's eyes could truly begin, Kurapika soon after receives a message informing him that all the Spiders still lived. After much discussion between his friends, Gon, Kurapika and company decided to hunt after the one Spider member who's ability could ultimately result in Kurapika's defeat and death. Based on the manga by Togashi Yoshihiro."
    )
    /* ==== End Cypress Studio ==== */
  })
  it('Search works as intended', () => {
    const searchWord = 'Hunter x Hunter OVA'
    cy.visit('/')
    cy.get('.chakra-input').clear()
    cy.get('.chakra-input').type(searchWord + '{enter}')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.chakra-heading').contains(searchWord)
    /* ==== End Cypress Studio ==== */
  })
  it('Sort works as intended', () => {
    const searchWord = 'Hunter x Hunter'
    cy.visit('/')
    cy.get('.chakra-input').clear()
    cy.get('.chakra-input').type(searchWord + '{enter}')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.chakra-heading').contains(searchWord)
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#accordion-button-12 > .col > :nth-child(2)').contains(
      'Score: 8.47'
    )
    cy.get('#dropdown-menu2').click()
    cy.get('.dropdown-menu > :nth-child(1)').click()
    cy.get('#accordion-button-17 > .col > :nth-child(2)').contains(
      'Score: 9.11'
    )
    /* ==== End Cypress Studio ==== */
  })
  it('Pagination works', () => {
    cy.visit('/Anime')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.chakra-input').clear()
    cy.get('.chakra-input').type('hunt{enter}')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#accordion-button-12 > .col > .row > .chakra-heading').contains(
      'City Hunt'
    )
    cy.get('.css-xi606m > :nth-child(2)').click()
    cy.get('#accordion-button-22 > .col > .row > .chakra-heading').contains(
      'Ghost Hunt'
    )
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.css-xi606m > :nth-child(1)').click()
    cy.get('#accordion-button-30 > .col > .row > .chakra-heading').contains(
      'City Hunt'
    )
    /* ==== End Cypress Studio ==== */
  })
  it('ColorTheme works as intended', () => {
    const searchWord = 'Hunter x Hunter OVA'
    cy.visit('/')
    cy.get('.chakra-input').clear()
    cy.get('.chakra-input').type(searchWord + '{enter}')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.dropdown').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    )
    cy.get('.col > :nth-child(2)').should(
      'have.css',
      'background-color',
      'rgb(237, 242, 247)'
    )
    cy.get('.chakra-heading').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    )
    cy.get('.chakra-stack > .chakra-button').click()
    cy.get('.dropdown').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    )
    cy.get('.col > :nth-child(2)').should(
      'have.css',
      'background-color',
      'rgba(226, 232, 240, 0.16)'
    )
    cy.get('.chakra-heading').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    )
    /* ==== End Cypress Studio ==== */
  })
})

export {}
