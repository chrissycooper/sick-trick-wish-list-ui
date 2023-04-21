describe('delete a trick', () => {
beforeEach(()=> {
  cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
    statusCode: 200,
    fixture: "tricks.json"
  })
  .visit('http://localhost:3000/')
})

  it('should display two tricks', () => {
    cy.get('.tricks-container > :nth-child(1)')
    cy.get(':nth-child(1) > h2')
    cy.get(':nth-child(2) > h2')
  })

  it('should be able to delete a trick', () => {
    cy.get(':nth-child(1) > button').click()
    cy.get(':nth-child(2) > h2').should('not.exist')
  })
})