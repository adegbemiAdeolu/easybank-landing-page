import React from 'react';
import BlogItem from '../components/BlogItem';

export default function Blog({ blogimage, meta, title, subtitle }) {
    return (
        <BlogItem>
            <BlogItem.ImageWrapper>
                <BlogItem.Image src={blogimage} />
            </BlogItem.ImageWrapper>

            <BlogItem.Meta>
                {meta}
            </BlogItem.Meta>

            <BlogItem.Title>
                {title}
            </BlogItem.Title>

            <BlogItem.SubTitle>
                {subtitle}
            </BlogItem.SubTitle>
        </BlogItem>
    )
}
