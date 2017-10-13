import React, { Component } from 'react';
import TaskList from './TaskList'

export default class PluralTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native'
                },
            ],
        };
    }

    render() {
        return (
            <TaskList/>
        );
    }
}