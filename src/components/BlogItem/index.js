import React from 'react';
import { Container, ImageWrapper, Image, Meta, Title, SubTitle } from './BlogItemElements';

export default function BlogItem({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

BlogItem.ImageWrapper = function BlogItemImageWrapper({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
}

BlogItem.Image = function BlogItemImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

BlogItem.Image = function BlogItemImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
}

BlogItem.Meta = function BlogItemMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
}

BlogItem.Title = function BlogItemTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

BlogItem.SubTitle = function BlogItemSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}




