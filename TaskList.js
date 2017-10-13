import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
});

export default class TaskList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hi, this is the fagging TaskList!</Text>
            </View>
        );
    }
}