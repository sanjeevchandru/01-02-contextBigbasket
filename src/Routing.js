import React, { useReducer } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import {Home} from './Context/Router/Home'
import {Cart} from './Context/Router/Cart'
import {Favoriate} from './Context/Router/Favoriate'
import {context} from './Context/Context1/Context'
import {state,updateState} from './Context/Context1/Reducer'
import { Uniquedetails } from './Context/Router/Uniquedetails'
export const Routing=()=>{
    const [a,b]=useReducer(updateState,state)
    return(
        <context.Provider value={{a,b}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/fav" element={<Favoriate/>}/>
                <Route path='/det' element={<Uniquedetails/>}/>
            </Routes>
        </BrowserRouter>
        </context.Provider>
    )
}