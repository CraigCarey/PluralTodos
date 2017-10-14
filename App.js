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

    onAddStarted() {
        this.props.navigation.navigate('TaskForm')
    }

    render() {
        return <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos} />;
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
