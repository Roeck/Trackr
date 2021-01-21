import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%'
    }
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px'
    }
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2)
    }
  },
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}));
