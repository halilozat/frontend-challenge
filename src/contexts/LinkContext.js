import { createContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const LinkContext = createContext();

const LinkContextProvider = ({ children }) => {

    const reducer = (links, action) => {
        switch (action.type) {
            case 'add_link':
                return [...links, {
                    id: uuidv4(),
                    title: action.link.title,
                    content: action.link.content,
                    point: 0,
                    createdAt: Date.now()
                }]

            case 'remove_link':
                return links.filter(link => link.id !== action.id)

            case 'update_link':
                return links.map((link) => (link.id === action.id ? action.updatedLink : link))

            default:
                return links;
        }
    }

    const [links, dispatch] = useReducer(reducer, [],

        () => {
            const links = localStorage.getItem('links')
            return links ? JSON.parse(links) : [];
        }
    )

    useEffect(() => {
        localStorage.setItem('links', JSON.stringify(links))
    })

    // Sort Algoritms
    // const sortedLinks = links.sort((a, b) => (a.createContext < b.createdAt ? 1 : -1));
    // const sortedMost = links.sort((a, b) => (a.Point < b.Point ? 1 : -1));
    // const sortedLess = links.sort((a, b) => (a.point > b.point ? 1 : -1));

    return (
        <LinkContext.Provider value={{ links, dispatch }}>
            {children}
        </LinkContext.Provider>
    )
}

export default LinkContextProvider;

