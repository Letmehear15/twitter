import React, { FC, ReactElement } from 'react'

import CommentIcon from '@material-ui/icons/ChatBubbleOutline'
import RepostIcon from '@material-ui/icons/Repeat'
import LikeIcon from '@material-ui/icons/FavoriteBorder'
import ShareIcon from '@material-ui/icons/Share'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import { Container, Grid, Paper, Typography } from '@material-ui/core'

import {useHomeStyles} from '../pages/theme'
import { Link } from 'react-router-dom'

interface TweetProps {
    classes: ReturnType<typeof useHomeStyles>;
    tweet: {
        _id: string;
        messageText: string;
        user: {
            avatarUrl: string;
            fullName: string;
            nickName: string;
        };
    }
}

export const Tweet:FC<TweetProps> = ({classes, tweet}): ReactElement => {
    const { avatarUrl, fullName, nickName } = tweet.user
    const {messageText} = tweet
    return (
       <Link to={`/home/tweet/${tweet._id}`} className={classes.tweetWrapper}>
            <Paper variant="outlined" className={classes.tweet}>
                <Grid container>
                    <Grid item xs={1}>
                        <Avatar src={avatarUrl}/>
                    </Grid>
                    <Grid item xs={11}>
                        <Typography className={classes.tweetHeader}>
                            <b> {fullName} </b>
                            <span>{nickName}</span>
                        </Typography>
                        <Typography>
                            {messageText}
                        </Typography>
                        <Container className={classes.tweetButtonWrapper}>
                            <div className={classes.tweetButon}>
                                <IconButton>
                                    <CommentIcon/>
                                </IconButton>
                                <span className={classes.tweetButtonCount}>3</span>
                            </div>
                            <div className={classes.tweetButon}>
                                <IconButton>
                                    <RepostIcon/>
                                </IconButton>
                            </div>
                            <div className={classes.tweetButon}>
                                <IconButton>
                                    <LikeIcon/>
                                </IconButton>
                            </div>
                            <div className={classes.tweetButon}>
                                <IconButton>
                                    <ShareIcon/>
                                </IconButton>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </Paper>
        </Link>
    )
}

