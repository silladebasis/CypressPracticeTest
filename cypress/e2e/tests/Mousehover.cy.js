describe('Mouse Over',() => {
    it('mouse over test',() => {
        cy.visit('https://practice-automation.com/hover/')
        //cy.get('#mouse_over').invoke('show').click().should('contain.text','You did it!')
        cy.get('#mouse_over').trigger('mouseover').should('contain.text','You did it!')
    })
})