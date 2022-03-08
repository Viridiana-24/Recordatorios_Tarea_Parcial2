import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";


export default function MultiActionAreaCard({ id, titulo, fechacreacion, contenido, fecharecordatorio}) {


  const { t } = useTranslation();
  
  return (
    <Card sx={{ display: 'auto', height:200, width:400 }}>
    
      <CardActions>    
        <CardContent sx={{ fontSize: 14 }} color="text.secondary">
          
          <Typography gutterBottom variant="body2" component="div" color="pink">
          {/* color="text.secondary" */}
          {t("Titulo")}
            <Typography variant="body2" color="Black">
              {titulo} 
              </Typography>
          </Typography>
          
          <Typography gutterBottom variant="body2" component="div" color="pink">
          {t("Contenido")}
            <Typography variant="body2" color="Black">
              {contenido} 
              </Typography>
          </Typography>

          <Typography variant="body2" color="pink">
          {t("Fecha de Creación")}
            <Typography variant="body2" color="Black">
              {fechacreacion} 
              </Typography>
          </Typography>
          <Typography variant="body2" color="pink">
          {t("Fecha de Recordatorio")}
            <Typography variant="body2" color="Black">
              {fecharecordatorio} 
              </Typography>
          </Typography>
        </CardContent>
      </CardActions>
      
        
    </Card>
   
  );
}


