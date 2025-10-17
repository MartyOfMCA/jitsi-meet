import clsx from 'clsx';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

import { IMessage } from '../../types';

import ChatMessage from './ChatMessage';

interface IProps {

    /**
     * Additional CSS classes to apply to the root element.
     */
    className: string;

    /**
     * The messages to display as a group.
     */
    messages: Array<IMessage>;
}

const useStyles = makeStyles()(theme => {
    return {
        messageGroup: {
            display: 'flex',
            gap: '8px',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
        },

        groupContainer: {
            display: 'flex',

            '&.local': {
                justifyContent: 'flex-end',
            }
        },
    };
});


const ChatMessageGroup = ({ className = '', messages }: IProps) => {
    const { classes } = useStyles();
    const messagesLength = messages.length;

    if (!messagesLength) {
        return null;
    }

    return (
        <div className = { clsx(classes.groupContainer, className) }>
            <div className = { `${classes.messageGroup} chat-message-group ${className}` }>
                {messages.map((message, i) => (
                    <ChatMessage
                        className = { className }
                        key = { i }
                        message = { message }
                        showDisplayName = { true }
                        showTimestamp = { i === messages.length - 1 } />
                ))}
            </div>
        </div>
    );
};

export default ChatMessageGroup;
