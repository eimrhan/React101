import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({ // bu aslında bizim state'imiz olacak
    name: 'counter', // bir state'e ulaşmak istediğimizde state.name ile ulaşabiliyoruz. (bu örnekte state.counter)
    initialState: {
        // varsayılan değer atanmak istenirse.
        value: 0
    },
    reducers: {
        // bunun içerisine de state'i güncelleyecek olan tanımlar yazılır. (actions)
        decrement: state => {
            state.value -= 1;
        },
        increment: state => {
            state.value += 1;
        },
        reset: state => {
            state.value = 0;
        },
        incrementByAmount: (state, action) => { // state'i kullandığımız komponentteki verileri de action altında buraya alabiliyoruz.
            state.value += Number(action.payload);  // action.payload, bizim dispatch ile gönderdiğimiz parametre oluyor.
        }   // yani sadece state'ten komponente değil, komponentten state'e de property gönderebiliyoruz. (çift taraflı)
    }
})

export default counterSlice.reducer;
// state'imizin reducer'ını dışa aktarıp store'da reducer olarak alıyoruz.

export const { decrement, increment, reset, incrementByAmount } = counterSlice.actions;
// reducer fonskiyonlarımızı da herhangi bir componentte kullanabilmek için actions altında dışa aktarıyoruz.

export const selectValue = state => state.value;
/* ayrıca state değerlerimizi bir çok farklı komponentte çağırmamız gerekecekse, 
selector'ü slice dosyasında tanımlamak kod tekrarını engelleyecektir.. */