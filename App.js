import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TaskList from './TaskList'
import TaskForm from "./TaskForm";

class PluralTodo extends Component {

    static navigationOptions = {
        title: 'Todo List'
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [
                {
                    task: 'Learn React Native'
                },
                {
                    task: 'Learn Redux'
                },
            ],
        };
    }

    onAddTask(task) {
        console.log('Adding task: ', task);
        this.props.navigation.goBack(null);
    }

    onCancelAddTask() {
        console.log('Cancelled adding task');
        this.props.navigation.goBack(null);
    }

    onAddStarted() {
        this.props.navigation.navigate('TaskForm',
            { onCancel: this.onCancelAddTask.bind(this),
                onAdd: this.onAddTask.bind(this) })
    }

    render() {
        return <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos} />
    }
}

const AppNav = StackNavigator({
    Home: { screen: PluralTodo },
    TaskForm: { screen: TaskForm }
});

export default class App extends React.Component {
    render() {
        return <AppNav />;
    }
}
