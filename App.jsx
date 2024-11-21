import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import Root from "./root/Root";
import DashboardRoot from "./dashboard/DashboardRoot";
import ForEvents from "./pages/ForEvent/ForEvents";

import Profile from "./pages/Profile";
import Reviews from "./pages/Reviews";

import Portfolio from "./pages/Porfolio";
import RequestPersonnel from "./pages/RequestPersonnel/RequestPersonnel";

import Dashboard from "./dashboard/Dashboard";

import Offers from "./dashboard/eventSource/offers/Offers";
import Prospects from "./dashboard/eventSource/prospects/Prospect";
import Eventsource from "./dashboard/eventSource/Eventsource";
import AllProspects from "./dashboard/eventSource/prospects/pages/AllProspects";
import AddProspects from "./dashboard/eventSource/prospects/pages/AddProspect";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import AllOffers from "./dashboard/eventSource/offers/pages/AllOffers";

import AddOffers from "./dashboard/eventSource/offers/pages/AddOffers";

import Contract from "./dashboard/eventSource/contractsPages/Contract";
import AllContracts from "./dashboard/eventSource/contractsPages/pages/AllContracts";
import AddContracts from "./dashboard/eventSource/contractsPages/pages/AddContracts";

import Events from "./dashboard/planner/events/Events";
import AddEvents from "./dashboard/planner/events/pages/AddEvents";
// import AllEvents from "./dashboard/planner/events/pages/AllEvents";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Auth from "./pages/Auth/Auth";
import { action as authAction } from "./pages/Auth/Auth";
import { action as logoutAction } from "./pages/Auth/Logout";

import { action as searchAction } from "./pages/Search/Search";

// import ErrorPage from "./pages/Auth/Errorpage";
import { checkAuthLoader, tokenLoader } from "./utils/Auth";

import Payments from "./dashboard/planner/payments/Payments";
import AddPayment from "./dashboard/planner/payments/AddPayment";
import AllPayments from "./dashboard/planner/payments/AllPayments";
import HomeRoot from "./pages/HomeRoot";
import Search from "./pages/Search/Search";
import Entrypass from "./dashboard/planner/entrypass/Entrypass";
import AllEvents from "./dashboard/planner/events/pages/AllEvents";
import AllEntry from "./dashboard/planner/entrypass/pages/AllEntry";
import AddEntry from "./dashboard/planner/entrypass/pages/AddEntry";
import ProspectInfo from "./dashboard/eventSource/prospects/pages/ProspectInfo";
import ForPersonnel from "./pages/forPersonnel/ForPersonnel";
import PersonnelJobDescription from "./pages/forPersonnel/PersonnelJobDescription";
import Marketplace from "./dashboard/eventSource/marketplace/Marketplace";
import Webpage from "./dashboard/eventSource/marketplace/pages/Webpage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ProfileSettings from "./dashboard/ProfileSettings";
import Subscriptions from "./dashboard/Subscription";

import OfferInfo from "./dashboard/eventSource/offers/pages/OfferInfo";
import useCheckTokenExpiration from "./hooks/useCheckTokenExpiration";
import ContractInfo from "./dashboard/eventSource/contractsPages/pages/ContractInfo";
import PaymentInfo from "./dashboard/planner/Payments/pages/PaymentInfo";
import Crm from "./dashboard/crm/Crm";


const theme = createTheme({
  typography: {
    fontFamily: "Euclid Circular A",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <HomeRoot />,
        loader: tokenLoader,
        children: [
          { index: true, path: "", element: <Home /> },
          { path: "for-events", element: <ForEvents />, action: searchAction },
          { path: "event-personnel", element: <ForPersonnel /> },
          {
            path: "event-personnel/job-id",
            element: <PersonnelJobDescription />,
          },
          { path: "portfolio/:productId", element: <Portfolio /> },
          { path: "profile", element: <Profile /> },
          { path: "reviews", element: <Reviews /> },
          { path: "request", element: <RequestPersonnel /> },
          {
            path: "search",
            element: <Search />,
            action: searchAction,
          },
        ],
      },

      {
        path: "auth",
        element: <Auth />,
        action: authAction,
        // errorElement: <ErrorPage />,
      },
      { path: "logout", action: logoutAction },

      {
        path: "",
        element: <DashboardRoot />,
        loader: checkAuthLoader,
        action: authAction,
        children: [
          { index: true, path: "dashboard", element: <Dashboard /> },
          {path: "settings", element: <ProfileSettings />},
          {path: "subscriptions", element: <Subscriptions />},
          {
            path: "prospects",
            element: <Eventsource />,
          },
          { path: "prospects", element: <Prospects /> },

          { path: "prospects/all-prospects", element: <AllProspects /> },
          { path: "prospects/add-prospects", element: <AddProspects /> },
          { path: "prospects/prospect-info/:id", element: <ProspectInfo /> },

          { path: "offers", element: <Offers /> },
          { path: "offers/all-offers", element: <AllOffers /> },

          { path: "offers/add-offers", element: <AddOffers /> },
          { path: "offers/add-offers/:id", element: <AddOffers /> },
          { path: "offers/offer-info/:id", element: <OfferInfo /> },

          { path: "contracts", element: <Contract /> },
          { path: "contracts/all-contracts", element: <AllContracts /> },
          { path: "contracts/add-contracts", element: <AddContracts /> },
          { path: "contracts/add-contracts/:id", element: <AddContracts /> },
          { path: "contracts/contract-info/:id", element: <ContractInfo /> },

          { path: "marketplace", element: <Marketplace /> },
          { path: "marketplace/edit-webpage", element: <Webpage /> },

          { path: "events", element: <Events /> },
          { path: "events/add-events", element: <AddEvents /> },
          {
            path: "events/all-events",
            element: <AllEvents />,
          },
          { path: "payments", element: <Payments /> },
          { path: "payments/add-payments", element: <AddPayment /> },
          { path: "payments/all-payments", element: <AllPayments /> },
          { path: "payments/payment-info/:id", element: <PaymentInfo /> },

          { path: "entrypass", element: <Entrypass /> },
          { path: "entrypass/all-entrypass", element: <AllEntry /> },
          { path: "entrypass/add-entrypass", element: <AddEntry /> },

          {path: "crm", element: <Crm />}
        ],
      },
    ],
  },
]);
const queryClient = new QueryClient();
const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

function App() {
  const [showDevtools, setShowDevtools] = React.useState(false);

  // useCheckTokenExpiration();

  React.useEffect(() => {
    // @ts-expect-error
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
}

export default App;