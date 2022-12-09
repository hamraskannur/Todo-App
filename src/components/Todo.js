import React from 'react'
import { useState } from "react"
import "./Todo.css"

function Todo() {
    const [toDos, setToDOs] = useState([])
    const [toDo, setToDO] = useState('')
    function addTodo() {
        if (toDo) {
            setToDOs([...toDos, { id: Date.now(), text: toDo, Status: false }])
            setToDO('')
        }
    }
    return (
        <div className='Todo-container'>
            <div className="mainHeading">
                <h1>ToDo List</h1>
            </div>
            <div className="subHeading">
                <br />
                <h2>All Todo 🌝 </h2>
            </div>
            <div className="input">
                <input value={toDo} onChange={(e) => setToDO(e.target.value)} type="text" placeholder="🖊️ Add item..." />
                <i onClick={addTodo} className="fas fa-plus"></i>
            </div>
            <div className="todos">
                { toDos.map((value) => {
                        return (
                            <div className="todo">
                                <div className="left">
                                    <input onChange={(e) => {
                                        setToDOs(toDos.filter(obj2 => {
                                            if (obj2.id === value.id) {
                                                obj2.Status = e.target.checked }
                                            return obj2
                                        }))
                                    }} value={value.Status} type="checkbox" name="" id="" />
                                    <p className={value.Status ? "success" : "pending"}>{value.text}</p>
                                </div>
                                <div className="right">
                                    <i className="fas fa-times"
                                     onClick={() => setToDOs(toDos.filter(obj2 => {
                                        let temp;
                                        if (obj2.id !== value.id) {
                                          temp = obj2 }
                                        return temp;
                                      }))} ></i>
                                </div>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Todo
