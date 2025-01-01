import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { data } from '../helper/data';
import PlayerCard from './PlayerCard';

const CardContainer = () => {
    const [input, setInput] = useState("");
    return (
        <div className='mt-3'>
            <Form.Control type="search" placeholder="Search Player.." className='w-25 m-auto' onChange={(e) => setInput(e.target.value)} />
            <div className='card-container my-4 p-3'>
                <Row className='g-3 justify-content-center'>
                    {data
                        .filter((player) => player.name.toLowerCase().includes(input.trim().toLowerCase()))
                        .map((player, index) => {
                            return (
                                <Col md={6} lg={4} xl={3} key={index}>
                                    <PlayerCard {...player} />
                                </Col>
                            )
                        })}
                </Row>

            </div>
        </div>
    )
}

export default CardContainer