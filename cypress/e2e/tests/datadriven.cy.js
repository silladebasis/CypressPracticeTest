describe('Data driven using fixtures',() => {
    let userData;
    beforeEach(() => {
        cy.fixture('example.json').then((data) => {
            userData = data
        })
    })
    it('DDT using fixtures',() => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(userData.name)
        cy.get('#exampleFormControlSelect1').select(userData.gender)

        //verify the name field has prooperty min leneth
        cy.get('.form-group>input[name="name"]').should('have.attr','minlength','2')
        
        //verify whether the entrepreneur is disabled
        cy.get('#inlineRadio3').should('be.disabled')

        //check whether the two binding works or not
        cy.get('input[name="name"]:nth-child(2)').should('have.value',userData.name)

        cy.contains('Shop').click()

        userData.productName.forEach(function(element){
            cy.log(element)
            cy.selectProduct(element)
        })
        //get all the card titles and iterate 
        //cy.selectProduct('Nokia Edge')
        //cy.selectProduct('Blackberry')
    })
})