import styled from 'styled-components';
import {colors} from '../../utils/utils'

export const Container = styled.div`
    display: flex;
    height: 600px;
    
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10rem;

`

export const Title = styled.h1`
     width: 400px;
     margin-bottom: 1rem;
`

export const SubTitle = styled.p`
    width: 350px;
    color: ${colors.greyishblue};
    margin-bottom: 1rem;
`

export const Right = styled.div`
    width: 100%;
    justify-content: right;
`

export const Background = styled.div`
    position: relative;
    top: -40%;
    right: 0;
    width: 100%;
    height: 160%;
`

export const BgImage = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    
    

`

export const ImageWrapper = styled.div`
    position: relative;
    right: -10%;
    top: -200%;
    width: 90%;
    height: fit-content;

`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`