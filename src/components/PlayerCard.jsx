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
                    <img variant="top" src={img} className='player-img' />) : (
                    <ul className='m-auto'>
                        {statistics.map((item, index) => {
                            return <li className='h5 text-start list-unstyled'>{item}</li>
                        })}
                    </ul>
                )

                }
                <footer className='fw-bold d-flex justify-content-center'>
                    <p>{name}</p>
                </footer>
            </Card>
        </div>
    )
}

export default PlayerCard