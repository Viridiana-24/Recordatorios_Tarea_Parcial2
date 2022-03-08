import AppBar from '../AppBar';
import { Card } from '../Contenedor';
import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";




export default function Home({ session }) {
    const [, setLoading] = useState(true);
    const { t } = useTranslation();
    const [data, setData] = useState(null);
    
    const handleDelete = async (id) => { const { } = await supabase.from('recordatorio').update({ status: false }).eq("id", id); setIsReload(true); };
    const [isReload, setIsReload] = useState(true);


    useEffect(() => {
        if (isReload) {
            setIsReload(false);
            getRecordatorios();
        }
    }, [isReload]);

    async function getRecordatorios() {
        try {
            setLoading(true);
            const user = supabase.auth.user();

            let { data, error, status } = await supabase
                .from("recordatorio")
                .select(`id,titulo, fechacreacion, contenido, fecharecordatorio`)
                .in("id_user", [user.id])
                .in("status", [true])

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setData(data);


            }
            console.log(data);
        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (

        <div>
            <AppBar />

            

            {data && data.map(function (recordatorios) {
                return <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: 1 }} >
                     <Grid>
                        <Grid>
                            <Button variant="contained" size="small" color="secondary">
                                <Link to={`/Funciones/${recordatorios.id}`}>
                                    {t("Editar")}
                                </Link>
                            </Button>
                            <Button variant="contained" size="small" color="error"
                                onClick={() => handleDelete(recordatorios.id)}>
                                <Link to="/">{t("Borrar")}</Link>
                            </Button>
                        </Grid>
                    </Grid>
                    <Card
                        id={recordatorios.id}
                        titulo={recordatorios.titulo}
                        contenido={recordatorios.contenido}
                        fechacreacion={recordatorios.fechacreacion}
                        fecharecordatorio={recordatorios.fechacreacion}
                    >

                    </Card>
                   

                </Grid>


            })}


        </div>
    );
}