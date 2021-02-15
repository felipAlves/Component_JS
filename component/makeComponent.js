function createComponentStructure() {

    const state = {
        observers: []
    }

    function subscribe(observerFunction) {
        state.observers.push(observerFunction)
    }

    function notifyAll(params) {
        console.log(`notificando para ${state.observers.length} observers`)

        for(const observerFunction of state.observers) {
            observerFunction(params)
        }
    }

    function makeComponent(params) {

        // para cada filho da div verificar  os attributos e se o elemento é valido
        notifyAll(params)

    }

    return {
        subscribe,
        makeComponent
    }
}


function composeHtmlToComponent(params) {
    let html = ''

    return {
        html
    }
}

function validateAttributesAndChildrens(params) {
    let errors = []

    return {
        errors
    }
}


const component = createComponentStructure()

component.subscribe(composeHtmlToComponent)
component.subscribe(validateAttributesAndChildrens)

component.makeComponent({ nome: 'Felipe' })







