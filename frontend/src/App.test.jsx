import { render, screen } from '@testing-library/react'
import App from './App'

test('renderiza el título Inventario', () => {
    render(<App />)

    expect(screen.getByText('Inventario')).toBeInTheDocument()
})