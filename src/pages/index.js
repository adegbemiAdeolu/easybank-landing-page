import React from 'react';
import { Container } from './HomeElements';
import TopSection from '../elements/TopSection';
import MiddleSection from '../elements/MiddleSection';
import Bottom from '../elements/Bottom';

export default function Home() {
    return (
        <Container>
            <TopSection />
            <MiddleSection />
            <Bottom />
        </Container>
    )
}
