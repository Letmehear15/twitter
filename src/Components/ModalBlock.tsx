import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React, { FC } from 'react'

export const ModalBlock:FC<InnerProps> = ({open, onClose, children, title}) => {
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={onClose} color="secondary" aria-label="close">
                    <CloseIcon style={{ fontSize: 26 }} color="secondary" />
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

type InnerProps = {
    children: React.ReactNode
    open: boolean
    onClose: () => void
    title?: string
}