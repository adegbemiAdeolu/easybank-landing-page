import styled from 'styled-components'
import { colors } from '../../utils/utils';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`



export const ImageWrapper = styled.div`
    width: 250px;
    height: 200px;
    overflow: hidden;
    margin-bottom: 2rem;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const Meta = styled.small`
    font-size: 0.6rem;
    color: ${colors.greyishblue};
    margin-bottom: 1.5rem;
    padding: 0 1rem;
`

export const Title = styled.h4`
    margin-bottom: 1rem;
    width: 80%;
    padding: 0 1rem;
`

export const SubTitle = styled.p`
    color: ${colors.greyishblue};
    width: 80%;
    padding: 0 1rem;
`
