/// <reference types="cypress" />

import { navigate, addTodo, validateTodoTxt, clickToggle } from "../page-objects/todo-page"

describe('tests todo list', () => {

    beforeEach(() => {
        navigate()
        addTodo('Clean room')
    })

    it('should add a label', () => {
        validateTodoTxt(0, 'Clean room')
        cy.get('.toggle').should('not.be.checked')
    })

    it('should mark a label as complet', () => {
        clickToggle()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })

    it('should clear completed todos', () => {
        clickToggle()
        cy.contains('Clear').click()
    })
})



