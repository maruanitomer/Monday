import { BoardNavDownLogos } from "./BoardNavDownLogos.jsx"
import { BoardNavTopLogos } from "./BoardNavTopLogos.jsx"
import { Plans } from "./Plans.jsx"

export const BoardNav = () => {
    return (
        <section className="board-nav-wrapper flex column align-center justify-space-between">
            <BoardNavTopLogos></BoardNavTopLogos>
            <Plans/> 
            <BoardNavDownLogos/>
        </section>
    )
}