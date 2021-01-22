(() => {

    /**
     * 
     * @param {*} component - Html em forma de objeto para ser convertido  
     */
    function makeComponent(component, componentName) {
        this.preFinalHtml = []
        
        const objetos = Object.keys(component).map(key => {
            if(component[key].children) {
                let nowObjetc = component[key].children
                let found = true
                let childrens = []    
                
                this.preFinalHtml = Object.keys(component[key].attributes).map(keyMainContainer => {
                    this.preFinalHtml['div'] = [keyMainContainer]
                    this.preFinalHtml['div'][keyMainContainer] = `${keyMainContainer}='${component[key].attributes[keyMainContainer]}'`

                    console.log(preFinalHtml)
                })

                do {
                   
                    Object.keys(nowObjetc).map((newKey) => {
                        childrens[key] = {
                            elementName: newKey,
                            children: nowObjetc[newKey]
                        }

                        nowObjetc = nowObjetc[newKey]

                        if(!nowObjetc[newKey]) {
                            found = false
                        }
                    })

                } while (found)

                return childrens
            }

            
        });

        const [ obj ] = objetos

        return obj
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
                    }
                }   
            }
        }
    }, 'MainComponent')

})()