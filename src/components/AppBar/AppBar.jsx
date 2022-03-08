import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Tooltip, Box, IconButton, Button} from '@mui/material';
import { supabase } from "../../config/supabaseClient";
import { Link } from 'react-router-dom';
import { green, pink } from '@mui/material/colors';
import { useTranslation } from "react-i18next";


      

const Navbar = () => {    


    const changeLaguage = (language) => { i18n.changeLanguage(language); };    
      const { i18n, t } = useTranslation();
      
      

    return (
        
        <div>
            
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ bgcolor: pink[300] }}>

                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                        {t("Recordatorios")}
                        </Typography>

                        <Button color="inherit" >
                                <Link to="/">
                                {t("Inicio")}
                                </Link>
                                </Button>

                                <Button color="inherit" >
                < Link to="/RecordatorioNuevo">
                    {t("Nuevo Recordatorio")}
                </Link>



            </Button>
            <Button color="inherit" href='https://github.com'> Github </Button>

            <Button color="inherit" className={`App-link ${i18n.language === "es" ? "selected" : "unselected"}`} onClick={() => changeLaguage("es")}>
                MX
            </Button>
            <Button color="inherit" className={`App-link ${i18n.language === "en" ? "selected" : "unselected"}`} onClick={() => changeLaguage("en")}>
                US
            </Button>


                        <Button color="inherit"  onClick={() => supabase.auth.signOut()}>
                        {t("Salir")}
                    </Button>



                   

                        <Button color="inherit" >
                                <Link to="/">
                                {t("Usuario")}
                                </Link>
                                </Button>

                                <br></br> 
                                

                        

                    
                    
                    
                        <Tooltip title="Viridiana">
                            <IconButton sx={{ p: 0 }}>
                            <Avatar sx={{ bgcolor: green[300] }}>V</Avatar>
                            </IconButton>
                        </Tooltip>

                        <br></br>

                        

                    </Toolbar>

                </AppBar>
            </Box>
           


        </div>
    );
}

export default Navbar