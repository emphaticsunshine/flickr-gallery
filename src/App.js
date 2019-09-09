import React from "react";
import Routes from "./routes";
import Layout from './components/Layout';

import 'reset-css';
import './util/styles/reset.scss';

export default function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}
