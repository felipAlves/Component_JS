(() => {

    /**
     * 
     * @param {*} component - Html em forma de objeto para ser convertido  
     */
    function makeComponent(component, componentName) {
        this.preFinalHtml = []
        
        const StructurePreFinalHtml = Object.keys(component).map(key => {
            if(component[key].children) {
                let nowObjetc = component[key].children
                let found = true
                let childrens = []    
                
                Object.keys(component[key].attributes).map(keyMainContainer => {
                    this.preFinalHtml[key] = [keyMainContainer]
                    this.preFinalHtml[key][keyMainContainer] = `${keyMainContainer}='${component[key].attributes[keyMainContainer]}'`
                })

                do {
                   
                    Object.keys(nowObjetc).map((newKey) => {
                        childrens[key] = {
                            elementName: newKey,
                            children: nowObjetc[newKey]
                        }

                        Object.keys(nowObjetc[newKey].attributes).map(keyNowObject => {
                            this.preFinalHtml[newKey] = [keyNowObject]
                            this.preFinalHtml[newKey][keyNowObject] = `${keyNowObject}=${nowObjetc[newKey].attributes[keyNowObject]}'`
                        })

                        nowObjetc = nowObjetc[newKey]

                        if(!nowObjetc[newKey]) {
                            found = false
                        }
                    })

                } while (found)

                return this.preFinalHtml
            }

            
        });

        return StructurePreFinalHtml
    }


    const response = makeComponent({
        div: {
            attributes: {
                class: "MainComponent",
                style: 'border: none;'
            },
            children: {
                h1: {
                    children: {
                        p: {
                            content: 'ola'
                        }
                    },
                    attributes: {
                        class: 'title'
                    }
                },
            }
        }
    }, 'MainComponent')

    console.log(response)

})()