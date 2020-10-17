import React from "react";
import {
  ListItem as ListItemMaterial,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";

interface ListItemProps {
  imageUrl: string;
  header: string;
  button?: boolean;
  onClick?: () => void;
}

const ListItem: React.SFC<ListItemProps> = ({
  imageUrl,
  header,
  button,
  onClick,
}) => {
  return (
    // @ts-ignore
    <ListItemMaterial button={button} onClick={onClick}>
      <ListItemAvatar>
        <Avatar src={imageUrl} />
      </ListItemAvatar>
      <ListItemText primary={header} />
    </ListItemMaterial>
  );
};

export default ListItem;
