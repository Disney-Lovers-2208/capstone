import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { Link } from "@mui/material";
import { Divider } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdModeEdit } from "react-icons/md";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        paperprops={{
          lg: {
            width: 600,
          },
        }}
      >
        <Link href={`/profile`} underline="none" color="#03045e">
          <ListItem key={1}>
            <ListItemButton>
              <ListItemIcon>
                <CgProfile color="black" size={20} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link href={`/profile`} underline="none" color="#03045e">
          <ListItem key={2}>
            <ListItemButton>
              <ListItemIcon>
                <AiFillEye color="black" size={20} />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link href={`/profile`} underline="none" color="#03045e">
          <ListItem key={3}>
            <ListItemButton>
              <ListItemIcon>
                <AiFillHeart color="black" size={20} />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link href={`/profile/friends`} underline="none" color="#03045e">
          <ListItem key={4}>
            <ListItemButton>
              <ListItemIcon>
                <FaUserFriends color="black" size={20} />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
        <Link href={`/profile/edit`} underline="none" color="#03045e">
          <ListItem key={5}>
            <ListItemButton>
              <ListItemIcon>
                <MdModeEdit color="black" size={20} />
              </ListItemIcon>
              <ListItemText primary="Edit" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <GiHamburgerMenu color="#03045e" size={40} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
