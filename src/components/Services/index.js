import React from 'react';
import { Container, Wrapper, Heading, SubHeading, MapWrapper } from './ServicesElements';

export default function Services({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Services.Wrapper = function ServicesWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
}

Services.Heading = function ServicesHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>;
}

Services.SubHeading = function ServicesSubHeading({ children, ...restProps }) {
    return <SubHeading {...restProps}>{children}</SubHeading>;
}

Services.MapWrapper = function ServicesMapWrapper({ children, ...restProps }) {
    return <MapWrapper {...restProps}>{children}</MapWrapper>;
}

