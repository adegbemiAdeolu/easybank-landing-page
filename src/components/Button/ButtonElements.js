import styled from 'styled-components';
import {colors} from '../../utils/utils';

export const Container = styled.button`
    display: flex;
    width: fit-content;
    border: none;
    outline: none;
    padding: 0.8rem 2.2rem;
    border-radius: 50px;
    background-image: linear-gradient(to right, ${colors.limegreen} , ${colors.brightcyan});
`

export const Text = styled.p`
    color: ${colors.white};
    font-weight: 700;
`

export const Icon = styled.h1`

`