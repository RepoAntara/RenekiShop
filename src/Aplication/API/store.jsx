import { setupListeners } from '@reduxjs/toolkit/query'
import {configureStore} from '@reduxjs/toolkit'
import { myApi } from './FetchApi'

export const card = configureStore({
    reducer : {
        [myApi.reducerPath] : myApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(myApi.middleware)
})
setupListeners(card.dispatch)

