import React, { useState, useEffect, useCallback } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData, getSearchData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import SearchPlaces from './components/SearchPlaces/SearchPlaces';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPlacesData(bounds.sw, bounds.ne);
        setPlaces(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (bounds.sw && bounds.ne) {
      fetchData();
    }
  }, [bounds]);

  const handleSearchResults = useCallback((searchResults) => {
    setPlaces(searchResults);
  }, []);

  const handleSearch = useCallback(async (query) => {
    try {
      const data = await getSearchData(query);
      handleSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  }, [handleSearchResults]);

  const onChildClick = useCallback((id) => {
    setChildClicked(id);
  }, []);

  return (
    <>
      <CssBaseline />
      <Header onSearch={handleSearch} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <SearchPlaces onSearch={handleSearch} />
          <List places={places} childClicked={childClicked} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            places={places}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            childClicked={childClicked}
            onChildClick={onChildClick}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
