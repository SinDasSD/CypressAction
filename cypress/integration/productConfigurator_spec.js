/// <reference types="Cypress" />
// für IntelliSense beim Schreiben

describe('Product Configurator Tests', function () {
    beforeEach(function () {
        cy.visit('https://www.crowddesk.de');
        Cypress.on('uncaught:exception', function (err, runnable) {
            return false
        })
    })

    // 1.) Einzelprojekte finanzieren
    // Lange Schreibweise

    it('Einzelprojekt, < 1 Mio., Unternehmen', function () {

        cy.contains('Kostenlos konfigurieren')
            .should('be.visible')
            .click();

        cy.get('button.cpf-start-btn')
            .should('be.visible')
            .click();

        cy.get('[data-step="step-2-selection-1"] > .step-item--icon')
            .should('be.visible')
            .click();

        cy.get('.row > :nth-child(1) > .btn')
            .should('be.visible')
            .click();

        cy.get('[data-package="12,16,20"] > .step-item--icon')
            .should('be.visible')
            .click();

        cy.get('.cpf-done')
            .should('have.text', 'GESCHAFFT!')

        /* Textvergleich funktioniert nicht ...
        cy.get('.cpf-result > :nth-child(1)')
            .should('have.text', 'Ich möchte ein einzelnes Projekt finanzieren');

        cy.get('.cpf-result > :nth-child(2)')
            .should('have.text', 'Ich möchte Kapital einwerben in Höhe von: < 1 Mio.')

        cy.get('.cpf-result > :nth-child(3)')
            .should('have.text', 'Ich verfolge das Ziel: ein Unternehmen gründen oder mein Unternehmen vergrößern');
         */

        cy.get('.cpf-result > :nth-child(1)')
            .contains('einzelnes Projekt');

        cy.get('.cpf-result > :nth-child(2)')
            .contains('< 1 Mio.');

        cy.get('.cpf-result > :nth-child(3)')
            .contains('Unternehmen');

    })


    it('Einzelprojekt, < 2,5 Mio., Unternehmen', function () {

        openConfigurator();
        startConfigurator();
        clickSingleProject();
        clickUnderTwoPointFiveMio();
        clickCompany();
        checkSuccess();
        checkResultLineOneForSingleProject();
        checkResultLineTwoForUnderTwoPointFiveMio();
        checkResultLineThreeForCompany();

    })

    // Funktionen zur schnelleren Testerstellung

    function openConfigurator() {
        cy.contains('Kostenlos konfigurieren')
            .should('be.visible')
            .click();
    }

    function startConfigurator() {
        cy.get('button.cpf-start-btn')
            .should('be.visible')
            .click();
    }

    function clickSingleProject() {
        cy.get('[data-step="step-2-selection-1"] > .step-item--icon')
            .should('be.visible')
            .click();
    }

    function clickMultipleProjects() {
        cy.get('[data-step="step-2-selection-2"] > .step-item--icon')
            .should('be.visible')
            .click();
    }

    function clickUnderOneMio() {
        cy.get('.row > :nth-child(1) > .btn')
            .should('be.visible')
            .click();
    }

    function clickUnderTwoPointFiveMio() {
        cy.get('.row > :nth-child(2) > .btn')
            .should('be.visible')
            .click();
    }

    function clickUnderFiveMio() {
        cy.get('.row > :nth-child(3) > .btn')
            .should('be.visible')
            .click();
    }

    function clickOverFiveMio() {
        cy.get(':nth-child(4) > .btn')
            .should('be.visible')
            .click();
    }

    function clickCompany() {
        cy.get('[data-package="12,16,20"] > .step-item--icon')
            .should('be.visible')
            .click();
    }

    function clickBuilding() {
        cy.get('[data-package="21,13,17"] > .step-item--icon')
            .should('be.visible')
            .click();
    }

    function clickEmployees() {
        cy.get('[data-package="22,14,18"] > .step-item--icon')
            .should('be.visible')
            .click();
    }

    function clickOtherProject() {
        cy.get('[data-package="23,15,19"] > .step-item--icon')
            .should('be.visible')
            .click();
    }

    function checkSuccess() {
        cy.get('.cpf-done')
            .should('have.text', 'GESCHAFFT!')
    }

    function checkResultLineOneForSingleProject() {
        cy.get('.cpf-result > :nth-child(1)')
            .contains('einzelnes Projekt');
    }

    function checkResultLineOneForMultipleProjects() {
        cy.get('.cpf-result > :nth-child(1)')
            .contains('mehrere Projekte');
    }

    function checkResultLineTwoForUnderOneMio() {
        cy.get('.cpf-result > :nth-child(2)')
            .contains('< 1 Mio.');
    }

    function checkResultLineTwoForUnderTwoPointFiveMio() {
        cy.get('.cpf-result > :nth-child(2)')
            .contains('< 2,5 Mio.');
    }

    function checkResultLineTwoForUnderFiveMio() {
        cy.get('.cpf-result > :nth-child(2)')
            .contains('< 5 Mio.');
    }

    function checkResultLineTwoForOverFiveMio() {
        cy.get('.cpf-result > :nth-child(2)')
            .contains('> 5 Mio.');
    }

    function checkResultLineThreeForCompany() {
        cy.get('.cpf-result > :nth-child(3)')
            .contains('Unternehmen');
    }

    function checkResultLineThreeForBuilding() {
        cy.get('.cpf-result > :nth-child(3)')
            .contains('Immobilien');
    }

    function checkResultLineThreeForEmployees() {
        cy.get('.cpf-result > :nth-child(3)')
            .contains('Mitarbeiter');
    }

    function checkResultLineThreeForOtherProject() {
        cy.get('.cpf-result > :nth-child(3)')
            .contains('anderes Vorhaben');
    }

    /*
    it('Einzelprojekt, < 5 Mio., Unternehmen', function () {
        
    })

    it('Einzelprojekt, > 5 Mio., Unternehmen', function () {
        
    })

    it('Einzelprojekt, < 1 Mio., Immobilien', function () {
        
    })
    */

    it('Einzelprojekt, < 2,5 Mio., Immobilien', function () {

        openConfigurator();
        startConfigurator();
        clickSingleProject();
        clickUnderTwoPointFiveMio();
        clickBuilding();
        checkSuccess();
        checkResultLineOneForSingleProject();
        checkResultLineTwoForUnderTwoPointFiveMio();
        checkResultLineThreeForBuilding();

    })

    /*
    it('Einzelprojekt, < 5 Mio., Immobilien', function () {
        
    })

    it('Einzelprojekt, > 5 Mio., Immobilien', function () {
        
    })

    it('Einzelprojekt, < 1 Mio., Mitarbeiter', function () {
        
    })

    it('Einzelprojekt, < 2,5 Mio., Mitarbeiter', function () {
        
    })

    it('Einzelprojekt, < 5 Mio., Mitarbeiter', function () {
        
    })

    it('Einzelprojekt, > 5 Mio., Mitarbeiter', function () {
        
    })

    it('Einzelprojekt, < 1 Mio., anderes Vorhaben', function () {
        
    })

    it('Einzelprojekt, < 2,5 Mio., anderes Vorhaben', function () {
       
    })

    it('Einzelprojekt, < 5 Mio., anderes Vorhaben', function () {
        
    })

    it('Einzelprojekt, > 5 Mio., anderes Vorhaben', function () {
        
    })
    */


    // 2.) Mehrere Projekte finanzieren

    /*
    it('Mehrere Projekte, < 1 Mio., Unternehmen', function () {
        
    })

    it('Mehrere Projekte, < 2,5 Mio., Unternehmen', function () {
        
    })

    it('Mehrere Projekte, < 5 Mio., Unternehmen', function () {
        
    })

    it('Mehrere Projekte, > 5 Mio., Unternehmen', function () {
        
    })

    it('Mehrere Projekte, < 1 Mio., Immobilien', function () {
        
    })

    it('Mehrere Projekte, < 2,5 Mio., Immobilien', function () {
        
    })

    it('Mehrere Projekte, < 5 Mio., Immobilien', function () {
        
    })

    it('Mehrere Projekte, > 5 Mio., Immobilien', function () {
        
    })

    it('Mehrere Projekte, < 1 Mio., Mitarbeiter', function () {
        
    })

    it('Mehrere Projekte, < 2,5 Mio., Mitarbeiter', function () {
        
    })
    */

    it('Mehrere Projekte, < 5 Mio., Mitarbeiter', function () {

        openConfigurator();
        startConfigurator();
        clickMultipleProjects();
        clickUnderFiveMio();
        clickEmployees();
        checkSuccess();
        checkResultLineOneForMultipleProjects();
        checkResultLineTwoForUnderFiveMio();
        checkResultLineThreeForEmployees();

    })

    /*
    it('Mehrere Projekte, > 5 Mio., Mitarbeiter', function () {
        
    })

    it('Mehrere Projekte, < 1 Mio., anderes Vorhaben', function () {
        
    })

    it('Mehrere Projekte, < 2,5 Mio., anderes Vorhaben', function () {
        
    })
    
    it('Mehrere Projekte, < 5 Mio., anderes Vorhaben', function () {

        

    })
    */

    it('Mehrere Projekte, > 5 Mio., anderes Vorhaben', function () {

        openConfigurator();
        startConfigurator();
        clickMultipleProjects();
        clickOverFiveMio();
        clickOtherProject();
        checkSuccess();
        checkResultLineOneForMultipleProjects();
        checkResultLineTwoForOverFiveMio();
        checkResultLineThreeForOtherProject();

    })

})