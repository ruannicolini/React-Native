import React from 'react';
import { View, Button } from 'react-native';

const Comando = props => (
    <View>
        <Button title='comando' onPress={ props.acao } />
    </View>
);

export { Comando }