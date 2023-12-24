describe('Place Order Test', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.brand').invoke('text').should('equal', 'GREENKART')
    })
    it('Add to Cart and Place Order', () => {
        cy.get('.search-keyword').type('CA')
        cy.wait(2000)
        cy.get('.products div.product').as('Product')
        cy.get('@Product').find('h4').each((item, index, list) => {
            cy.get(item).invoke('text').then((text) => {
                if (text.includes('Carrot')) {
                    cy.get('.product-action button').eq(index).click()
                }
            })
        })
        cy.get('.cart-icon>img').click()
        cy.contains('button','PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})