import React from 'react'
import {Card, Button, Accordion, CardTitle, CardSubtitle, CardImg} from 'react-bootstrap';

export default function ViewStaff(props) {
    return (
        <div>
                <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        {props.staffName}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body style={{textAlign:'left',}}>
                        <p><b>Staff Id : </b>{props.staffId}</p>
                        <p><b>Staff email : </b>{props.email}</p>
                        <p><b>Staff Day Off : </b>{props.dayOff}</p>
                        <p><b>Staff Office Location : </b>{props.officeLocation}</p>
                        <p><b>Staff Age :</b> {props.staffAge}</p>
                        <p><b>Staff Gender :</b> {props.staffGender}</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                {/* <p>  </p> */}
        </div>
    )
}