import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomeNav from "../homeNav/HomeNav";
import InstallationNav from "../installationNav/installationNav";
import AppsNav from "../appsNav/AppsNav";
import DashBoardNav from "../dashBoardNav/DashBoardNav";
import AppDetails from "../appDetails/AppDetails";
import Error from "../errorPages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: HomeNav
      },
      {
        path: '/apps',
        Component: AppsNav
      },
      {
        path: '/installation',
        Component: InstallationNav
      },
      {
        path: '/dashBoard',
        Component: DashBoardNav
      },
      {
        path: '/appDetails/:appDetailsId',
        Component: AppDetails
      }
    ]
  },
  {
    path: '*',
    Component: Error
  }
]);