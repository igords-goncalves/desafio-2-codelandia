import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";


const elements = [
    Header(),
    Main()
]

document.body.append(...elements)