describe('Turing Cafe Dashboard', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      ok: true,
      fixture: "reservations"
    })
  })

  it('displays all expected elements on the DOM when user first vists', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.app-title').should('exist').contains('Turing Cafe Reservations')
    cy.get('[name="name"]').should('exist')
    cy.get('[name="date"]').should('exist')
    cy.get('[name="time"]').should('exist')
    cy.get('[name="number"]').should('exist')
    cy.get('form > button').should('exist')
    cy.get('article').should('exist')
      .get('h2').contains('Christie')
    cy.get('article').contains('12/29')
    cy.get('article').contains('7:00')
    cy.get('article').contains('Number of guests: 12')
    cy.get('article > button').should('exist')
  });

  it('should reflect user inputed data in form inputs', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[name="name"]').type('Tori').should('have.value', 'Tori')
    cy.get('[name="date"]').type('10/31').should('have.value', '10/31')
    cy.get('[name="time"]').type('7:00').should('have.value', '7:00')
    cy.get('[name="number"]').type('2').should('have.value', '2')
  });

  it('user should be able to add a new reservation that displays to the page', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      ok: true,
      fixture: "toriReservation"
    })
    cy.visit('http://localhost:3000/')
    cy.get('[name="name"]').type('Tori')
    cy.get('[name="date"]').type('10/31')
    cy.get('[name="time"]').type('7:00')
    cy.get('[name="number"]').type('2')
    cy.get('form > button').click()
    cy.get('article').last().should('exist')
      .and('contain', 'Tori')
      .and('contain', '10/31')
      .and('contain', '7:00')
      .and('contain', 'Number of guests: 2')
  });
})
