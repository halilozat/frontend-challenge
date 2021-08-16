import { useContext, useState } from 'react';
import { LinkContext } from '../../contexts/LinkContext';
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import "./addForm.css";
import useToastContext from "../../hooks/useToastContext";



export default function AddForm() {

    const { dispatch } = useContext(LinkContext);
    const history = useHistory();
    const [text, setText] = useState("Add new list");
    const addToast = useToastContext();

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
        history.push('/');
        setText(`Added new list ${newLink.title}`);
        addToast(text);
    }

    return (
        <div className="AddContainer">
            <Link to="/" className="Link">
                <i className="material-icons backIcon">keyboard_backspace</i>
                Return To List
            </Link>
            <h3 className="headerText">Add New Link</h3>

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="linkName">Link Name:</Label>
                    <Input
                        type="text"
                        name="title"
                        value={title}
                        onChange={e => onInputChange(e)}
                        required
                        placeholder="e.g. Alphabet" />
                </FormGroup>
                <FormGroup>
                    <Label for="linkURL">Link URL:</Label>
                    <Input
                        type="content"
                        name="content"
                        value={content}
                        onChange={e => onInputChange(e)}
                        required
                        placeholder="e.g. http://abc.xyz" />
                </FormGroup>
                <button type="submit" className="addButton" id="addButton" block>
                    ADD
                </button>
            </Form>
        </div>
    );
}
