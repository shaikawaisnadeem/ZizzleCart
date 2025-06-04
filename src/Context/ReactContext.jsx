import {createContext} from 'react'
const ReactContext= createContext({
    itemsinCart: [],
    addingItem: ()=>{},
    itemsInList: [],
    addingIteminWish: ()=>{}, 
});
export default ReactContext