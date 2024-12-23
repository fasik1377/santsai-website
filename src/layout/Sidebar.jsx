import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#fff",
    color: "#2c3e50",
  },
  logo: {
    width: "80%",
    height: "auto",
    margin: "20px auto",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "#000", // Black background on hover
      "& $listItemText": {
        color: "white", // White text on hover
      },
      "& $icon": {
        color: "white", // White icon on hover
      },
    },
    "&.Mui-selected": {
      backgroundColor: "green", // Green background for active route
      color: "white", // White text for active route
      "& $listItemText": {
        color: "white", // White text for active route
      },
      "& $icon": {
        color: "white", // White icon for active route
      },
    },
  },
  listItemText: {
    fontSize: "1.2rem",
    color: "#2c3e50", // Default text color
  },
  icon: {
    fontSize: "3.5rem",
    color: "#d7a022", // Default icon color
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();

  const handleItemClick = (title, to) => {
    setSelected(title);
    navigate(to);
  };

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <Box textAlign="center">
          <img src={logo} alt="Logo" className={classes.logo} />
        </Box>

        <>
          <ListItem
            className={classes.listItem}
            onClick={() => handleItemClick("Blogs", "/dashboard")}
            selected={selected === "Blogs"}
            button
          >
            <ListItemIcon style={{ color: "#d7a022" }}>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Blogs" />
          </ListItem>


          <ListItem
            className={classes.listItem}
            onClick={() =>
              handleItemClick("Create Blog", "/createblog")
            }
            selected={selected === "Create Blog"}
            button
          >
            <ListItemIcon style={{ color: "#d7a022" }}>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Create Blog" />
          </ListItem>

          <ListItem
            className={classes.listItem}
            onClick={() => handleItemClick("Case Studies", "/caseStudyTable")}
            selected={selected === "Case Studies"}
            button
          >
            <ListItemIcon style={{ color: "#d7a022" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Case Studies" />
          </ListItem>
          <ListItem
            className={classes.listItem}
            onClick={() => handleItemClick("Create Casestudy", "/createCaseStudyPage")}
            selected={selected === "Create Casestudy"}
            button
          >
            <ListItemIcon style={{ color: "#d7a022" }}>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Create Casestudy" />
          </ListItem>
        </>
      </List>
    </Drawer>
  );
};

export default Sidebar;