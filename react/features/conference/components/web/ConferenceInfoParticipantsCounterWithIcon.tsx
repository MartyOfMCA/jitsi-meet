import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { IconUsers } from '../../../base/icons/svg';

import { getParticipantCountForDisplay } from '../../../base/participants/functions';

const useStyles = makeStyles()(theme => {
    return {
        parent: {
            width: '20px',
            placeContent: 'center',
            backgroundColor: theme.palette.ui01,
            fill: 'white', // This will change the fill for the icon through CSS inheritance
            paddingInline: '8px',
            position: 'relative',
            borderRadius: '6px',
        },
        badge: {
            backgroundColor: theme.palette.ui0,
            borderRadius: '100%',
            height: '16px',
            minWidth: '16px',
            color: theme.palette.text01,
            ...theme.typography.labelBold,
            pointerEvents: 'none',
            position: 'absolute',
            right: '-4px',
            top: '-3px',
            textAlign: 'center',
            padding: '1px'
        }
    };
});

const ConferenceInfoParticipantsCounterWithIcon = () => {
    const { classes } = useStyles();
    const participantsCount = useSelector(getParticipantCountForDisplay);

    return (
        <div className= { classes.parent }>
            <IconUsers />
            <span className = { classes.badge }>{participantsCount}</span>
        </div>
    );
};

export default ConferenceInfoParticipantsCounterWithIcon;
