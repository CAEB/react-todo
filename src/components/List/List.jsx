import React, { Component } from 'react'
import { Checkbox, Icon, Input } from 'antd'

import './list.less'

export default class List extends Component {
    constructor () {
        super(...arguments)
    }
    
    render () {
        let todoFlag = null
        const todo = this.props.todos.map( (todo,index) => {
                todoFlag = todo.isEdit ? (
                    <Input onBlur={ e => { this.props.editTodoList(index,e) } } className="todo_list" defaultValue={todo.value} placeholder="请输入事务" />
                ) :
                (
                    <Checkbox
                        className="todo_list"
                        checked= {todo.isComplete}
                        onChange = { (e) => this.props.setComplete(index,e)}
                    >{todo.value}</Checkbox>
                )
                return (
                    <div className="todo" key={index}>
                        {todoFlag}
                        <Icon onClick={() => this.props.editTodo(index)}  type="edit" />
                        <Icon onClick={() => this.props.deleteTodo(index)} type="delete" />
                    </div>
                )
            }
        )
        return (
            <div className="list">
                {todo}
            </div>    
        )
    }
}