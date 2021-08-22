import React from 'react'
import Hero from '../components/Hero'
import HomeButton from './HomeButton'

import imagesvg from '../images/bg-intro-desktop.svg';
import imagepng from '../images/image-mockups.png';

export default function TopSection() {
    return (
        <Hero>
            <Hero.Wrapper>
                <Hero.Left>
                    <Hero.Title>Next generation digital banking</Hero.Title>
                
                    <Hero.SubTitle>
                        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </Hero.SubTitle>

                    <HomeButton />
                </Hero.Left>

                <Hero.Right>
                    <Hero.Background>
                        <Hero.BgImage src={imagesvg} />
                    </Hero.Background>
                    
                    <Hero.ImageWrapper>
                        <Hero.Image src={imagepng} />
                    </Hero.ImageWrapper>
                
                </Hero.Right>
            </Hero.Wrapper>   
        </Hero>
    )
}
