import React from "react";
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ModalImg from './ModalImg';

function FlipCard(props) {
	return (
        <>
        <Card 
            className="flip-card"
            sx={{ 
                height: 340, 
                boxShadow: '0 0 10px white' 
            }}>
            <CardMedia
                component="img"
                height="200"
                image= {props.icon}
                alt="logo"
            />
            <CardContent>
                <Typography variant="h4" component="div">
                {props.heading}
                </Typography>
            </CardContent>
            <CardActions>
                <ModalImg 
                    txt="Milky Way Galaxy"
                    src={props.src1}
                />
                <ModalImg 
                    txt="Andromeda Galaxy"
                    src={props.src2}
                />
            </CardActions>
            </Card>
        </>
	);
}

export default FlipCard ;
