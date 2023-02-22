import { render, screen } from "@testing-library/react"

import Home from './Home'
import { store } from "../redux/store"
import { Provider } from "react-redux"

describe('Home component', () => {

    test('renders correctly', () => {

            render(
            <Provider store={store}>
                <Home/>
            </Provider>)

        const heading = screen.getByRole("heading")
        expect(heading).toHaveTextContent("Bienvenue sur le jeu Memory")

        const winMessage = screen.queryByText('Votre temps est écoulé ! Cliquez sur "Démarrer" pour relancer une partie.')
        expect(winMessage).toBeNull()

        const lossMessage = screen.queryByText('Félicitations 🙌 ! Cliquez sur "Démarrer" pour relancer une partie.')
        expect(lossMessage).toBeNull()
    })

})