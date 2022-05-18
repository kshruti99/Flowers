import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import Search from './Search.js';
import About from './About';
import UserProfile from './UserProfile';
import Header from './Header';
import { Link } from "react-router-dom";
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import _ from 'lodash';
import "bootstrap/dist/css/bootstrap.css";
import './index.css'; //import css file!

const uiConfig = {
	signInOptions: [
		{
			provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
			requireDisplayName: true
		},
		firebase.auth.GoogleAuthProvider.PROVIDER_ID
	],
	credentialHelper: 'none',
	signInFlow: 'popup',
	callbacks: {
		// Avoid redirects after sign-in.
		signInSuccessWithAuthResult: () => false
	}
};

export default function App(props) {
	const [galTag, setGalTag] = useState("");
	const [galResults, getGalResults] = useState([]);
	const [user, setUser] = useState(undefined);

	//error handling and making a spinner for loading
	//const [errorMessage, setErrorMessage] = useState(undefined);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const authUnregisterFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
			if (firebaseUser) {
				setUser(firebaseUser)
				setIsLoading(false)
			}
			else {
				setUser(null)
				setIsLoading(false)
			}
		})

		return function cleanup() {
			authUnregisterFunction();
		}
	}, []);

	useEffect(() => {
		const galResults = props.galObjects.filter(galObj =>
			(galObj.galid + '').indexOf('' + galTag) > -1
		);
		getGalResults(galResults);
	}, [galTag, props.galObjects]);

	//spinner and handling sign out with errors
	const handleSignOut = () => {
		//setErrorMessage(null); //clear any old errors
		firebase.auth().signOut()
	}

	//function which renders list of trails that fit search criteria or all trails when nothing is typed
	const renderGalleryList = (renderProps) => <Gallery {...renderProps} galObjects={galResults} user={user} />

	if (isLoading) {
		return (
			<div className="text-center">
				<i className="fa fa-spinner fa-spin fa-3x" aria-label="Connecting..."></i>
			</div>
		)
	}

	if (!user) {
		return (
			<div className="container">
				<h1>Sign Up!</h1>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			</div>
		);
	}
	else {
		return (
			<div className="container">
				<Header signOutCallback={handleSignOut} />
				<Routes>
					<Route path="/" element={<Gallery uploads={props.galObjects} />} />
					<Route path="about" element={<About />} />
					<Route path="search" element={<Search />} />
					<Route path="userprofile" element={<UserProfile />} />
				</Routes>
			</div>
		);
	}
}