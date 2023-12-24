class CheckOutPage{
    clickOnCheckOutBtn(){
        return cy.contains('button','Checkout').click()
    }
}
const checkOutPage = new CheckOutPage()
export default checkOutPage