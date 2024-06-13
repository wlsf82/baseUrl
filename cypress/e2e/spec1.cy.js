Cypress.config('baseUrl', 'https://cac-tat.s3.eu-central-1.amazonaws.com/')

describe('template spec 1', () => {
  it('passes', () => {
    cy.visit('index.html')
  })
})