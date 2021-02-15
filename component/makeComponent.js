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
    console.log(params)

    return {

    }
}

function validateAttributesAndChildrens(params) {
    console.log(params)

    return {

    }
}


const component = createComponentStructure()

component.subscribe(composeHtmlToComponent)
component.subscribe(validateAttributesAndChildrens)

component.makeComponent({ nome: 'Felipe' })







