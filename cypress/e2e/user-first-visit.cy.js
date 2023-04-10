describe('first visit display', () => {
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

  it('should display the title', () => {
    cy.get('h1')
    .contains("Sick Trick Wish List")
    cy.get('[placeholder="Name of Trick"]')
    cy.get('button')
  })

  it('Should display the form', () => {
    cy.get('[placeholder="Name of Trick"]')
    cy.get('button')
  })

  
  it('Should display the tricks', () => {
    cy.get('.tricks-container > :nth-child(1)')
    cy.get(':nth-child(1) > h2')
    cy.get('.tricks-container > :nth-child(1) > :nth-child(2)')
    cy.get('.tricks-container > :nth-child(1) > :nth-child(3)')
    cy.get('.tricks-container > :nth-child(1) > :nth-child(4)')
  })
})
