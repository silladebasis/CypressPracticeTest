describe('Add to Cart Test', () => {
  it('Click on add to cart on specific element - 1st way', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.brand').should('have.text','GREENKART')
    cy.get('.search-keyword').type('CA')
    cy.wait(2000)
    cy.get('.products div.product:visible').should('have.length', 4)
    cy.get('.products div.product').find('h4').each((item, index, list) => {
      let eleText = item.text()
      if (eleText.includes('Carrot')) {
        cy.get('.product-action button').eq(index).click()
      }
    })
  })

  it('Click on add to cart on specific element - 2nd way',() => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.brand').invoke('text').should('equal','GREENKART')
    cy.get('.search-keyword').type('CA')
    cy.wait(2000)
    cy.get('.products div.product').as('Product')
    cy.get('@Product').find('h4').each((item,index,list) => {
      cy.get(item).invoke('text').then((text) => {
        if (text.includes('Carrot')) {
          cy.get('.product-action button').eq(index).click()
        }
      })
    })    
  })
})