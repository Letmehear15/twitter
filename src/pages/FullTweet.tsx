import { CircularProgress } from '@material-ui/core';
import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Tweet } from '../Components/Tweet';
import { fetchTweet, setTweetData } from '../redux/ducks/fullTweet/actionCreators';
import { loadingTweet, selectFullTweet } from '../redux/ducks/fullTweet/selector';
import { useHomeStyles } from './theme';

export const FullTweet = (): ReactElement | null => {
    const classes = useHomeStyles()
    const dispatch = useDispatch()
    const params:{id?: string} = useParams()
    const id = params.id

    const tweet = useSelector(selectFullTweet)
    const isLoading = useSelector(loadingTweet)

    useEffect(() => {
        if(id) {
            dispatch(fetchTweet(id))
        }

        return () => {
            dispatch(setTweetData(undefined))
        }
    }, [dispatch, id])

    if(isLoading) {
        return <div className={classes.loadCenter}>
            <CircularProgress/>  
        </div> 
    }

    if(tweet) {
        return <Tweet classes={classes} tweet={tweet}/>
    }

    return null
}
