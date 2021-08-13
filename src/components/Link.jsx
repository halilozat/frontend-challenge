import React, { useState } from 'react'
import { GrFormClose, GrFormEdit, GrFormCheckmark } from 'react-icons/gr';
import { useLinkLayerValue } from '../context/LinkContext';

export default function Link({ link }) {
    const [{ }, dispatch] = useLinkLayerValue();
    // const [content, setContent] = useState(link.content);

    const removeLink = (linkId) => {
        dispatch({
            type: 'REMOVE_LINK',
            payload: linkId,
        });
    };


    return (
        <div className="link-row">
            <div>
                {link.content}
            </div>
            <div className="link-icons">
                <GrFormClose className="link-icon" onClick={() => removeLink(link.id)} />
            </div>
        </div>
    )
}
