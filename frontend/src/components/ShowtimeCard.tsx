
import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ShowtimeCard = ({ imageUrl, title, showtime, theaterName, distance }) => {
    return (
        <Card


            sx={{ width: 345 }}>
            <CardMedia
                component="img"
                image={imageUrl}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Showtime:</strong> {showtime}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Theater Name:</strong> {theaterName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Distance:</strong> {distance}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ShowtimeCard;
