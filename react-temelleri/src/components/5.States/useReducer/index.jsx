//* Birden fazla state'in kullanıldığı kompleks yapılarda useState yerine kullanılabilir.

/* Çok kompleks projelerde zaten Redux gibi alternatifler olduğu için pek kullanılmıyor.
    Bir miktar karmaşık geldiği için üstünde durmadım. Lazım olduğunda şu linke göz at: */

//? https://github.com/tayfunerbilen/react-bootcamp-notlari/blob/main/Gun-2.md#usereducer-kullan%C4%B1m%C4%B1

//? https://www.youtube.com/watch?v=i2_zltNQADA

//! Örnek Kodlar: 
//TODO: Bir ara incelenecek

import {useReducer} from "react";

import ReactPlayer from 'react-player'
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';

function reducer(state, action) {
    // eslint-disable-next-line
	switch (action.type) {
		case 'UPDATE_TODO':
			return {
				...state,
				todo: action.value
			}

		case 'ADD_TODO':
			return {
				...state,
				todo: '',
				todos: [...state.todos, action.todo]
			}

		case 'DELETE_TODO':
			return {
				...state,
				todos: [...state.todos.filter((t, i) => i !== action.index)]
			}
	}
}

function Todos() {

	const [state, dispatch] = useReducer(reducer, {
		todos: [],
		todo: ''
	})

	const addTodo = () => {
		dispatch({ type: 'ADD_TODO', todo: state.todo })
	}

	const deleteTodo = index => {
		dispatch({ type: 'DELETE_TODO', index })
	}

	return (
		<>
            <h2>useReduce</h2>
            <describe>
                Birden fazla state'in kullanıldığı kompleks yapılarda useState yerine kullanılabilir.

                Çok kompleks projelerde zaten Redux gibi alternatifler olduğu için pek kullanılmıyor.
                Bir miktar karmaşık geldiği için üstünde durmadım. Lazım olduğunda 
                şu <a href="https://github.com/tayfunerbilen/react-bootcamp-notlari/blob/main/Gun-2.md#usereducer-kullan%C4%B1m%C4%B1">Link</a>e göz at.

                <ReactPlayer url='https://www.youtube.com/watch?v=i2_zltNQADA'/>
            </describe>

            <h4>Örnek Çıktıları</h4>
            <h3>To-Do App</h3>
			<InputText  type="text" value={state.todo} onChange={e => dispatch({ type: 'UPDATE_TODO', value: e.target.value })}/>
			<Button className="p-button-raised p-button-success p-button-text" disabled={!state.todo} onClick={addTodo}>Ekle</Button>
			<ul>
				{state.todos.map((todo, index) => (
					<li onClick={() => deleteTodo(index)} key={index}>{todo}</li>
				))}
			</ul>
		</>
	)
}

export default Todos