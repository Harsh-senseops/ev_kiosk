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

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 PRO React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 PRO React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 PRO React routes
import routes from "routes/routes";
import productionRoutes from "routes/production-routes";
import qualityRoutes from "routes/quality-routes";

// Material Dashboard 2 PRO React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import heroLogo from "assets/images/logos/logo192.png";

// urql imports
import { Client, Provider, defaultExchanges, subscriptionExchange, ssrExchange } from "urql";
import { createClient as createWSClient } from 'graphql-ws';
import UserContext from "layouts/pages/userContext";
import {useSelector} from "react-redux"

// graphql url
const senseopsHTTPServerURL = "http://localhost:4000/graphql";
const senseopsWSServerURL = "ws://localhost:4000/graphql";


// const hmclHTTPServerURL = "http://10.79.3.37:4000/graphql";
// const hmclWSServerURL = "ws://10.79.3.37:4000/graphql";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const [ro,setRo] = useState("hola")
  const { pathname } = useLocation();
  const userRoles = useSelector((store)=>{
    return store.userRoles
  })

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);


const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  function authorizeUser() {
      let user = userRoles.roles
      if(user === 1){
        return {
          fun:getRoutes(routes),
          route:routes,
          location:"/dashboards/planned-production"
        }
      }
      else if(user === 2){
        return {
          fun:getRoutes(qualityRoutes),
          route:qualityRoutes,
          location:"/dashboards/physical-phenomena"
        }
      }else{
        return {
          fun:getRoutes(productionRoutes),
          route:productionRoutes,
          location:"/dashboards/planned-production"
        }
      }
    }

    const wsClient = createWSClient({
      url: senseopsWSServerURL,
    });
  
    const client = new Client({
      url: senseopsHTTPServerURL,
      exchanges: [
        ...defaultExchanges,
        subscriptionExchange({
          forwardSubscription: (operation) => ({
            subscribe: (sink) => ({
              unsubscribe: wsClient.subscribe(operation, sink),
            }),
          }),
        }),
      ],
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return direction === "rtl" ? (
    <Provider value={client}>
    <UserContext.Provider value={{ name: 'abc' }}>
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? "EV" : "EV"}
              brandName="logo"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
        {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboards/physical-phenomena" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
    </UserContext.Provider>
    </Provider>
  ) : (
    <Provider value={client}>
    <UserContext.Provider value={{ name: 'abc' }}>
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            // brand={(transparentSidenav && !darkMode) || whiteSidenav ? "EV" : "EV"}
            brandName="ELECTRIC VEHICLE"
            routes={authorizeUser().route}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
      {/* {getRoutes(qualityRoutes)} */}
      {authorizeUser().fun}
        <Route path="*" element={<Navigate to={authorizeUser().location} />} />
      </Routes>
    </ThemeProvider>
    </UserContext.Provider>
    </Provider>
  );
}
