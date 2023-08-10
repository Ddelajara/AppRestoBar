import { CardsFood } from "./CardsFood"
import { CarouselNav } from "./CarouselNav"
import { CardsDrink } from "./CardsDrink"
import { CardsEventos } from "./CardsEventos"
import { FooterPage } from "./FooterPage"

export const Home = () => {
  return (
    <>
      <CarouselNav/>
      <div className="grid-layout">
        <div>
          <CardsFood/>
        </div>
        <div>
          <CardsDrink/>
        </div>
        <div>
          <CardsEventos/>
        </div>
      </div>
      <FooterPage/>
    </>
  )
}
