import React from 'react'
import MiddleItem from '../components/MiddleItem'
import image from '../images/icon-online.svg'

export default function Item({ imageicon, title, subtitle}) {
    return (
        <MiddleItem>
            <MiddleItem.Image src={imageicon} />
            
            <MiddleItem.Title>
                {title}
            </MiddleItem.Title>

            <MiddleItem.SubTitle>
                {subtitle}
            </MiddleItem.SubTitle>
        </MiddleItem>
    )
}
