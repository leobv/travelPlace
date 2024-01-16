import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    padding: '8px',
    justifyContent: 'space-between',
  },
  chip: {
    margin: '4px',
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '4px',
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '2px',
  },
}));
