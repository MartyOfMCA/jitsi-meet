import React from 'react';
import { makeStyles } from 'tss-react/mui';

import { IDisplayProps } from '../ConferenceTimer';

const useStyles = makeStyles()(theme => {
    return {
        timer: {
            ...theme.typography.labelRegular,
            color: theme.palette.text01,
            padding: '6px 8px',
            backgroundColor: '#013229AA', // Ancient Media theme.
            boxSizing: 'border-box',
            height: '28px',
            // The room name is removed so the border radius has to be full.
            borderRadius: `${theme.shape.borderRadius}px`,
            marginRight: '2px',

            '@media (max-width: 300px)': {
                display: 'none'
            }
        }
    };
});

/**
 * Returns web element to be rendered.
 *
 * @returns {ReactElement}
 */
export default function ConferenceTimerDisplay({ timerValue, textStyle: _textStyle }: IDisplayProps) {
    const { classes } = useStyles();

    return (
        <span className = { classes.timer }>{ timerValue }</span>
    );
}
