import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
  Button, 
  Checkbox, 
  FormControl, 
  FormControlLabel, 
  Grid, 
  IconButton, 
  InputAdornment, 
  Link, 
  OutlinedInput,
  Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { login } from '../actions'


const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  logo: {
    width: '20vh',
    margin: '24px 0',
  },
  paper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: '36px',
    margin: '8px 0px'
  },
  subtitle: {
    fontWeight: '400',
    fontSize: '16px',
    color: '#FFFFFF',
    opacity: '0.4',
    margin: '8px 0px'
  },
  sidebar: {
    background: '#16325c',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '260px 80px 80px 80px'
  },
  submit: {
    borderRadius: '100px',
    height: '45px',
    background: '#F84868',
    color: 'white',
    '&:disabled': {
      background: '#F84868',
      opacity: '0.2',
      color: 'white',
    },
  },
  textInput: {
    padding: "18px 24px",
  },
  formcontrol: {
    width: '100%',
    padding: '8px 0'
  },
  textfield: {
    borderRadius: '100px',
    margin: "3px",
  },
  singInText: {
    padding: "20px",
  },
  rememberMeChecked: {
    color: '#949494',
  },
  forgotPwdGrid: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center'
  },
  forgotPwdLink: {
    color: '#949494',
  }
});


export default function LogIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ 
      ...values,
      [prop]: event.target.value, 
    });
  };

  const handleClickShowPassword = () => {
    setValues({ 
      ...values, 
      showPassword: !values.showPassword,
    });
  };
  
  const submitForm = () => {
    dispatch(login(values.email, values.password));
  }
  const email = useSelector((state) => state.email);

  return (
    <Grid container className={classes.root}>
      <Grid item md={5} >
        <div className={classes.sidebar}>
          <img className={classes.logo} src="./linc_logo.png" />
          <Typography className={classes.title} component="h1" variant="h1">
            The reliable backbone of your business.
          </Typography>
          <Typography className={classes.subtitle} component="h5" variant="h5">
            Something important Something important Something important Something important 
            <div>{email}</div>
          </Typography>
        </div>
      </Grid> 
      <Grid item md={7}>
        <div className={classes.paper}>
          <Typography className={classes.singInText} component="h5" variant="h5">
            Sign In to Linc Portal
          </Typography>
          <form>
            <FormControl className={classes.formcontrol} variant="outlined">
              <OutlinedInput
                classes={{root: classes.textfield, input: classes.textInput}}
                id="outlined-adornment-email"
                type="text"
                value={values.email}
                placeholder="Email Address"
                onChange={handleChange('email')}
              />
            </FormControl>
            <FormControl className={classes.formcontrol} >
              <OutlinedInput
                classes={{root: classes.textfield, input: classes.textInput}}
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                placeholder="Password"
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={0}
              />
            </FormControl>
            <Grid container>
              <Grid item style= {{ marginLeft: "10px", flexGrow:"1" }}>
                <FormControlLabel
                  className={classes.rememberMeChecked}
                  control={<Checkbox className={classes.rememberMeChecked} value="remember" />}
                  label="Remember me"
                />
              </Grid>
              <Grid 
                className={ classes.forgotPwdGrid }
                item
              >
                <Link className={ classes.forgotPwdLink } href="#" >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              disabled={!(values.email && values.password)}
              className={classes.submit}
              onClick={submitForm}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}