import { Button, Grid, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined'
import EmailIcon from '@material-ui/icons/MailOutlineOutlined'
import BookmarIcon from '@material-ui/icons/BookmarkBorder'
import ListIcon from '@material-ui/icons/FormatListBulleted'
import PersonIcon from '@material-ui/icons/Person'

import React, { FC, ReactElement, useState } from 'react'
import { Link } from "react-router-dom"
import { useHomeStyles } from '../pages/theme'
import { ModalBlock } from './ModalBlock'
import { NewTweetForm } from './NewTweetForm'

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu:FC<SideMenuProps> = ({classes}): ReactElement => {

    const [createNewTweet, setCreateNewTweet] = useState(false)

    const onCloseHandle = () => {
        setCreateNewTweet(false)
    }

    const onOpenHandle = () => {
        setCreateNewTweet(true)
    }

    return (
        <Grid style={{position: 'sticky',top: '12px'}} container direction="column" alignItems="center">
            <ul className={classes.menuList}>
                <Link to = '/home'>
                    <TwitterIcon color="primary" style={{fontSize:40, cursor: 'pointer', marginLeft: 10}} />
                </Link>
                <li className={classes.menuItem}>
                    <div>
                        <SearchIcon className={classes.menuIcon}/>
                        <Typography> Search</Typography>
                    </div>
                </li>
                <li className={classes.menuItem}>
                    <div>
                        <NotificationsIcon className={classes.menuIcon}/>
                        <Typography> Notifications </Typography>
                    </div>
                </li>
                <li className={classes.menuItem}>    
                    <div>
                        <EmailIcon  className={classes.menuIcon}/>
                        <Typography> Messages </Typography>
                    </div>
                </li>
                <li className={classes.menuItem}>
                    <div>
                        <BookmarIcon  className={classes.menuIcon}/>
                        <Typography> Bookmarks </Typography>
                    </div>
                </li>
                <li className={classes.menuItem}>
                    <div>
                        <ListIcon  className={classes.menuIcon}/>
                        <Typography> Lists </Typography>
                    </div>
                </li>
                <li className={classes.menuItem}>
                    <div>
                        <PersonIcon  className={classes.menuIcon}/>
                        <Typography> Profile </Typography>
                    </div>
                </li>
            </ul>
            <Button onClick={onOpenHandle} style={{marginTop: 20, height: 49, width: "70%"}}  variant="contained" color="primary">
                Tweet
            </Button>
            <ModalBlock open={createNewTweet} onClose={onCloseHandle}>
                <NewTweetForm onCloseHandle={onCloseHandle} rowsMax={15} classes={classes}/>
            </ModalBlock>
        </Grid>
    )
}

