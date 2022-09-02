import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './counter-example/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

// tüm statelerimizi topladığımız ve onlara global olarak erişmemizi sağlayan, bir nevi ana depo burası.