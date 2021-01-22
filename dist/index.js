(() => {

    /**
     * 
     * @param {*} component - Html em forma de objeto para ser convertido  
     */
    function makeComponent(component) {
        this.preFinalHtml = []
        
        const StructurePreFinalHtml = Object.keys(component).map(key => {
            if(component[key].children) {
                let nowObjetc = component[key].children
                console.log(key)
                let found = true
                let childrens = []    
                
                Object.keys(nowObjetc).map(keyMainContainer => {
                    // return console.log(keyMainContainer)
                    Object.keys(nowObjetc[keyMainContainer].attributes).map(attribute => {
                        console.log(keyMainContainer, attribute, nowObjetc[keyMainContainer].attributes[attribute])
                        this.preFinalHtml[key] = [keyMainContainer]
                        this.preFinalHtml[key][keyMainContainer] = [attribute]
                        this.preFinalHtml[key][keyMainContainer][attribute] = `${attribute}='${nowObjetc[keyMainContainer].attributes[attribute]}'`
                    })
                    
                    
                    this.preFinalHtml[key][keyMainContainer] = nowObjetc[keyMainContainer].children 
                    console.log(this.preFinalHtml)
                })

                // Fazer o mesmo funcionamento do código a cima com todos filhos de todos elementos num laço do while
                // nowObjetct na primeira vez será todos filhos do elemento div

                // do {
                   
                //     Object.keys(nowObjetc).map((newKey) => {
                //         childrens[key] = {
                //             elementName: newKey,
                //             children: nowObjetc[newKey]
                //         }

                //         Object.keys(nowObjetc[newKey].attributes).map(keyNowObject => {
                //             this.preFinalHtml[newKey] = [keyNowObject]
                //             this.preFinalHtml[newKey][keyNowObject] = ['value']
                //             this.preFinalHtml[newKey][keyNowObject]['value'] = `${keyNowObject}='${nowObjetc[newKey].attributes[keyNowObject]}'`
                //         })

                //         nowObjetc = nowObjetc[newKey]

                //         if(!nowObjetc[newKey]) {
                //             found = false
                //         }
                //     })

                // } while (found)

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
                h2: {
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
    },)

    console.log(response)

})()