import { shuffleArray } from "./GameBoard"
import { render, screen } from "@testing-library/react"
import GameBoard from "./GameBoard"
import { store } from "../../redux/store"
import { Provider } from "react-redux"

describe('Gameboard component', () => {

    test('render component correctly', () => {
        render(<Provider store={store}><GameBoard /></Provider>)

        const list = screen.getByRole("list")
        expect(list).toBeInTheDocument()
    })

    test('renders a list of card elements', () => {
        render(<Provider store={store}><GameBoard /></Provider>)

        const listItems = screen.getAllByRole("listitem")
        expect(listItems).toHaveLength(16)
    })

})

describe('shuffleArray function', () => {

    test('update the length of the array', () => {
        let testArray = [{
            isDisabled: true,
            name: "name",
            image: "imageURL",
            isHidden: true
        }, {
            isDisabled: false,
            name: "name",
            image: "imageURL",
            isHidden: true
        }, {
            isDisabled: true,
            name: "name",
            image: "imageURL",
            isHidden: false
        }, {
            isDisabled: true,
            name: "name",
            image: "imageURL",
            isHidden: true
        }];
        let arrLength = testArray.length;
        shuffleArray(testArray);
        expect(testArray.length).toBe(arrLength)
    })

})