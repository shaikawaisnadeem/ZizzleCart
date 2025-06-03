import {createContext} from 'react'
const ReactContext= createContext({
    itemsinCart: [],
    addingItem: ()=>{}
});
export default ReactContext