import { Paper, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHomeStyles } from '../pages/theme'
import { selectTrends } from '../redux/ducks/trends/selector'

interface TrendsOwnProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const Trends:FC<TrendsOwnProps> = ({classes}) => {

    const trends = useSelector(selectTrends)

    return (
        <Paper className={classes.rightSideTrendsWrapper} variant="outlined">
            <Typography variant="h6">
                Trends for you
            </Typography>
            {
                trends.map(trend => {
                    return (
                        <Link to={`/search?q=#${trend.tag}`} key={trend._id}> 
                            <div className={classes.rightSideTrend} key={trend._id}>
                                <span className={classes.trendHead}> {trend.head} </span>
                                <span className={classes.trendHashtag}> {trend.tag} </span>
                                <span className={classes.trendCountOfPeople}> 1mln people are tweeting about this</span>
                            </div>
                        </Link>
                    )
                })
            }
        </Paper>
    )
}
