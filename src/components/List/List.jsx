import React, { useState } from 'react';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = ({ places, childClicked }) => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const types = [
    { label: 'Restaurantes', value: 'restaurants' },
    { label: 'Hoteles', value: 'hotels' },
    { label: 'Atracciones', value: 'attractions' }
  ];

  const ratings = [
    { label: 'Todo', value: '' },
    { label: 'Más de 3.0', value: '3' },
    { label: 'Más de 4.0', value: '4' },
    { label: 'Más de 4.5', value: '4.5' }
  ];

  console.log({ childClicked });

  const handlePlaceClick = (place) => {
    console.log(place);
  };

  return (
    <div className={classes.container}>
      {/* Title */}
      <Typography variant="h4">Restaurantes cerca de ti</Typography>

      {/* Type filter */}
      <FormControl className={classes.formControl}>
        <InputLabel>Tipo</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Rating filter */}
      <FormControl className={classes.formControl}>
        <InputLabel>Calificación</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          {ratings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* List of places */}
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} selected={Number(childClicked) === i} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
