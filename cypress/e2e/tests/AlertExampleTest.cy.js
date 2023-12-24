describe('Alerts Example',() => {
    it('Alerts test',() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //window:alert
        cy.on('window:alert',(str) => {
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
            expect(str).contains('share your knowledge')
        })

        cy.on('window:confirm',(str) => {
            expect(str).to.be.equal('Hello , Are you sure you want to confirm?')
        })
    })
})