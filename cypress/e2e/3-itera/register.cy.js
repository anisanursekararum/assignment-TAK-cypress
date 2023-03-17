import registerPage from "../../support/register-page"
const registerInput = require('../../fixtures/data.json')

describe('Register Itera', () => {
  const RegisterPage = new registerPage()
  const uniqueSeed = Date.now().toString()
  const getUniqueId = () => Cypress._.uniqueId(uniqueSeed)
  it('success register', () => {
    const uniqueId = getUniqueId();
    cy.visit('/')
    cy.get(RegisterPage.register).click()
    cy.url().should('include', '/UserRegister/NewUser')
    cy.get(RegisterPage.firstname).type(registerInput.firstname)
    cy.get(RegisterPage.surname).type(registerInput.surname)
    cy.get(RegisterPage.epost).type(registerInput.epost)
    cy.get(RegisterPage.mobile).type(registerInput.mobile)
    cy.get(RegisterPage.username).type(registerInput.username+uniqueId)
    cy.get(RegisterPage.password).type(registerInput.password)
    cy.get(RegisterPage.conf_password).type(registerInput.password)
    cy.get(RegisterPage.register_button).click()
    cy.get(RegisterPage.register_success).contains('Registration Successful')
  })
})