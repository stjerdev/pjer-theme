export interface IRuta {
  ruta?: string
  link?: string
  as?: string
}

export const rutaState: Array<IRuta> = [null]

export default function RutasReducer (
  state = rutaState,
  action: { type: string; payload: IRuta },
) {
  switch (action.type) {
    case "CAMBIAR_RUTA_ACTUAL":
      return [action.payload]
    default:
      return state
  }
}
