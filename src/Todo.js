import React, {useState} from 'react'

function Todo() {
    // const [strike, setStrike] = useState(false)
    const [todo, setTodo] = useState({val: "", isTrue: false})
    const [todoList, setTodoList] = useState([])

    const addTodo = () => {
        setTodoList([...todoList, todo])
    }

    const strikeThrough = (some) => !some.isTrue;

    return (
        <>
            <div>
                <label> Add Todo</label>
                <input value={todo.val} onChange={e => setTodo({...todo, val: e.target.value})} type="text" />
                <button onClick={addTodo}>Add todo</button>
                {
                    todoList.map((v,i) => (
                        <h2 onClick={strikeThrough(v.isTrue)} className={v.isTrue ? "is-done" : ''} key={i}>{v.val}</h2>
                    ))
                }
            </div>
            <style>{`
                        .is-done {
                            text-decoration: line-through;
                        }
                    `}
            </style>
        </>

    )
}

export default Todo
