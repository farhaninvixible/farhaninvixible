

describe('Verifying login functionality', () => {
  it('Should not allow user to login', () => {


    let username = 'abc'
    let password = 'abc'

    let url = 'https://www.xelerate.solutions/login'
     cy.visit(url)
     cy.get('input[type= "text"]').type(username)
     cy.get('input[type= "password"]').type(password)
     // Click on Login button
     cy.get('button[type="button"]').contains('LOGIN').click().wait(1000)
     // writing assertion should have output credentials not valid
     cy.contains("Credentials not valid!").should("exist")
    //  cy.contains("Credentials not valid!").should("exist")
})
  
  
  it('Should allow user to login', () => {


        let username = 'farhan.qazi@invixible.com'
        let password = '@Test123'

        // let url = 'https://www.xelerate.solutions/login'
        //  cy.visit(url)
         cy.get('input[type= "text"]').clear().type(username)
         cy.get('input[type= "password"]').clear().type(password)
         // Click on login button
         cy.get('button[type="button"]').contains('LOGIN').click()
         .wait(10000)
         cy.contains('Solutions').should('be.visible')
        //  cy.get('selector').should('have.text', 'Farhan qazi')
        
    })
  })