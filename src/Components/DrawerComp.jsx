import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React,{useState} from 'react'

function DrawerComp() {
    const [openDwawer, setOpenDrawer] = useState(false)
    const arr = ["Products", "Services", "ContactUS","AboutUs","LoginIn","LogOut"]

  return (
    <>
    <Drawer open={openDwawer} onClose={()=>setOpenDrawer(false)}>
        <List>
            {arr.map((item,index)=>(
                <>
                <ListItemButton onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>{item}</ListItemText>
                </ListItemIcon>
            </ListItemButton>
                </>
            ))}
        </List>
    </Drawer>
    <IconButton onClick={()=>setOpenDrawer(!openDwawer)} sx={{color:'#fff', marginLeft:'auto'}}>
        <MenuIcon/>
    </IconButton>
    </>
  )
}

export default DrawerComp