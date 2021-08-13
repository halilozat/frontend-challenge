import React, { useState } from 'react'
import { useLinkLayerValue } from '../context/LinkContext';
import { Row, Col } from 'react-bootstrap'


export default function Submit() {

    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [{ links }, dispatch] = useLinkLayerValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content && content.length < 1) return;

        const newLink = {
            id: Math.floor(Math.random() * 42321),
            title,
            content,
            isCompleted: false
        };

        dispatch({
            type: 'ADD_LINK',
            payload: newLink
        });

        setContent('');
        setTitle('');
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="link-form">
                <Row>
                    <Col className="mb-3">
                        <label>Link Name</label>
                    </Col>
                    <Col>
                        <input
                            type="text"
                            className="link-input"
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                        />
                    </Col>
                    <Col>
                        <label>Link URL</label>

                    </Col>
                    <Col>
                        <input
                            type="text"
                            className="link-input"
                            onChange={e => setContent(e.target.value)}
                            value={content}
                        />
                    </Col>

                </Row>

                <button className="link-button">
                    ADD
                </button>
            </form>
        </div>
    )
}
