describe('first test', () => {
  const title = 'Todo1';
  const description = 'Todo1Description'
  const points = 5;
  const defaultTodo = () => cy.createTodo(title, description, points);

  context('To Do Section', () => {
    it('Can write a todo', () => {
      cy.visit("./index.html");

      cy.get('#todo-title')
        .type('Shop for food')
        .should('have.value', 'Shop for food');

      cy.get('#todo-description')
        .type('get some fresh veg')
        .should('have.value', 'get some fresh veg');

      cy.get('#todo-points')
        .type('3')
        .should('have.value', '3');
    })

    it('can add a todo to "To Do" section', () => {
      cy.visit("./index.html");
      defaultTodo();
      cy.get('.add-todo-task').click();

      const todoTasks = cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(1);
        expect(list.eq(0)).to.contain('Todo1');
        expect(list.eq(0)).to.contain('Todo1Description');
        expect(list.eq(0)).to.contain('5');
      })
    })

    it('can delete a todo from "To Do" section', () => {
      cy.visit("./index.html");
      defaultTodo();
      cy.get('.add-todo-task').click();

      cy.get('.delete-todo-task').click();
      cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })
    })
  })

  context('Doing', () => {
    it('can move todo from "To Do" to "Doing" sections', () => {
      cy.visit("./index.html");
      defaultTodo();
      cy.get('.add-todo-task').click();
      cy.get('.move-to-doing').click();

      cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })
      const doingTasks = cy.get('#doing-tasks > li').should((list) => {
        expect(list).to.have.length(1);
        expect(list.eq(0)).to.contain('Todo1');
        expect(list.eq(0)).to.contain('Todo1Description');
        expect(list.eq(0)).to.contain('5');
      })
    })
    it('can delete a todo from "Doing" section', () => {
      cy.visit("./index.html");
      defaultTodo();
      cy.get('.add-todo-task').click();
      cy.get('.move-to-doing').click();
      cy.get('.delete-doing-task').click();
      cy.get('#doing-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })
    })
  })
})
