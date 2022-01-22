// eslint-disable-next-line
import { useState } from "react";
import api from "../../api/api";
import { FetchState } from "../../hooks";
import "react-pro-sidebar/dist/css/styles.css";
import Navbar from "../partials/sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./home";
import Organization from "./organization";
import Profile from "./profile";
import Messages from "./messages";
import Domains from "./domains";
import Support from "./support";


const Dashboard = ({ user, dispatch }) => {

  const handleLogout = async (e) => {
    dispatch({ type: FetchState.FETCH_INIT });
    try {
      await api.deleteCurrentSession();
      dispatch({ type: FetchState.FETCH_SUCCESS, payload: null });
    } catch (e) {
      dispatch({ type: FetchState.FETCH_FAILURE });
    }
  }

  return (
    <>
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/organization" component={Organization} />
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
          <Route path="/support" component={Support} />
          <Route path="/Domains" component={Domains} />
        </Switch>
      </Router>
    </div>

      <section className="absolute bottom-0 right-0 py-3 px-6 mr-8 mb-8">
      <button onClick={handleLogout} className="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none">
        Logout 👋
      </button>
    </section>
    </>
  );
};

export default Dashboard;
