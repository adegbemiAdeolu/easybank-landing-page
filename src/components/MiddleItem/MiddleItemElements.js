import styled from 'styled-components'
import { colors } from '../../utils/utils'

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 1rem;
`

export const ImageWrapper = styled.div`
    
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    -o-object-fit: contain;
    margin-bottom: 2rem;
`
export const Title = styled.h3`
    margin-bottom: 1.5rem;
`
export const SubTitle = styled.p`
    width: 80%;
    color: ${colors.greyishblue};
`