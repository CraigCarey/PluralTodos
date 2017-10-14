import React, { Component } from 'react';
import { Text } from 'react-native';

export default class TaskForm extends Component {

    static navigationOptions = {
        title: 'Todo Form'
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
        }
    }

    render() {
        return (
            <Text>Add form comes here!</Text>
        );
    }
}
