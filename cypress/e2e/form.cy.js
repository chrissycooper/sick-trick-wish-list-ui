describe('when data is put into the form, the value is reflected in that form input.', () => {
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

})