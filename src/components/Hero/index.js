import React from 'react';
import { Container, Wrapper,Right, Left, Title, SubTitle, Background, BgImage, ImageWrapper, Image } from './HeroElements';

export default function Hero({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Hero.Wrapper = function HeroWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
}

Hero.Right = function HeroRight({ children, ...restProps }) {
    return <Right {...restProps}>{children}</Right>;
}

Hero.Left = function HeroLeft({ children, ...restProps }) {
    return <Left {...restProps}>{children}</Left>;
}

Hero.Title = function HeroTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Hero.SubTitle = function HeroSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}
Hero.Background = function HeroBackground({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Hero.BgImage = function HeroBgImage({ children, ...restProps }) {
    return <BgImage {...restProps}>{children}</BgImage>;
}

Hero.ImageWrapper = function HeroImageWrapper({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
}

Hero.Image = function HeroImage ({ children, ...restProps}) {
    return <Image {...restProps}>{children}</Image>
}