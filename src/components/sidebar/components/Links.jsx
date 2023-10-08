/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";
// chakra imports

export function SidebarLinks(props) {
  // Chakra color mode
  let location = useLocation();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const linkStyle = "relative mb-3 flex hover:cursor-pointer";
  const activeLinkStyle = { backgroundColor: "mediumpurple",width:'12rem',padding:'0.4rem' }; 




  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          <Link key={index} to={route.layout + "/" + route.path}>
            <div className="relative mb-3 flex hover:cursor-pointer" style={{paddingLeft:'1rem'}}>
              <li
                key={index}
                to={route.layout + "/" + route.path}
                className={`${linkStyle} ${activeRoute(route.path) ? "bg-mediumpurple" : ""
                  }`}
                style={activeRoute(route.path) ? activeLinkStyle : {}}
              >
                <span
                  className={`${activeRoute(route.path) === true
                      ? "font-bold text-white dark:text-white"
                      : "font-medium text-gray-600"
                    }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${activeRoute(route.path) === true
                      ? "font-bold text-white dark:text-white"
                      : "font-medium text-gray-600"
                    }`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div class="" />
                // <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;