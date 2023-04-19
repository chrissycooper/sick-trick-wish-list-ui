describe('Check the user flow of adding a new trick to the DOM.', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: "tricks.json"
    })
    .visit('http://localhost:3000/')

    cy.intercept("POST", 'http://localhost:3001/api/v1/tricks', {
      fixture: "post-trick.json"
    })
  })

  it('Should have only two tricks at first', () => {
    cy.contains('manual').should('exist')
    cy.contains('Shove-It').should('not.exist')
    cy.get('button')
  })

  it('Should be able to complete the form and submit', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      fixture: "tricks-plus.json"
    })
    cy.get('[placeholder="Name of Trick"]')
    .type('Shove-it')
    .should('have.value', 'Shove-it')

    cy.get('[placeholder="Tutorial Link"]')
    .type('Shove-it tutorial link')
    .should('have.value', 'Shove-it tutorial link')

    cy.get('#stance')
    .select('regular')

    cy.get('#obstacle')
    .select('flatground')

    cy.get('button').click()


    cy.contains('Shove-it')
  })
})