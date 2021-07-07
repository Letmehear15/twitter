import { Button, FormControl, FormGroup, TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ModalBlock } from '../../../Components/ModalBlock';
import { InnerProps } from './types';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fetchUser } from '../../../redux/ducks/user/actionCreators';

export interface formData {
  login: string;
  password: string;
}

const formSchema = yup.object().shape({
  login: yup.string().email().required('Write the correct email address'),
  password: yup.string().min(6, 'Minimal 6 symbols.'),
});

const LoginModal: FC<InnerProps> = ({ open, onClose, classes }) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: formData) => {
    dispatch(fetchUser(data));
  };

  return (
    <ModalBlock open={open} onClose={onClose} title="Sign in">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className={classes.loginFormControl}
          component="fieldset"
          fullWidth
        >
          <FormGroup aria-label="position" row>
            <Controller
              name="login"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.login}
                  helperText={errors.login?.message}
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
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.password}
                  helperText={errors.password?.message}
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
              )}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              SignIn
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};

export default LoginModal;
