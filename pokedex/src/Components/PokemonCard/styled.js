import styled from 'styled-components'

export const PokeCard = styled.div`
  border: 1px solid #000;
  width: 250px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #bcc0c1;
  margin-right: 10px;
`

export const ContainerButton = styled.div`
  button {
    margin-left: 15px;
    color: #fff;
  }
`
export const ButtonAddPokemon = styled.button`
  background-color: #056712;
`
export const ButtonRemovePokemon = styled.button`
  background-color: #f7083f;
`
export const ButtonDetailPokemon = styled.button`
  background-color: #083c8a;
`
