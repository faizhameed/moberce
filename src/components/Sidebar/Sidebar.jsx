import {
  Button,
  Divider,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@material-ui/core";
import React from "react";
import CustomSlider from "../Slider/Slider";
import Styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={Styles.aside}>
      {/* OS Memory and RAM dropdowns */}
      <h3>Show results for ...</h3>
      <Divider />

      <List
        subheader={
          <ListSubheader
            style={{
              padding: 0,
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            OS
          </ListSubheader>
        }
      >
        <ListItem className={Styles.ListItem}>
          <ListItemIcon
            style={{
              minWidth: "unset",
            }}
          >
            <Checkbox
              edge="start"
              defaultChecked={true}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": "Android" }}
            />
          </ListItemIcon>
          <ListItemText
            id="Android"
            primary="Android"
            className={Styles.ListItemText}
          />
        </ListItem>
        <ListItem className={Styles.ListItem}>
          <ListItemIcon
            style={{
              minWidth: "unset",
            }}
          >
            <Checkbox
              edge="start"
              defaultChecked={true}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": "IOS" }}
            />
          </ListItemIcon>
          <ListItemText
            id="IOS"
            primary="IOS"
            className={Styles.ListItemText}
          />
        </ListItem>
      </List>

      <List
        subheader={
          <ListSubheader
            style={{
              padding: 0,
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            RAM
          </ListSubheader>
        }
      >
        <ListItem className={Styles.ListItem}>
          <ListItemIcon
            style={{
              minWidth: "unset",
            }}
          >
            <Checkbox
              edge="start"
              defaultChecked={true}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": "4 GB" }}
            />
          </ListItemIcon>
          <ListItemText
            id="4_GB"
            primary="4 GB"
            className={Styles.ListItemText}
          />
        </ListItem>
        <ListItem className={Styles.ListItem}>
          <ListItemIcon
            style={{
              minWidth: "unset",
            }}
          >
            <Checkbox
              edge="start"
              defaultChecked={true}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": "6 GB" }}
            />
          </ListItemIcon>
          <ListItemText
            id="6_GB"
            primary="6 GB"
            className={Styles.ListItemText}
          />
        </ListItem>
        <ListItem className={Styles.ListItem}>
          <ListItemIcon
            style={{
              minWidth: "unset",
            }}
          >
            <Checkbox
              edge="start"
              defaultChecked={true}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": "8 GB or higher" }}
            />
          </ListItemIcon>
          <ListItemText
            id="8_GB_or_higher"
            primary="8 GB or higher"
            className={Styles.ListItemText}
          />
        </ListItem>
      </List>

      <List
        subheader={
          <ListSubheader
            style={{
              padding: 0,
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            MEMORY STORAGE
          </ListSubheader>
        }
      >
        <ListItem className={Styles.ListItem}>
          <ListItemIcon
            style={{
              minWidth: "unset",
            }}
          >
            <Checkbox
              edge="start"
              defaultChecked={true}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": "32 GB" }}
            />
          </ListItemIcon>
          <ListItemText
            id="32_GB"
            primary="32 GB"
            className={Styles.ListItemText}
          />
        </ListItem>
        <ListItem className={Styles.ListItem}>
          <ListItemIcon
            style={{
              minWidth: "unset",
            }}
          >
            <Checkbox
              edge="start"
              defaultChecked={true}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": "64 GB" }}
            />
          </ListItemIcon>
          <ListItemText
            id="64_GB"
            primary="64 GB"
            className={Styles.ListItemText}
          />
        </ListItem>
        <ListItem className={Styles.ListItem}>
          <ListItemIcon
            style={{
              minWidth: "unset",
            }}
          >
            <Checkbox
              edge="start"
              defaultChecked={true}
              tabIndex={-1}
              inputProps={{ "aria-labelledby": "128 GB or higher" }}
            />
          </ListItemIcon>
          <ListItemText
            id="128_GB_or_higher"
            primary="128 GB or higher"
            className={Styles.ListItemText}
          />
        </ListItem>
      </List>
      <CustomSlider />
      <Divider
        style={{
          marginBottom: "20px",
        }}
      />
      <Button variant="contained" color="primary">
        Apply
      </Button>
    </aside>
  );
};

export default Sidebar;
