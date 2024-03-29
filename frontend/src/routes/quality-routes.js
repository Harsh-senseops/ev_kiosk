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

/** 
  All of the routes for the Material Dashboard 2 PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 PRO React layouts
import ProfileOverview from "layouts/pages/profile/profile-overview";
import Settings from "layouts/pages/account/settings";
import SignInBasic from "layouts/authentication/sign-in/basic";
import ProtectedRoute from "util/ProtectedRoute";
import PhysicalPhenomena from "layouts/dashboards/physical-phenomena";

// Material Dashboard 2 PRO React components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// Icons
import adminImg from "assets/images/admin.jpg"
import CachedIcon from '@mui/icons-material/Cached';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const qualityRoutes = [
  {
    type: "collapse",
    name: "Admin",
    key: "brooklyn-alice",
    icon: <MDAvatar src={adminImg} alt="Brooklyn Alice" size="sm" />,
    collapse: [
      {
        name: "Profile",
        key: "my-profile",
        icon:<AccountCircleIcon/>,
        route: "/pages/profile/profile-overview",
        component:  <ProtectedRoute Component = {ProfileOverview} />,
      },
      {
        name: "Settings",
        key: "profile-settings",
        icon:<SettingsIcon/>,
        route: "/pages/account/settings",
        component: <ProtectedRoute Component = {Settings} />,
      },
      {
        name: "Logout",
        key: "logout",
        icon:<LogoutIcon/>,
        route: "/authentication/sign-in/basic",
        component: <ProtectedRoute Component = {SignInBasic} />,
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    collapse: [
      {
        name: "Rejection/Rework",
        key: "physical-phenomena",
        icon:<CachedIcon/>,
        route: "/dashboards/physical-phenomena",
        component: <ProtectedRoute Component = {PhysicalPhenomena} />,
      }
    ],
  },
];

export default qualityRoutes;
