
    export function navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    export function addTodo(todoText) {
        cy.get('.new-todo').type(todoText + '{enter}')
    }

    export function validateTodoTxt(todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
    }

    export function clickToggle() {
        cy.get('.toggle').click()
    }

    export function assertLengthTodo(leng) {
        cy.get('.todo-list li').should('have.length', leng)
    }

