import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getSearchData } from '../../api';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginRight: theme.spacing(2),
    flex: 1,
  },
}));

const SearchPlaces = ({ coordinates, setCoordinates, setBounds, handleSearchResults }) => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      // Obtener los datos de búsqueda utilizando la consulta
      const data = await getSearchData(searchQuery);
      handleSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={classes.searchContainer}>
      <TextField
        className={classes.textField}
        label="Search for restaurants"
        variant="outlined"
        value={searchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchPlaces;
