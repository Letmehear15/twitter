import { Button, FormControl, FormGroup, TextField } from '@material-ui/core'
import React, { FC } from 'react'
import { ModalBlock } from '../../../Components/ModalBlock'
import { InnerProps } from './types'

const LoginModal:FC<InnerProps> = ({open, onClose, classes}) => {
    return (
        <ModalBlock open={open} onClose={onClose} title="Sign in">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  SignIn
                </Button>
              </FormGroup>
            </FormControl>
        </ModalBlock>
    )
}

export default LoginModal