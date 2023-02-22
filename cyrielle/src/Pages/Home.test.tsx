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

        const startButton = screen.getByRole("button", {name: "Démarrer"})
        expect(startButton).toBeInTheDocument()

        const explanationText = screen.getByText('Cliquez sur "Démarrer" et trouvez tous les duos de cartes en moins de 2 minutes pour gagner !')
        expect(explanationText).toBeInTheDocument()

        const winMessage = screen.queryByText('Félicitations 🙌 ! Cliquez sur "Démarrer" pour relancer une partie.')
        expect(winMessage).not.toBeInTheDocument()

        const lossMessage = screen.queryByText('Votre temps est écoulé ! Cliquez sur "Démarrer" pour relancer une partie.')
        expect(lossMessage).not.toBeInTheDocument()

        const timerElement = screen.queryByTestId("progress-bar-container")
        expect(timerElement).not.toBeInTheDocument()

        const gameBoardElement = screen.queryByRole("list")
        expect(gameBoardElement).not.toBeInTheDocument()
    })

    test('shows gameboard and timer when game starts', () => {
        render(
            <Provider store={store}>
                <Home/>
            </Provider>)
        
        act(() => store.dispatch({type: "STARTGAME"}));

        const timerElement = screen.getByTestId("progress-bar-container")
        expect(timerElement).toBeInTheDocument()

        const gameBoardElement = screen.getByRole("list")
        expect(gameBoardElement).toBeInTheDocument()
    })

    test('shows error message when game is lost', () => {
        render(
            <Provider store={store}>
                <Home/>
            </Provider>)

        act(() => store.dispatch({type: "TIMEOVER"}));

        const lossMessage = screen.getByText('Votre temps est écoulé ! Cliquez sur "Démarrer" pour relancer une partie.')
        expect(lossMessage).toBeInTheDocument()
    })

    test('shows victory message when game is won', () => {
        render(
            <Provider store={store}>
                <Home/>
            </Provider>)

        act(() => store.dispatch({type: "WON"}));

        const winMessage = screen.queryByText('Félicitations 🙌 ! Cliquez sur "Démarrer" pour relancer une partie.')
        expect(winMessage).toBeInTheDocument()
    })

})