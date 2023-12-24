describe('Tests with checkbox and radio button',() => {
    it('Checkbox and validation',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').check(['option1','option2']).should('be.checked')
        cy.get('input[type="checkbox"]').invoke('attr','value').should('be.oneOf',['option1','option2','option3'])
    })

    it('Static Dropdown test',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option3')
        cy.get('#dropdown-class-example').select('option2')
        cy.get('#dropdown-class-example').then((options) => {
            cy.log(options.text())
        })
    })

    it.only('Dynamic Dropdown test',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type("Ind")
        cy.get('.ui-menu-item div').each((item,index) => {
            let country = item.text()
            if(country === 'India'){
                cy.wrap(item).click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')
    })
})