/**
=========================================================
* Material Dashboard 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";

// Custom styles for the SidenavItem
import { item, itemContent, itemArrow } from "examples/Sidenav/styles/sidenavItem";
import icon from "../../assets/icons/production.png";

// Material Dashboard 2 PRO React contexts
import { useMaterialUIController } from "context";
import { ListItemIcon } from "@mui/material";
import {
  collapseIconBox,
  collapseIcon,
} from "examples/Sidenav/styles/sidenavCollapse";


const iconStyle = {
  display: "inline-block",
  alignItems: "center",
  position: "absolute",
  top: "55%",
  transform: "translateY(-50%)",
  opacity: 1,
  borderRadius: "50%",
  left:"-20px"
}

function SidenavItem({ color, icon, name, active, nested, children, open, ...rest }) {
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode } = controller;

  return (
    <>
      <ListItem
        {...rest}
        component="li"
        sx={(theme) => item(theme, { active, color, transparentSidenav, whiteSidenav, darkMode })}
      >
        <MDBox
          sx={(theme) =>
            itemContent(theme, {
              active,
              miniSidenav,
              name,
              open,
              nested,
              transparentSidenav,
              whiteSidenav,
              darkMode,
            })
          }
        >
          {/* <div style={iconStyle}>
            <Icon size="xl">
              {icon}
            </Icon> */}
          <ListItemIcon
            sx={(theme) => collapseIconBox(theme, { transparentSidenav, whiteSidenav, darkMode })}
          >
           
            {typeof icon === "string" ? (
               <div style={iconStyle}> 
              <Icon sx={(theme) => collapseIcon(theme, { active })}>icon</Icon>
                </div> 
            ) : (
              <div style={iconStyle}>
              {icon}
              </div>
            )}
            {/* </div> */}
          </ListItemIcon>
          <span style={{position:"absolute"}}>
            {name}
          </span>
          
          {children && (
            <Icon
              component="i"
              sx={(theme) =>
                itemArrow(theme, { open, miniSidenav, transparentSidenav, whiteSidenav, darkMode })
              }
            >
              expand_less
            </Icon>
          )}
        </MDBox>
      </ListItem>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit {...rest}>
          {children}
        </Collapse>
      )}
    </>
  );
}

// Setting default values for the props of SidenavItem
SidenavItem.defaultProps = {
  color: "info",
  active: false,
  nested: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavItem
SidenavItem.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  name: PropTypes.string.isRequired,
  active: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  nested: PropTypes.bool,
  children: PropTypes.node,
  open: PropTypes.bool,
};

export default SidenavItem;
