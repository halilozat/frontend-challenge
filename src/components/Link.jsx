import React, { useEffect, useReducer, useState } from 'react'
import { GrFormClose, GrFormEdit, GrFormCheckmark } from 'react-icons/gr';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useLinkLayerValue } from '../context/LinkContext';
import reducer from '../context/reducer';

export default function Link({ link }) {
    const [{ links }, dispatch] = useLinkLayerValue();


    const removeLink = (linkId) => {
        dispatch({
            type: 'REMOVE_LINK',
            payload: linkId,
        });
    };

    useEffect(() => {
        localStorage.setItem('links', JSON.stringify(links))
    }, [links])


    return (

        <div className="course">
            <div className="course-preview">
                <h1>{link.point}</h1>
                <h2>Points</h2>
            </div>
            <div className="course-info">
                <h1>{link.title}</h1>
                <h4 style={{ color: "grey" }}>({link.content})</h4>
                <div className="link-vote">
                    <div className="voteLeft">
                        <b>Up Vote <FaArrowUp /></b>
                    </div>
                    <div className="voteRight">
                        <b>Down Vote <FaArrowDown /></b>
                    </div>
                </div>
                <button className="deleteButton" onClick={() => removeLink(link.id)}>Delete</button>
            </div>
        </div>
    )
}
