import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";


const elements = [
    Header(),
    Main(),
    Footer()
]

document.body.append(...elements)