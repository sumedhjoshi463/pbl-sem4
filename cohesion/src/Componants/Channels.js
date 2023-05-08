
import ListIcon from '@mui/icons-material/List';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Channels =[
    {
        id :'1',
        icon:<ListIcon/>,
        name:'First Year',
    },
    {
        id :'2',
        icon:<ListIcon/>,
        name:'Second Year',
    },
    {
        id :'3',
        icon:<ListIcon/>,
        name:'Third Year',
    },
    {
        id :'4',
        icon:<ListIcon/>,
        name:'Final Year',
    },
    {
        id :'5',
        icon:<ListIcon/>,
        name:'Placements opportunities',
        iconClosed : <ArrowDropDownIcon/>,
        iconOpened : <ArrowDropUpIcon />,
        subNav : [
            {
                title: 'useers',
                con:<ListIcon/>,
            },
            {
                title: 'useers',
                con:<ListIcon/>,
            },

        ]
    }
]

export default Channels;