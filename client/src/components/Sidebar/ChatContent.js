import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    letterSpacing: -0.17,
  },
  previewTextBold: {
    fontSize: 12,
    color: theme.palette.text.primary,
    fontWeight: 700,
    letterSpacing: -0.17,
  },
  notification: {
    height: 20,
    width: 20,
    backgroundColor: "#3F92FF",
    marginRight: 10,
    color: "white",
    fontSize: 10,
    letterSpacing: -0.5,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation, isActive } = props;
  const { messages, latestMessageText, otherUser } = conversation;

  let unreadMessages = messages.reduce((acc, message) => {
    return message.senderId === otherUser.id && !message.readStatus
      ? acc + 1
      : acc;
  }, 0);

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography
          className={isActive ? classes.previewTextBold : classes.previewText}
        >
          {latestMessageText}
        </Typography>
      </Box>
      <Box>
        {unreadMessages > 0 && (
          <Typography className={classes.notification}>
            {unreadMessages}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ChatContent;
