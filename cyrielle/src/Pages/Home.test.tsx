import { render, screen } from "@testing-library/react"
import { act } from 'react-dom/test-utils';
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

        const winMessage = screen.queryByText('Félicitations 🙌 ! Cliquez sur "Démarrer" pour relancer une partie.')
        expect(winMessage).toBeNull()

        const lossMessage = screen.queryByText('Votre temps est écoulé ! Cliquez sur "Démarrer" pour relancer une partie.')
        expect(lossMessage).toBeNull()
    })

    test('shows error message when game is lost', async () => {
        render(
            <Provider store={store}>
                <Home/>
            </Provider>)

            await act(() => store.dispatch({type: "TIMEOVER"}));
            const lossMessage = screen.queryByText('Votre temps est écoulé ! Cliquez sur "Démarrer" pour relancer une partie.')
            expect(lossMessage).toBeInTheDocument()
    })

    test('shows victory message when game is won', async () => {
        render(
            <Provider store={store}>
                <Home/>
            </Provider>)

            await act(() => store.dispatch({type: "WON"}));
            const winMessage = screen.queryByText('Félicitations 🙌 ! Cliquez sur "Démarrer" pour relancer une partie.')
            expect(winMessage).toBeInTheDocument()
    })

})