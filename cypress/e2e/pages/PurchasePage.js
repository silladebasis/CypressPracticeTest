class PurchasePage{
    clickOnCheckBox(){
        cy.get('#checkbox2').click({force:true})
        return this
    }
    clickOnPurchaseBtn(){
        cy.get('input[value="Purchase"]').click()
        return this
    }

    getSuccessMsg(){
        return cy.get('div.alert')
    }

    enterCountry(name){
        cy.get('#country').type(name)
    }
}
const purchasePage = new PurchasePage()
export default purchasePage