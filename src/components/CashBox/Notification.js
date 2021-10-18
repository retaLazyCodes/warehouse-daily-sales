import React from 'react'
import { Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (

        <>
            <Card
                className='notification'
                bg={'primary'}
                text={'white'}
                style={{ width: '18rem' }}
            >
                <CardHeader>Notificacion</CardHeader>
                <CardBody>
                    <CardTitle>Cierre de caja</CardTitle>
                    <CardText>
                        {message}
                    </CardText>
                </CardBody>
            </Card >
        </>
    )
}

export default Notification