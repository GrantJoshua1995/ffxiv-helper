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
}

const ListItem: React.SFC<ListItemProps> = ({ imageUrl, header }) => {
  return (
    <ListItemMaterial>
      <ListItemAvatar>
        <Avatar src={imageUrl} />
      </ListItemAvatar>
      <ListItemText primary={header} />
    </ListItemMaterial>
  );
};

export default ListItem;
