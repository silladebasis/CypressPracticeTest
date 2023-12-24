describe('Window Handle Example',() => {
    it('Child window test',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.origin('https://www.qaclickacademy.com/',() => {
            cy.title().should('include','QAClick Academy')
        })
    })
})