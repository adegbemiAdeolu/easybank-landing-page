import React from 'react'
import Button from '../components/Button'

export default function HomeButton() {
    return (
        <>
            <Button to="/">
                <Button.Text>Request Invite</Button.Text>            
            </Button>
        </>
    );
}
