import {
  Box,
  CssBaseline,
  makeStyles,
  Paper,
  useMediaQuery,
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/pages/NavBar'
import PageNotFound from './components/pages/PageNotFound'
import Portfolio from './components/pages/Portfolio/Portfolio'
import MobileProfile from './components/pages/MobileNav'
import AboutMe from './components/pages/Profile/AboutMe'
import Resume from './components/pages/Resume/Resume'
import DarkModeSwitch from './components/UI/DarkModeSwitch'
import MenuBtn from './components/UI/MenuBtn'
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min'
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    height: '100%',
  },
  rootPages: {
    height: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  switchBtn: {
    position: 'fixed',
    right: '10px',
    zIndex: 900,
  },
  switchBtnMobile: {
    position: 'fixed',
    zIndex: 900,
  },
}))

const App = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkmode] = useState(true)

  const theme = createTheme({
    typography: {
      fontFamily: 'Quicksand, sans-serif',
    },

    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        light: '#ff833a',
        main: '#e65100',
        dark: '#ac1900',
        contrastText: '#000',
      },

      secondary: {
        light: '#ffbb93',
        main: '#ff8a65',
        dark: '#c75b39',
        contrastText: '#000',
      },
    },
  })
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleOpenMenu = (e) => {
    setOpen(!open)
  }

  return (

    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Grid container>
          {!isMobile ? (
            <NavBar isMobile={isMobile} />
          ) : (
            <MobileProfile
              open={open}
              handleOpenMenu={handleOpenMenu}
              isMobile={isMobile}
            />
          )}

          <Grid item className={classes.rootPages} xs>
            <Box
              className={
                !isMobile ? classes.switchBtn : classes.switchBtnMobile
              }>
              <DarkModeSwitch
                isMobile={isMobile}
                setDarkmode={setDarkmode}
                darkMode={darkMode}
              />
            </Box>
            <Switch>
              <Route exact path='/portfolio'>
                <AboutMe isMobile={isMobile} />
              </Route>
              <Route exact path='/portfolio/resume'>
                <Resume />
              </Route>
              <Route path='/portfolio/projects'>
                <Portfolio />
              </Route>
              <Route path='*' component={PageNotFound} />
            </Switch>
          </Grid>
          <MenuBtn onClick={handleOpenMenu} isMobile={isMobile} open={open} />
        </Grid>
      </Paper>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
