import styled from 'styled-components';
import {colors} from '../../utils/utils'

export const Container = styled.div`
    display: flex;
    padding: 5rem 10rem;
    background: ${colors.lightgrayishblue};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

`

export const Heading = styled.h2`
    margin-bottom: 1rem;

`
export const SubHeading = styled.p`
    width: 40%;
    color: ${colors.greyishblue};
`

export const MapWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3rem auto;
`

