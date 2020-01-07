// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
  Cypress.Commands.add('createTodo',(title, description, points) => {
    cy.get('#todo-title')
      .type(title)

    cy.get('#todo-description')
      .type(description)

    cy.get('#todo-points')
      .type(points)
  })

  Cypress.Commands.add('eraseTodoForm', () => {
    cy.get('#todo-title')
      .clear();

    cy.get('#todo-description')
      .clear();

    cy.get('#todo-points')
      .clear();
  })

  Cypress.Commands.add('createAndAddTodo', (title, description, points) => {
    cy.createTodo(title, description, points);
    cy.get('.add-todo-task').click();
    cy.eraseTodoForm();
  })

  Cypress.Commands.add('createDefaultDoing', (title, description, points) => {
    cy.createAndAddTodo(title, description, points);
    cy.get('.move-to-doing').click();
  })


// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
