import { Button, FormControl, FormGroup, TextField } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { ModalBlock } from '../../../Components/ModalBlock';
import { InnerProps } from './types';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { UserRegisterData } from '../../../redux/ducks/user/contracts/state';
import { registerUser } from '../../../redux/ducks/user/actionCreators';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  selectError,
  selectLoaded,
  selectLoading,
} from '../../../redux/ducks/user/selector';
import Alert from '@material-ui/lab/Alert';

const formSchema = yup.object().shape({
  email: yup.string().email().required('Write the correct email address'),
  password: yup.string().min(6, 'Minimal 6 symbols.'),
  password2: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  fullName: yup.string().min(2, 'Minimal 2 symbols.'),
  username: yup.string().min(2, 'Minimal 2 symbols.'),
});

const RegisterModal: FC<InnerProps> = ({ open, onClose, classes }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const isLoad = useSelector(selectLoaded);

  const [success, setSuccess] = useState<boolean>(false);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: UserRegisterData) => {
    dispatch(registerUser(data));
    reset({
      fullName: '',
      email: '',
      password: '',
      password2: '',
    });
  };
  useEffect(() => {
    if (isLoad) {
      setSuccess(true);
      const timer = setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isLoad]);
  return (
    <ModalBlock open={open} onClose={onClose} title="Sign up">
      {isLoading && (
        <div className={classes.loadingWindow}>
          <CircularProgress />
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className={classes.loginFormControl}
          component="fieldset"
          fullWidth
        >
          <FormGroup aria-label="position" row>
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.registerField}
                  autoFocus
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                  id="fullName"
                  label="Full name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="fullName"
                  fullWidth
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.registerField}
                  autoFocus
                  error={!!errors.email}
                  helperText={errors.email?.message}
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
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.registerField}
                  autoFocus
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  id="userName"
                  label="User name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="userName"
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
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
              )}
            />
            <Controller
              name="password2"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Confirm password"
                  error={!!errors.password2}
                  helperText={errors.password2?.message}
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
              SignUp
            </Button>
          </FormGroup>
        </FormControl>
      </form>
      {isError && (
        <Alert severity="error">There was some error try again later</Alert>
      )}
      {success && (
        <Alert severity="success">You were registered successfully</Alert>
      )}
    </ModalBlock>
  );
};

export default RegisterModal;
