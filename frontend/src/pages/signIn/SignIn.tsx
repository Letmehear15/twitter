import { Button, makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import React, { FC, useState } from 'react'
import LoginModal from './signModalComponents/LoginModal';
import RegisterModal from './signModalComponents/RegisterModal';

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
      display: 'flex',
      height: '100vh',
    },
    blueSide: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#71C9F8',
      flex: '0 0 50%',
      overflow: 'hidden',
      position: 'relative',
    },
    blueSideBigIcon: {
      position: 'absolute',
      left: '50%',
      top: '53%',
      transform: 'translate(-50%, -50%)',
      width: '260%',
      height: '260%',
    },
    blueSideListInfo: {
      position: 'relative',
      listStyle: 'none',
      padding: 0,
      margin: 0,
      width: 407,
      '& h6': {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: 20,
      },
    },
    loadingWindow: {
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0, 0.473)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99999
    },
    blueSideListInfoItem: {
      marginBottom: 40,
    },
    blueSideListInfoIcon: {
      fontSize: 32,
      marginRight: 15,
    },
    loginSide: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 50%',
    },
    loginSideTwitterIcon: {
      fontSize: 45,
    },
    loginSideWrapper: {
      width: 380,
    },
    loginSideTitle: {
      fontWeight: 700,
      fontSize: 32,
      marginBottom: 60,
      marginTop: 20,
    },
    loginSideField: {
      marginBottom: 18,
    },
    registerField: {
      marginBottom: theme.spacing(5),
    },
    loginFormControl: {
      marginBottom: theme.spacing(2),
    },
  }));
  

const SignIn: FC = () => {

    const classes = useStylesSignIn()
    const [visibleModal, setVisibleModal] = useState<'signUp'|'signIn'>()

    const onHandleOpenSignIn = () => {
      setVisibleModal('signIn')
    }

    const onHandleOpenSignUp = () => {
      setVisibleModal('signUp')
    }

    const onHandleCloseModal = () => {
      setVisibleModal(undefined)
    }

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                  <li className={classes.blueSideListInfoItem}>
                      <Typography variant="h6">
                        <SearchIcon className={classes.blueSideListInfoIcon} />
                        Read about what you are interested in
                      </Typography>
                  </li>
                  <li className={classes.blueSideListInfoItem}>
                      <Typography variant="h6">
                        <PeopleIcon className={classes.blueSideListInfoIcon} />
                        Find out, what talking about in the world 
                      </Typography>
                  </li>
                  <li className={classes.blueSideListInfoItem}>
                      <Typography variant="h6">
                        <MessageIcon className={classes.blueSideListInfoIcon} />
                        Join the conversation
                      </Typography>
                  </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                  <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                  <Typography className={classes.loginSideTitle} gutterBottom variant="h4">
                      Find out what is happening in the world at the moment
                  </Typography>
                  <Typography>
                      <b>Join Twitter right now!</b>
                  </Typography>
                  <br />
                  <Button
                      onClick={onHandleOpenSignUp}
                      style={{ marginBottom: 20 }}
                      variant="contained"
                      color="primary"
                      fullWidth>
                      Sign Up
                  </Button>
                  <Button 
                    onClick={onHandleOpenSignIn} 
                    variant="outlined" 
                    color="primary" 
                    fullWidth
                  >
                      Sign In
                  </Button>
                  <LoginModal 
                    classes={classes} 
                    open={visibleModal === 'signIn'}
                    onClose={onHandleCloseModal}
                  />
                  <RegisterModal 
                    classes={classes} 
                    open={visibleModal === 'signUp'} 
                    onClose={onHandleCloseModal} 
                  />
                </div>
            </section>
        </div>
    )
}

export default SignIn