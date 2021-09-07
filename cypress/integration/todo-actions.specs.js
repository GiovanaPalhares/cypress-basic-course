/// <reference types="cypress" />

import {addTodo, assertLengthTodo} from "../page-objects/todo-page"


describe('filtering', () => {

   beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    addTodo('Clean room')
    addTodo('Learn JS')
    addTodo('Use cypress')

    cy.get(':nth-child(1) > .view > .toggle').click()

   })

   it ('should have 3 todos', () => {
       assertLengthTodo(3)
   })

   it ('should have 2 actives', () => {
    cy.get(':nth-child(2) > a').click()
    assertLengthTodo(2)
   })

   it ('should have 1 completed', () => {
    cy.get(':nth-child(3) > a').click()
    assertLengthTodo(1)
   })

})