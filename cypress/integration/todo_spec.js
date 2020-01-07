describe('first test', () => {
  const title = 'my todo';
  const description = 'description'
  const points = 5;
  const defaultTodo = () => cy.createTodo(title, description, points);

  context('To Do Section', () => {
    it('can write a todo', () => {
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
      cy.createAndAddTodo(title, description, points);

      const todoTasks = cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(1);
        expect(list.eq(0)).to.contain(title);
        expect(list.eq(0)).to.contain(description);
        expect(list.eq(0)).to.contain(points);
      })
    })

    it('can delete a todo from "To Do" section', () => {
      cy.visit("./index.html");
      cy.createAndAddTodo(title, description, points);

      cy.get('.delete-todo-task').click();
      cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })
    })

    it('deletes the selected todo when there are more than one', () => {
      const todo2title = 'delete me';
      cy.visit("./index.html");
      cy.createAndAddTodo(title, description, points);
      cy.createAndAddTodo(todo2title, description, points);
      cy.get('.delete-todo-task').then(buttons => {
        buttons[1].click();
      })
      cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(1);
        expect(list.eq(0)).to.contain(title);
      })
    })
  })

  context('Doing', () => {
    it('can move todo from "To Do" to "Doing" sections', () => {
      cy.visit("./index.html");
      cy.createAndAddTodo(title, description, points);

      cy.get('.move-to-doing').click();

      cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })
      cy.get('#doing-tasks > li').should((list) => {
        expect(list).to.have.length(1);
        expect(list.eq(0)).to.contain(title);
        expect(list.eq(0)).to.contain(description);
        expect(list.eq(0)).to.contain(points);
      })
    })

    it('can move a todo back to "To Do" section', () => {
      cy.visit("./index.html");
      cy.createAndAddTodo(title, description, points);

      cy.get('.move-to-doing').click();
      cy.get('.return-to-todo').click();

      cy.get('#doing-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })

      cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(1);
        expect(list.eq(0)).to.contain(title);
        expect(list.eq(0)).to.contain(description);
        expect(list.eq(0)).to.contain(points);
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
  context('Done', () => {
    it('can move todo from "Doing" to "Done" sections', () => {
      cy.visit("./index.html");
      cy.createAndAddTodo(title, description, points);

      cy.get('.move-to-doing').click();
      cy.get('.move-to-done').click();

      cy.get('#doing-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })
      cy.get('#done-tasks > li').should((list) => {
        expect(list).to.have.length(1);
        expect(list.eq(0)).to.contain(title);
        expect(list.eq(0)).to.contain(description);
        expect(list.eq(0)).to.contain(points);
      })
    })

    it('can complete a todo from "Done" section', () => {
      cy.visit("./index.html");
      cy.createAndAddTodo(title, description, points);
      cy.get('.move-to-doing').click();
      cy.get('.move-to-done').click();
      cy.get('.complete-button').click();
      cy.get('#done-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })
    })
  })
  context('multiple sections', () => {
    const todo = 'todo';
    const populateAndDeleteSingleTodo = (todoTitle, buttonName) => {
      cy.visit('./index.html');
      cy.createDefaultDoing(title, description, points);
      cy.get('.move-to-done').click();
      cy.createDefaultDoing(title, description, points);
      cy.createAndAddTodo(todoTitle, description, points);
      cy.get(buttonName).click();
    }

    it('doesnt impact other sections when you delete from "To Do"', () => {
      populateAndDeleteSingleTodo(todo, '.delete-todo-task')

      cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })
      cy.get('#doing-tasks > li').should((list) => {
        expect(list).to.have.length(1);
      })
      cy.get('#done-tasks > li').should((list) => {
        expect(list).to.have.length(1);
      })
    })

    it('doesnt impact other sections when you delete from "Doing"', () => {
      populateAndDeleteSingleTodo(todo, '.delete-doing-task')

      cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(1);
      })
      cy.get('#doing-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })
      cy.get('#done-tasks > li').should((list) => {
        expect(list).to.have.length(1);
      })
    })

    it('doesnt impact other sections when you complete from "Done"', () => {
      populateAndDeleteSingleTodo(todo, '.complete-button')

      cy.get('#to-do-tasks > li').should((list) => {
        expect(list).to.have.length(1);
      })
      cy.get('#doing-tasks > li').should((list) => {
        expect(list).to.have.length(1);
      })
      cy.get('#done-tasks > li').should((list) => {
        expect(list).to.have.length(0);
      })
    })
  })
})
