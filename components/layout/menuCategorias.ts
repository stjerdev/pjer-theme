import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ChatIcon from "@material-ui/icons/Chat"
import ComputerIcon from "@material-ui/icons/Computer"
import DescriptionIcon from "@material-ui/icons/Description"
import EmailIcon from "@material-ui/icons/Email"
import GavelIcon from "@material-ui/icons/Gavel"
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import HelpIcon from "@material-ui/icons/Help"
import HomeIcon from "@material-ui/icons/Home"
import InsertChartIcon from '@material-ui/icons/InsertChart'
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import PeopleIcon from '@material-ui/icons/People'
import SettingsIcon from "@material-ui/icons/Settings"
const menuCategorias = [
  { name: "Inicio", Icon: HomeIcon, perfiles: [], link: "/" },
  {
    name: "Jurisdiccional",
    link: "",
    Icon: GavelIcon,
    perfiles: [],
    items: [

      {
        name: "Expedientes",
        Icon: DescriptionIcon,
        link: "/expedientes",
        perfiles: [],
      },

      {
        name: "Notificaciones",
        Icon: NotificationsActiveIcon,
        link: "/notificaciones",
        perfiles: [],
      },

    ],
  },
  {
    name: "Menu 1",
    link: "",
    Icon: ComputerIcon,
    perfiles: [],
    items: [
      {
        name: "Menu 2",
        Icon: AccountBoxIcon,
        link: "",
        a: true,
        perfiles: [],
         items: [
           {
            name: "Menu 2 - 1",
            link: "/menu21",
            Icon: GroupAddIcon,
            perfiles: [],
          },
          {
            name: "Menu 2 - 2",
            Icon: PeopleIcon,
            perfiles: [],
            items: [
              {
                name: "Menu 3 - 1",
                link: "/menu31",
                Icon: InsertChartIcon,
                perfiles: [],
              },
            ],
          },
        ],
      },
  
    ],
  },
  {
    name: "Configuración",
    Icon: SettingsIcon,
    perfiles: [],
    items: [
      {
        name: "Contribuir",
        Icon: HelpIcon,
        link: "/config/Contributing",
        perfiles: [],
      },
    ],
  },
]

export default menuCategorias
