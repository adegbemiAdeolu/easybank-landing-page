import React from 'react';
import BottomItem from '../components/BottomItem';
import Blog from './Blog';
import blogs from './BlogPosts.json';

export default function Bottom() {
    return (
        <BottomItem>
            <BottomItem.Wrapper>
                <BottomItem.Heading>
                    Latest Articles
                </BottomItem.Heading>

                <BottomItem.ContentWrapper>
                    {blogs.map((item) => (
                    <Blog 
                        {...item}
                        key={item.id} 
                    />
                ))}
                </BottomItem.ContentWrapper>
            </BottomItem.Wrapper>
        </BottomItem>
    )
}
