///<reference types="cypress"/>
require('cypress-xpath');
import {Login} from './pages/login'

const loginRef = new Login

describe('empty spec', () => {
  it.only('Login test 1', function() {
    cy.visit('https://sandbox.webtma.com/')
    cy.viewport(1536, 960)
    loginRef.enterUsername()
    loginRef.enterPassword()
    loginRef.enterClientName()
    loginRef.clickLoginButton()
    cy.wait(3000);
  })
  it('After Login',()=>{
    cy.get('#UserToolBarCollapse > .nav > :nth-child(1) > a').click()
    // cy.xpath('//*[@id="entryContainer"]/div/div/div/div/dl/dd[1]/input').type('test project')
    cy.get("input[aria-label='Tab Name']").type('test project');
    cy.wait(2000)
    cy.xpath('//*[@id="entryContainer"]/div/div/div/div/dl/dd[2]/input').type('test project description')
    cy.xpath('//*[@id="divContentEntryPanel1"]/div/div[2]/div/div/div/button[1]').click()
    cy.xpath('//*[@id="divContentEntryPanel1"]/div/div[2]/div/div/div/button[2]').click()
    cy.xpath('//*[@id="UserToolBarCollapse"]/ul/li[2]/a').click()
    cy.get(':nth-child(1) > .dropdown-toggle').click()
    //cy.get('.open > .dropdown-menu').should('contain',"My Dashboard")
  })
})