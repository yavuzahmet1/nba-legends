import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const PlayerCard = ({ img, name, statistics }) => {
    const [imgShow, setImgShow] = useState(true);

    const change = () => {
        setImgShow(!imgShow)
    }
    return (
        <div>
            <Card
                className='player-card rounded-4 m-auto'
                onClick={change}>
                {imgShow ? (
                    <Card.Img variant="top" src={img} className='player-img' alt='image' />) : (
                    <ul className='m-auto'>
                        {statistics.map((item, index) => {
                            return <li className='h5 text-start list-unstyled'>{item}</li>
                        })}
                    </ul>
                )

                }
                <Card.Footer className='fw-bold d-flex justify-content-center'>
                    <p>{name}</p>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default PlayerCard