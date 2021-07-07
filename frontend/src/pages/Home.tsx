import React, { FC, ReactElement, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  Container,
  Grid,
  InputAdornment,
  Paper,
  Typography,
} from '@material-ui/core';
import { Tweet } from '../Components/Tweet';
import { SideMenu } from '../Components/SideMenu';
import CircularProgress from '@material-ui/core/CircularProgress';

import { NewTweetForm } from '../Components/NewTweetForm';
import { useHomeStyles } from './theme';
import { SearchTextField } from '../Components/SearchTweetForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectTweets } from '../redux/ducks/tweet/selector';
import { fetchTweets } from '../redux/ducks/tweet/actionCreators';
import { Trends } from '../Components/Trends';
import { fetchTrends } from '../redux/ducks/trends/actionCreators';
import { Route } from 'react-router-dom';
import { BackButton } from '../Components/BackButton';
import { FullTweet } from './FullTweet';

const Home: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);
  const isLoading = useSelector(selectLoading);
  const classes = useHomeStyles();

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTrends());
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" className={classes.mainWrapper}>
            <Route path="/home" exact>
              <Paper variant="outlined" className={classes.mainHeader}>
                <Typography variant="h6"> Home </Typography>
              </Paper>
            </Route>
            <Route path={['/home/tweet/:id', '/search']} exact>
              <Paper variant="outlined" className={classes.mainHeader}>
                <BackButton />
                <Typography variant="h6"> Tweets </Typography>
              </Paper>
            </Route>

            <Route exact path={['/home', '/search']}>
              <NewTweetForm classes={classes} />
            </Route>

            <div
              style={{ height: 10, width: '100%', backgroundColor: '#E6ECF0' }}
            ></div>
            <Route exact path="/home">
              {isLoading ? (
                <div className={classes.loadCenter}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => (
                  <Tweet key={tweet._id} classes={classes} tweet={tweet} />
                ))
              )}
            </Route>
            <Route exact path="/home/tweet/:id" component={FullTweet} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              fullWidth
              placeholder="Search Twitter"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Trends classes={classes} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
