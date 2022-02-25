class LoginPage{
    navigate() {
        cy.visit('https://www.xelerate.solutions/login')
    }
    enterEmail(username){
        cy.get('[id=Username]').clear().type('username')
        return this
    }
}
