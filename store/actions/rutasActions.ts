import { IRuta } from "../reducers/rutasReducer"

export const setearRutaAction = (ruta: IRuta) => {
  return {
    // Se debe mapear con citasReducer cada type definido en Recucers

    type: "CAMBIAR_RUTA_ACTUAL",
    payload: ruta,
  }
}
