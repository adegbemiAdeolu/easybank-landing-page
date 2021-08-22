import React from 'react';
import { Container, Text, Icon } from './ButtonElements';

export default function Button({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Button.Text = function ButtonText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Button.Icon = function ButtonIcon({ children, ...restProps}) {
    return <Icon {...restProps}>{children}</Icon>;
}
