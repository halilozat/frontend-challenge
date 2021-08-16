import { useContext, useEffect, useState } from 'react';
import SingleLink from '../link/Link';
import { Button, Modal, Alert, Dropdown } from 'react-bootstrap';
import { LinkContext } from '../../contexts/LinkContext';
import AddForm from '../modals/AddModalForm';
import Pagination from '../Pagination';
import './linkList.css'
import { Link } from 'react-router-dom';


const options = [
    { key: 1, text: "Most Voted (Z → A)", value: "mostVoted" },
    { key: 2, text: "Less Voted (A → Z)", value: "lessVoted" },
];
const LinkList = () => {

    const { links, sortedLinks, sortedMost, sortedLess, dispatch } = useContext(LinkContext)

    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [linksPerPage] = useState(5)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    };


    const handleSort = (e, data) => {
        console.log(listOptions[0].props.value)
    }


    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedLinks])

    const indexOfLastLink = currentPage * linksPerPage;
    const indexOfFirstLink = indexOfLastLink - linksPerPage;

    const currentLinks = sortedLinks.slice(indexOfFirstLink, indexOfLastLink);
    const totalPagesNum = Math.ceil(sortedLinks.length / linksPerPage)



    const listItems = currentLinks.map((link) => (
        <tr key={link.id}>
            <SingleLink link={link} />
        </tr>
    ))

    const listOptions = options.map(item => (
        <Dropdown.Item
            text={item.text}
            value={item.value}
            key={item.key}
            onClick={handleSort}
        >
            {item.text}
        </Dropdown.Item>
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

            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Order by
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    {listOptions}
                </Dropdown.Menu>
            </Dropdown>

            <Alert show={showAlert} variant="success">
                Link List successfully updated!.
            </Alert>

            <table className="table table-striped table-hover">
                {/* <thead>
                    <tr>
                        <th>Point</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Count</th>
                        <th>Delete</th>
                    </tr>
                </thead> */}
                <tbody>
                    {listItems}
                </tbody>
            </table>

            <Pagination
                pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentLinks={currentLinks}
                sortedLinks={sortedLinks}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Add Link
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
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

export default LinkList;
