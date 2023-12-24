class ProductsPage{
    clickOnCheckout(){
        return cy.contains('a','Checkout').click()
    }
}

const productPage = new ProductsPage();
export default productPage