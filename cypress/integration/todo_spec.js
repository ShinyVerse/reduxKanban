describe('first test', () => {
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
    cy.createTodo('Todo1', 'Todo1Description', 5);
    cy.get('.add-todo-task').click();

    const todoTasks = cy.get('#to-do-tasks > li').should((list) => {
      expect(list).to.have.length(1);
      expect(list.eq(0)).to.contain('Todo1');
      expect(list.eq(0)).to.contain('Todo1Description');
      expect(list.eq(0)).to.contain('5');
    })
    // cy.createTodo('Todo1', 'Todo1Description', 5);


    //
    // todoTasks.should('have.length', 1);
    // todoTasks
    // cy.get('#todo-title')
    //   .type('Shop for food')

    // expect(todoTasks.contains('Todo1'));
  })

})
