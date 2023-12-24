describe('Webtable practice',() => {
    it('Webtable test',() => {
        cy.visit('/')
        cy.viewport(1920,1080)
        cy.get('#Email').clear().type('admin@yourstore.com')
        cy.get('#Password').clear().type('admin')
        cy.get('.login-button').contains('Log in').click()
        cy.visit('Admin/Customer/List')
        cy.get('tr td:nth-child(3)').each(($ele,index,list) => {
            const names = $ele.text()
            cy.log(names)
            if(names === "Steve Gates"){
                cy.wrap($ele).prev().then(function(email){
                    let emailValue = email.text()
                    cy.log(emailValue)
                    expect(emailValue).to.be.equal('steve_gates@nopCommerce.com')
                })
            }
        })
    })
})