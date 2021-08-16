import { getByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddForm from './AddForm';

test("Header renders correctly", () => {
    render(<AddForm/>);

    const headerText = screen.getByText(/Add New Link/i)
    expect(headerText).toBeInTheDocument()
})