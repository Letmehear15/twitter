import React, { FC, ReactElement, useState } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import ImageIcon from '@material-ui/icons/ImageOutlined'
import GifIcon from '@material-ui/icons/GifOutlined'
import EqualizerIcon from '@material-ui/icons/EqualizerOutlined'
import SmileIcon from '@material-ui/icons/SentimentSatisfiedOutlined'
import { Avatar, Button, CircularProgress, IconButton } from '@material-ui/core'
import { useHomeStyles } from '../pages/theme'
import { useDispatch } from 'react-redux'
import { setNewTweet } from '../redux/ducks/tweet/actionCreators'

interface NewTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>   
    rowsMax?: number
}

const MAX_TWEET_SIZE = 250;

export const NewTweetForm:FC<NewTweetFormProps> = ({classes, rowsMax}):ReactElement => {
    const [text, setText] = useState<string>('')
    const dispatch = useDispatch()

    const circularPercent = (text.length / MAX_TWEET_SIZE) * 100
    const textCount = MAX_TWEET_SIZE - text.length
    
    const onSendNewTweet = () => {
        dispatch(setNewTweet(text))
        setText('')
    }

    return (
        <div className={classes.newTweetForm}>
            <div className={classes.newTweetHeader}>
                <Avatar  src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/106790663_402825934011360_5775613421261144688_o.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_ohc=avD6oaKxyV0AX9GFcKE&_nc_ht=scontent-arn2-1.xx&oh=23917a4e2dd96190372b8a85c46d02b2&oe=60351A96"/>
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
                        <ImageIcon/>
                    </IconButton>
                    <IconButton color="primary"  aria-label="gif">
                        <GifIcon/>
                    </IconButton>
                    <IconButton color="primary" aria-label="grapch">
                        <EqualizerIcon/>
                    </IconButton>
                    <IconButton color="primary" aria-label="smile">
                        <SmileIcon/>
                    </IconButton>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {
                        circularPercent > 0 && 
                        <>
                            <span>{textCount}</span>
                            <CircularProgress 
                                size={25} 
                                className={classes.progressCircular} 
                                variant="determinate" 
                                value={circularPercent <= 100 ?  circularPercent : 100}
                                color = {circularPercent >= 100 ? 'secondary' : 'primary'} 
                            />
                        </>
                    }
                    <Button 
                        disabled={ circularPercent <= 0 || circularPercent > 100 } 
                        style={{height: 40, width: 90, marginRight: 7}} 
                        variant="contained" 
                        color="primary"
                        onClick={onSendNewTweet}
                    >
                        Tweet
                    </Button>
                </div>
            </div>
        </div>
    )
}
