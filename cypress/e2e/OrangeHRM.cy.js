/// <reference types="Cypress"/>
describe("OrangeHRM Functionality",()=>{
  describe("Test Suite BEFORE Successful Login",()=>{
    it("TC_MI_02 Error message on unsuccessful Employee login to OrangeHRM portal",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get("input[placeholder='Username']").type("Admin");
      cy.get("input[placeholder='Password']").type("abc123");
      cy.get("button[type='submit']").click();
      cy.get('.oxd-alert-content > .oxd-text').should("be.visible");
  
    })
  })
  
  describe("Test Suite AFTER Successful Login",()=>{
    beforeEach("Login",() => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      cy.get("input[placeholder='Username']").type("Admin");
      cy.get("input[placeholder='Password']").type("admin123");
      cy.get("button[type='submit']").click();
    });

    it("TC_MI_01 Successful Employee Login",()=>{
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("be.visible");
    })

    it("TC_MI_MIM_01 First time user login-information display check",()=>{
      cy.wait(1000);
      cy.get("ul.oxd-main-menu>li:nth-child(6)").click();
      cy.get("input[class='oxd-input oxd-input--active']").each(($el,index)=>{
        cy.wrap($el).should("be.visible");})
    })

    it("TC_MI_MIM_02 Personal details- modification with valid values- 'First Name'",()=>{
      const newName="Jackie";
      cy.get("ul.oxd-main-menu>li:nth-child(6)").click();
      cy.get("input[class='oxd-input oxd-input--active orangehrm-firstname']").clear().type(newName);
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click();
      cy.get("input[class='oxd-input oxd-input--active orangehrm-firstname']").invoke('val').should((actualName) => {
        expect(actualName).to.equal(newName);
      });

    })
  
  })



  })