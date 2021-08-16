import { Form, Button } from 'react-bootstrap';
import { LinkContext } from '../../contexts/LinkContext';
import { useContext, useState } from 'react';

const EditForm = ({ theLink }) => {

    const { dispatch } = useContext(LinkContext);

    const link = theLink;
    const id = link.id;

    const [title, setTitle] = useState(link.title);
    const [content, setContent] = useState(link.content);
    const [point, setPoint] = useState(link.point);

    const updatedLink = { id, title, content, point };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'update_link', id, updatedLink })
    }

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Title *"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Link *"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="point"
                    placeholder="Point *"
                    name="point"
                    value={point}
                    onChange={(e) => setPoint(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Update Link
            </Button>
        </Form>
    )
}

export default EditForm;