import homePage from "../pages/HomePage";
import productPage from "../pages/productsPage";
import checkOutPage from "../pages/CheckOutPage";
import purchasePage from "../pages/PurchasePage";

describe('E2E test scenarios',() => {
    let userData;
    beforeEach(() => {
        cy.fixture('example.json').then((data) => {
            userData = data
        })
    })
    it('Purchase Order Test',() => {
        let baseURL = Cypress.env('url')
        cy.visit(baseURL + '/angularpractice/')
        homePage.enterName(userData.name).selectGender(userData.gender)
        
        homePage.getEntrepeneur().should('be.disabled')

        homePage.getTwoWayBinding().should('have.value',userData.name)
       
        homePage.clickOnShop()

        userData.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        productPage.clickOnCheckout()
        let sum = 0
        cy.get('tbody tr td:nth-child(4) strong').each(function(price){
            const price_txt = price.text().split(" ")
            sum = Number(sum) + Number(price_txt[1].trim())     
        })
        
        cy.get('tbody tr:nth-child(3) td h3>strong').then(function(totalPrice){
            const totalPrice_txt = totalPrice.text().split(" ")
            expect(sum).to.equal(Number(totalPrice_txt[1].trim()))
        })

        checkOutPage.clickOnCheckOutBtn()
        purchasePage.enterCountry("Ind")
        cy.get('div.suggestions>ul>li>a').each((item,index)=>{
            let country = item.text()
            cy.log(country)
            if(country === "India"){
                cy.wrap(item).click()
            }
        })
        purchasePage.clickOnCheckBox().clickOnPurchaseBtn()
        purchasePage.getSuccessMsg().should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    })
})