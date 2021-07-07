import {
  Avatar,
  CircularProgress,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { ReactElement, useEffect } from 'react';
import RepostIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import {
  fetchTweet,
  setTweetData,
} from '../redux/ducks/fullTweet/actionCreators';
import ShareIcon from '@material-ui/icons/Share';
import {
  loadingTweet,
  selectFullTweet,
} from '../redux/ducks/fullTweet/selector';
import { useHomeStyles } from './theme';
import { format } from 'date-fns';
import enGB from 'date-fns/esm/locale/en-GB/index.js';

export const FullTweet = (): ReactElement | null => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const params: { id?: string } = useParams();
  const id = params.id;

  const tweet = useSelector(selectFullTweet);
  const isLoading = useSelector(loadingTweet);

  useEffect(() => {
    if (id) {
      dispatch(fetchTweet(id));
    }

    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classes.loadCenter}>
        <CircularProgress />
      </div>
    );
  }

  if (tweet) {
    return (
      <Paper className={classes.fullTweet}>
        <div className={classes.tweetsHeaderUser}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${tweet.user.fullName}`}
          />
          <Typography>
            <b>{tweet.user.fullName}</b>&nbsp;
            <br />
            <span className={classes.tweetUserName}>
              @{tweet.user.username}
            </span>
            &nbsp;
          </Typography>
        </div>
        <Typography className={classes.fullTweetText} gutterBottom>
          {tweet.text}
        </Typography>
        <Typography>
          <span className={classes.tweetUserName}>
            {format(new Date(tweet.createdAt), 'H:mm', { locale: enGB })} ·{' '}
          </span>
          <span className={classes.tweetUserName}>
            {format(new Date(tweet.createdAt), 'dd MMM. yyyy г.', {
              locale: enGB,
            })}
          </span>
        </Typography>
        <div
          className={classNames(classes.tweetFooter, classes.fullTweetFooter)}
        >
          <IconButton>
            <CommentIcon style={{ fontSize: 25 }} />
          </IconButton>
          <IconButton>
            <RepostIcon style={{ fontSize: 25 }} />
          </IconButton>
          <IconButton>
            <LikeIcon style={{ fontSize: 25 }} />
          </IconButton>
          <IconButton>
            <ShareIcon style={{ fontSize: 25 }} />
          </IconButton>
        </div>
      </Paper>
    );
  }

  return null;
};
