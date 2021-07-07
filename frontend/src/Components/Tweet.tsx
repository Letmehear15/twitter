import React, { FC, ReactElement } from 'react';

import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepostIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { Container, Grid, Paper, Typography } from '@material-ui/core';

import { useHomeStyles } from '../pages/theme';
import { Link } from 'react-router-dom';
import { convertDate } from '../utils/dateFormat';

interface TweetProps {
  classes: ReturnType<typeof useHomeStyles>;
  tweet: {
    _id: string;
    text: string;
    images?: [];
    createdAt: string;
    user: {
      _id?: string;
      email: string;
      fullName: string;
      username: string;
      password: string;
      confirmed?: boolean;
      confirmHash?: string;
      location?: string;
      website?: string;
      about?: string;
    };
  };
}

export const Tweet: FC<TweetProps> = ({ classes, tweet }): ReactElement => {
  const { fullName, username } = tweet.user;
  const { text, createdAt } = tweet;

  return (
    <Link to={`/home/tweet/${tweet._id}`} className={classes.tweetWrapper}>
      <Paper variant="outlined" className={classes.tweet}>
        <Grid container>
          <Grid item xs={1}>
            <Avatar
              src={
                'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/106790663_402825934011360_5775613421261144688_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=B0ktzhuO3Q8AX-y10Kl&_nc_ht=scontent-prg1-1.xx&oh=55d673c64ce73863ff07aa1a4097392c&oe=60C6ADF8'
              }
            />
          </Grid>
          <Grid item xs={11}>
            <Typography className={classes.tweetHeader}>
              <b> {fullName} </b>
              <span>@{username}</span>
              <span style={{ marginLeft: 20 }}>
                {convertDate(new Date(createdAt))}
              </span>
            </Typography>
            <Typography>{text}</Typography>
            <Container className={classes.tweetButtonWrapper}>
              <div className={classes.tweetButon}>
                <IconButton>
                  <CommentIcon />
                </IconButton>
                <span className={classes.tweetButtonCount}>3</span>
              </div>
              <div className={classes.tweetButon}>
                <IconButton>
                  <RepostIcon />
                </IconButton>
              </div>
              <div className={classes.tweetButon}>
                <IconButton>
                  <LikeIcon />
                </IconButton>
              </div>
              <div className={classes.tweetButon}>
                <IconButton>
                  <ShareIcon />
                </IconButton>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};
