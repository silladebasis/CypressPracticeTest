describe('Usage of traversal commands',() => {
    it('filter command in cypress',() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.inventory_list div.inventory_item_description a div').filter('.inventory_item_name ').eq(1).should('contain','Sauce Labs Bike Light')
    })
})