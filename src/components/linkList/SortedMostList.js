import { useContext, useEffect, useState } from 'react';
import SingleLink from '../link/Link';
import { Button, Modal, Alert, Dropdown } from 'react-bootstrap';
import { LinkContext } from '../../contexts/LinkContext';
import AddModalForm from '../modals/AddModalForm';
import Pagination from '../Pagination';
import './linkList.css'
import { Link } from 'react-router-dom';

const SortedMostLinkList = () => {

    const { links } = useContext(LinkContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [linksPerPage] = useState(5)

    const [showAlert, setShowAlert] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    
    const handleShowAlert = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 2000)
    }
    
    
    useEffect(() => {
        handleClose();
        
        return () => {
            handleShowAlert();
        }
    }, [links])
    
    const indexOfLastLink = currentPage * linksPerPage;
    const indexOfFirstLink = indexOfLastLink - linksPerPage;
    
    // const initialSort = links.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)).slice(indexOfFirstLink, indexOfLastLink)
    // const sortedMost = links.sort((a, b) => (a.point < b.point ? 1 : -1)).slice(indexOfFirstLink, indexOfLastLink)
    const sortedMost = links.sort((a, b) => (a.point < b.point ? 1 : -1)).slice(indexOfFirstLink, indexOfLastLink)
    
    const currentLinks = sortedMost;
    const totalPagesNum = Math.ceil(links.length / linksPerPage)



    const listItems = currentLinks.map((link) => (
        <tr key={link.id}>
            <SingleLink link={link} />
        </tr>
    ))

    return (

        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6 submit">
                        <Link to="/add">
                            <h2 style={{ textDecoration: "none", color: "white" }}>Submit A <b>Link</b></h2>
                        </Link>
                    </div>
                    <div className="col-sm-6">

                        <Button style={{ borderRadius: "10px" }} onClick={handleShow} className="btn btn-secondary text-white addModalButton" data-toggle="modal"> <span>Add New Link with Modal</span></Button>

                        <Link to="/add">
                            <Button style={{ borderRadius: "10px" }} className="btn btn-secondary text-white addModalButton" data-toggle="modal"><span>Add New Link</span></Button>
                        </Link>

                    </div>
                </div>
            </div>

            <Link to="/">
                <Button style={{ borderRadius: "10px" }} className="btn btn-secondary text-white addModalButton" data-toggle="modal"><span>Order by</span></Button>
            </Link>
            <Link to="/sortedLess">
                <Button style={{ borderRadius: "10px" }} className="btn btn-secondary text-white addModalButton" data-toggle="modal"><span>Sorted Less</span></Button>
            </Link>

            <Alert show={showAlert} variant="success">
                Link List successfully updated!.
            </Alert>

            <table className="table table-striped table-hover">
                <tbody>
                    {listItems}
                </tbody>
            </table>

            <Pagination
                pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentLinks={currentLinks}
                sortedLinks={links}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Add Link
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddModalForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Modal
                    </Button>
                </Modal.Footer>
            </Modal>

            
        </>
    )
}

export default SortedMostLinkList;
