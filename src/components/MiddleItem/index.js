import React from 'react';
import { Container, ImageWrapper, Image, Title, SubTitle } from './MiddleItemElements';

export default function MiddleItem({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

MiddleItem.ImageWrapper = function MiddleItemImageWrapper({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
}

MiddleItem.Image = function MiddleItemImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

MiddleItem.Title = function MiddleItemTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

MiddleItem.SubTitle = function MiddleItemSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}
