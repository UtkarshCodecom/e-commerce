import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    height: '340px',
  },
  media: {
    height: 60,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    marginTop: '-20px',
  },
  cardContent: {
    justifyContent: 'space-between',
  },
}));