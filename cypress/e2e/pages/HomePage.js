class HomePage{
    enterName(nameText){
        cy.get('input[name="name"]:nth-child(2)').type(nameText)
        return this
    }
    selectGender(gender){
        cy.get('#exampleFormControlSelect1').select(gender)
        return this
    }
    getNameProperty(){
        cy.get('.form-group>input[name="name"]')
        return this
    }

    getEntrepeneur(){
        return cy.get('#inlineRadio3')
    }

    getTwoWayBinding(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    clickOnShop(){
        return cy.contains('Shop').click()
    }
}

const homePage = new HomePage();
export default homePage