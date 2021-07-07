import React, { FC, ReactElement, useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import GifIcon from '@material-ui/icons/GifOutlined';
import EqualizerIcon from '@material-ui/icons/EqualizerOutlined';
import SmileIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useHomeStyles } from '../pages/theme';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewTweet } from '../redux/ducks/tweet/actionCreators';
import {
  selectErrorTweet,
  selectLoadingTweet,
} from '../redux/ducks/tweet/selector';

interface NewTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
  rowsMax?: number;
  onCloseHandle?: () => void;
}

const MAX_TWEET_SIZE = 250;

export const NewTweetForm: FC<NewTweetFormProps> = ({
  classes,
  rowsMax,
  onCloseHandle = () => ({}),
}): ReactElement => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();
  const isPosting = useSelector(selectLoadingTweet);
  const isError = useSelector(selectErrorTweet);

  const circularPercent = (text.length / MAX_TWEET_SIZE) * 100;
  const textCount = MAX_TWEET_SIZE - text.length;

  const onSendNewTweet = () => {
    dispatch(fetchNewTweet(text));
    setText('');
    onCloseHandle();
  };

  return (
    <div className={classes.newTweetForm}>
      <div className={classes.newTweetHeader}>
        <Avatar src="https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/106790663_402825934011360_5775613421261144688_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=B0ktzhuO3Q8AX-y10Kl&_nc_ht=scontent-prg1-1.xx&oh=55d673c64ce73863ff07aa1a4097392c&oe=60C6ADF8" />
        <TextareaAutosize
          className={classes.newTweetText}
          placeholder="What's happening?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rowsMax={rowsMax}
          rowsMin={4}
        />
      </div>
      <div className={classes.newTweetButtons}>
        <div>
          <IconButton color="primary" aria-label="image">
            <ImageIcon />
          </IconButton>
          <IconButton color="primary" aria-label="gif">
            <GifIcon />
          </IconButton>
          <IconButton color="primary" aria-label="grapch">
            <EqualizerIcon />
          </IconButton>
          <IconButton color="primary" aria-label="smile">
            <SmileIcon />
          </IconButton>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {circularPercent > 0 && (
            <>
              <span>{textCount}</span>
              <CircularProgress
                size={25}
                className={classes.progressCircular}
                variant="determinate"
                value={circularPercent <= 100 ? circularPercent : 100}
                color={circularPercent >= 100 ? 'secondary' : 'primary'}
              />
            </>
          )}
          <Button
            disabled={circularPercent <= 0 || circularPercent > 100}
            style={{ height: 40, width: 90, marginRight: 7 }}
            variant="contained"
            color="primary"
            onClick={onSendNewTweet}
          >
            {isPosting ? (
              <CircularProgress size={15} color="inherit" />
            ) : (
              'Tweet'
            )}
          </Button>
        </div>
      </div>
      {isError && (
        <Alert severity="error">
          There was an error while posting the tweet
        </Alert>
      )}
    </div>
  );
};
