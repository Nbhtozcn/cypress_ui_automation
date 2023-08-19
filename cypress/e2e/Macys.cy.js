/// <reference types="Cypress"/>
const { Assertion } = require("chai");

describe("Macy's", ()=>
{
it('Navigation Bar', ()=>{
cy.visit("https://www.macys.com");
  cy.get("div[class='redesign-header-fobs-container animated-hide']>ul>li>button").each((button, index) => {
    // Get the name before clicking
    cy.get("div[class='redesign-header-fobs-container animated-hide']>ul>li>a>span")
      .eq(index)
      .text()
      .then((nameBefore) => {
        // Click on the button
        cy.wrap(button).click();
  
        // Get the name after clicking
        cy.get("h1[class='result-category-name h3']")
          .eq(index)
          .text()
          .then((nameAfter) => {
            // Compare the names before and after clicking
            expect(nameBefore).to.equal(nameAfter);
  
            // Optionally, you can also use Cypress assertions here
          });
        cy.visit("https://www.macys.com");  
      });
      
  });



})
})