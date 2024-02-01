import details from './details.json'
export const state={
    arr:details.details
}

export const updateState=(state,action)=>{
    if(action.type==="update"){
        console.log("hi",state.arr);
        return {...state,arr:action.payload}
    }
    // else if(action.type==="update"){
    //     return {...state,arr:action.payload}
    // }
    // else if(action.type==="increasecart"){
    //     return {...state,arr:action.payload}
    // }
    // else if(action.type==="decreaseupdate"){
    //     return {...state,arr:action.payload}
    // }
    // else if(action.type==="addupdate1"){
    //     return {...state,arr:action.payload}
    // }
    // else if(action.type==="offerprice"){
    //     return{ ...state,arr:action.payload}
    // }
    // else if(action.type==="priceupdate"){
    //     return {...state,arr:action.payload}
    // }
}