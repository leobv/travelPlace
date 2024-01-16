import { makeStyles } from '@material-ui/core/styles';

console.log('Estilos cargados correctamente'); // Verificación de importación

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '85vh',
    width: '100%',
    marginTop: '5px',
    border: '1px solid red',
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
    },
  },
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  },
  typography: {
    fontWeight: 'bold',
    fontSize: '12px',
    textAlign: 'center',
  },
  pointer: {
    cursor: 'pointer',
  },
}));

export default useStyles;