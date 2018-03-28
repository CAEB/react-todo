import React, { Component } from 'react'
import { Input, Button, Message  } from "antd"

import List from '../List/List.jsx'

import './root.less'

export default class Root extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            todos: []
        }
    }
    getTodo () {
        let { todos } = this.state,
            value = this.input.input.value.trim()
        if (!value) {
            Message.warning('事务不能为空',2) 
            return
        }
        todos.push({
            value:value,
            isComplete: false,
            isEdit: false
        })
        this.setState({ todos })
        this.input.input.value = ''
    }
    setComplete (index,bool) {
        let { todos } = this.state,
            value = bool.target.checked
        todos[index].isComplete = value
        this.setState( {todos} )
    }
    deleteTodo (index) {
        let { todos } = this.state
        todos.splice(index,1)
        this.setState({ todos })
    }
    completeAll () {
        let { todos } = this.state
        todos.forEach( todo => {
            todo.isComplete = true
        })
        this.setState({todos})
    }
    deleteAll () {
        let { todos } = this.state
        todos = []
        this.setState({todos})
    }
    editTodo (index) {
        let {todos} = this.state
        todos[index].isEdit = true
        this.setState({ todos })
    }
    editTodoList (index,e) {
        let {todos} = this.state
        todos[index].value = e.target.value
        todos[index].isEdit = false
        this.setState({ todos })
    }
    render () {
        const num = this.state.todos.filter( todo => todo.isComplete === false )
        return (
            <div className="header">
                <div className="title">Todos</div>
                <div className="input">
                    <Input ref={ input => { this.input = input } } placeholder="请输入事务" />
                    <Button onClick={ () => this.getTodo() } type="primary"> 添加 </Button>
                </div>
                <List
                    setComplete={ (index,bool) => this.setComplete(index,bool)} 
                    todos={this.state.todos}
                    deleteTodo={ index => this.deleteTodo(index) }
                    editTodo={ index => this.editTodo(index) }
                    editTodoList={ (index,e) => this.editTodoList(index,e) }
                />
                <div className="info">
                    <div className="num">剩余: { num.length }</div>
                    <Button onClick={ () => this.completeAll()} className="completeAll">完成全部</Button>
                    <Button onClick={ () => this.deleteAll()} className="deleteAll">删除全部</Button>
                </div>
            </div>
        )
    }
}