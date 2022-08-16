export class Login{
    
    enterUsername(){
        cy.get('#Username').type('tripund')
    }

    enterPassword(){
        cy.get('#Password').type('tripund')
    }
    enterClientName(){
        cy.get('#Client').type('sandbox')
    }
    clickLoginButton(){
        cy.xpath('//*[@id="loginForm"]/form/input[4]').click()
    }

}