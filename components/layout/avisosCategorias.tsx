import EventNote from "@material-ui/icons/EventNote";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import { v4 as uuid } from "uuid";

export interface IAviso {
  titulo: string;
  descripcion: string;
  accion?: () => void;
}
export interface ICategoriaAviso {
  id: number;
  nombre: string;
  detalle?: JSX.Element;
  icono: JSX.Element;
  enlace: string;
  visible: boolean;
  cantidad: number;
  avisos: IAviso[];
}
export const avisosCategorias: ICategoriaAviso[] = [
  {
    id: uuid(),
    nombre: "Presentaciones",
    icono: <FindInPageIcon />,
    enlace: "/menu21",
    visible: true,
    cantidad: 0,
    avisos: [],
  },

  {
    id: uuid(),
    nombre: "Agenda",
    icono: <EventNote />,
    enlace: "/menu31",
    visible: true,
    cantidad: 0,
    avisos: [],
  },
];
