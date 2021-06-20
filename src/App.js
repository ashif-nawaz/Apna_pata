import React from "react";
import Layout from "./components/Layout/Layout";
import { CssBaseline } from "@material-ui/core";
import BestServices from "./components/BestServices/BestServices";
import PropertiesType from "./components/PropertiesType/PropertiesType";
import OurPartners from "./components/OurPartners/OurPartners";
import Connect from "./components/Connect/Connect";
import Booking from "./components/Booking/Booking";
import WelcomeBanner from "./components/WelcomeBanner/WelcomeBanner";




function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <WelcomeBanner />
        <PropertiesType />
        <BestServices />
        <Booking />
        <OurPartners />
        <Connect />
      </Layout>
    </>
  );
}

export default App;
