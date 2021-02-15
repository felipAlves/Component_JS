function makeComponent() {

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

    function createComponentStructure() {

        // para cada filho da div verificar  os attributos e se o elemento é valido
        notifyAll({ ola: '' })

    }

    return {
        subscribe,
        createComponentStructure
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


const newComponent = makeComponent()

newComponent.subscribe(composeHtmlToComponent)
newComponent.subscribe(validateAttributesAndChildrens)

newComponent.createComponentStructure()







