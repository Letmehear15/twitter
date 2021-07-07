import React, { FC } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const BackButton:FC = () => {

    const history = useHistory()

    const onBackHandler = () => {
        history.goBack()
    }

    return (
        <IconButton onClick={onBackHandler} style={{marginRight:20}} color="primary">
            <ArrowBackIcon/>
        </IconButton>
    )
}
