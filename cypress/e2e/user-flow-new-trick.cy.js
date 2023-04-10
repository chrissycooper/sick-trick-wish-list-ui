describe('Check the user flow of adding a new trick to the DOM.', () => {
  beforeEach(()=> {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      body: [
          {
            "stance": "regular",
          "name": "manual",
          "obstacle": "raised ground",
          "tutorial": "a url!",
          "id": "5"
          },
          {
          "stance": "regular",
          "name": "manual",
          "obstacle": "raised ground",
          "tutorial": "a url!",
          "id": "5"
          }
        ]
    })
    .visit('http://localhost:3000/')
  })

  it('Should display the form', () => {
    cy.get('[placeholder="Name of Trick"]')
    cy.get('button')
  })

  it('Should reflect the value', () => {
    cy.get('[placeholder="Name of Trick"]')
    .type('Shove-it')
    .should('have.value', 'Shove-it')
  })

  it('Should be able to complete the form and submit', () => {
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