import { render, screen } from "@testing-library/react"

import Home from './Home'
import { store } from "../redux/store"
import { Provider } from "react-redux"

describe('Home component', () => {

    it('should', () => {

            render(
            <Provider store={store}>
                <Home/>
            </Provider>)

        const heading = screen.getByRole("heading")
        expect(heading).toHaveTextContent("Bienvenue sur le jeu Memory")
    })

})