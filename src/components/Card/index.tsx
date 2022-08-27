import CardBase from "react-bootstrap/Card"

import { Pokemon } from "../../types"

type CardProps = {
  pokemon: Pokemon
}

function Card({ pokemon }: CardProps) {
  return (
    <CardBase>
      <CardBase.Img variant="top" src={pokemon.sprites.front_default} />
    </CardBase>
  )
}

export default Card