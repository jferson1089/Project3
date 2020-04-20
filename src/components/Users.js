import React, { useEffect, useState } from 'react'
import {
    Card, Col, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Row
} from 'reactstrap';
import UserChirps from './UserChirps'
import { getUserByUsername } from '../service/api-helper';




function Users() {

    const [user, setUser] = useState([])

    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getUserByUsername('adam')
            console.log('get by username?', resp[0].username)
            setUser(resp)

        }
        makeAPICall()
    }, [])



    return (
        <>
            <Col>
                <Card body outline color="warning">
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Username</CardTitle>
                        <CardSubtitle>User Id? Or Real Name</CardSubtitle>
                        <CardText>Something can go here?</CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Row></Row>
                <Card body outline color='danger'>
                    <UserChirps />
                </Card>
            </Col>
        </>
    )
}

export default Users