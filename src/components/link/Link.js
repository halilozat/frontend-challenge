import { useContext, useState, useEffect } from 'react';
import { LinkContext } from '../../contexts/LinkContext';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from '../modals/EditForm';
import './link.css'

const Link = ({ link }) => {

    const { dispatch } = useContext(LinkContext);

    // const [point, setPoint] = useState(link.point);
    const [showUpdate, setShowUpdate] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const handleClose = () => setShowUpdate(false);
    const handleShow = () => setShowUpdate(true)
    const handleShowDelete = () => setShowDelete(true)
    const handleCloseDelete = () => setShowDelete(false);

    const handleIncrement = () => {
        const id = link.id
        const title = link.title
        const content = link.content
        const point = link.point + 1
        const createdAt = link.createdAt
        const updatedAt = Date.now()
        const updatedLink = { id, title, content, point, createdAt, updatedAt };
        dispatch({ type: 'update_link', id, updatedLink })
    }

    const handleDecrement = () => {
        const id = link.id
        const title = link.title
        const content = link.content
        const point = link.point - 1
        const createdAt = link.createdAt
        const updatedAt = Date.now()
        const updatedLink = { id, title, content, point, createdAt, updatedAt };
        dispatch({ type: 'update_link', id, updatedLink })
    }

    useEffect(() => {
        handleClose();
    }, [link])

    return (

        <>
            {/* <td id="count">Point → {link.point}</td>
            <td>{link.title}</td>
            <td>{link.content}</td>
            <td>
                <button id="increase" onClick={handleIncrement} className="btn text-success btn-act" data-toggle="modal"><i className="material-icons">&#xE5D8;</i></button>
                <button onClick={handleDecrement} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE5DB;</i></button>
            </td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={handleShowDelete} className="btn text-danger btn-act tableDeleteButton" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
            </td> */}
            <td>
                <div className="course">
                    <div className="course-preview">
                        <h1>{link.point}</h1>
                        <h2>Points</h2>
                    </div>
                    <div className="course-info">
                        <div className="course-text">
                            <h1>{link.title}</h1>
                            <h4 style={{ color: "grey" }}>({link.content})</h4>
                        </div>
                        <div className="link-vote">
                            <div className="voteLeft">
                                <b>Up Vote <button id="increase" onClick={handleIncrement} className="btn text-success btn-act" data-toggle="modal"><i className="material-icons">&#xE5D8;</i></button> </b>
                            </div>
                            <div className="voteRight">
                                <b><button onClick={handleDecrement} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE5DB;</i></button> Down Vote </b>
                            </div>
                        </div>
                        <button onClick={handleShowDelete} className="deleteButton tableDeleteButton">Delete</button>
                    </div>
                </div>
            </td>



            <Modal show={showUpdate} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Update Link
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theLink={link} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Link</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Do you want to remove?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => dispatch({ type: 'remove_link', id: link.id })} variant="danger">OK</Button>
                    <Button onClick={handleCloseDelete} variant="dark">Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Link;




