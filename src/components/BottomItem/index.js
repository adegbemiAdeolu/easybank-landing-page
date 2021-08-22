import React from 'react';
import { Container, Wrapper, Heading, ContentWrapper } from './BottomItemElements';

export default function BottomItem({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

BottomItem.Wrapper = function BottomItemWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
}

BottomItem.Heading = function BottomItemHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>;
}

BottomItem.ContentWrapper = function BottomItemContentWrapper({ children, ...restProps }) {
    return <ContentWrapper {...restProps}>{children}</ContentWrapper>;
}

