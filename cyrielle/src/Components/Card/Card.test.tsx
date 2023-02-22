import { render, screen } from "@testing-library/react"
import user from '@testing-library/user-event'
import Card from "./Card"
import { store } from "../../redux/store"
import { Provider } from "react-redux"

describe('Card component', () => {
    test('renders correctly', () => {
        render(<Provider store={store}><Card image={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt={"test"} hidden={false} returnCard={() => null} number={2} disabled={false} /></Provider>)

        const imageElement = screen.getByRole("img")
        expect(imageElement).toBeInTheDocument()

        const imageAlt = screen.getByAltText("test")
        expect(imageAlt).toBeInTheDocument()
    })

    test('handler is called on click', () => {
        const returnFunc = jest.fn()

        render(<Provider store={store}><Card image={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt={"test"} hidden={false} returnCard={returnFunc} number={2} disabled={false} /></Provider>)

        const imageBlock = screen.getByTestId("image-block")
        user.click(imageBlock)
        expect(returnFunc).toHaveBeenCalledTimes(1)
    })
})