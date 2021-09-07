/// <reference types="cypress" />

import * as todoPage from '../page-objects/todo-page'

describe('visual validation', () => {
    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC Hey!'}))
    afterEach(() => cy.eyesClose())

    it('should look good', () => {
        cy.eyesCheckWindow('empty todo list')

        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn JS')

        cy.eyesCheckWindow('two todo')

    
        cy.get(':nth-child(1) > .view > .toggle').click()

        cy.eyesCheckWindow('mark as completed')

    })
})

