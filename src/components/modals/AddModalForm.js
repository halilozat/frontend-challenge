import { Form, Button } from 'react-bootstrap';
import { LinkContext } from '../../contexts/LinkContext';
import { useContext, useState } from 'react';

const AddModalForm = () => {

    const { dispatch } = useContext(LinkContext);


    const [newLink, setNewLink] = useState({
        title: "",
        content: ""
    })

    const { title, content } = newLink;

    const onInputChange = (e) => {
        setNewLink({ ...newLink, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'add_link', link: {
                title, content
            }
        })
    }


    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Title *"
                    name="title"
                    value={title}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="content"
                    placeholder="Link *"
                    name="content"
                    value={content}
                    onChange={e => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Link
            </Button>
        </Form>
    )
}

export default AddModalForm;