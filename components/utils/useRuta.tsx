import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setearRutaAction } from "../../store/actions/rutasActions"
import { IRuta } from "../../store/reducers/rutasReducer"


function useRuta(props: IRuta) {
  const { link, ruta, as } = props
  const dispatch = useDispatch()

  useEffect(() => {
    const setNuevaRuta = (ruta: IRuta) => dispatch(setearRutaAction(ruta))
    setNuevaRuta({ link, ruta, as })
  }, [])
}

export default useRuta
