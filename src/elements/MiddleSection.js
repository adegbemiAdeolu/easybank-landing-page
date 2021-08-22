import React from 'react';
import Services from '../components/Services';
import Item from './Item';
import data from './Data.json';



export default function MiddleSection() {
    return (
        <Services>
            <Services.Wrapper>
                <Services.Heading>
                    Why choose Easybank?
                </Services.Heading>
                
                <Services.SubHeading>
                    We leverage Open Banking to turn your bank account into your financial hub. Control  your finances like never before.
                </Services.SubHeading>
                
                <Services.MapWrapper>
                    {data.map((item) => (
                    <Item 
                        {...item}
                        key={item.id} 
                    />
                ))}
                </Services.MapWrapper>
            </Services.Wrapper>
        </Services>
    )
}
