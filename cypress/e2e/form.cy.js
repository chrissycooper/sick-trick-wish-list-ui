describe('empty spec', () => {
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
})