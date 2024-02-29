import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const loginUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logoutUser = () => {
		return signOut(auth);
	};

	useEffect(() => {
		let isMounted = true;

		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			if (isMounted) {
				if (currentUser) {
					setUser(currentUser);
					setLoading(false);
					console.log("User is logged in here");
				} else {
					console.log("User is signed out");
					setLoading(false);
					setUser(null);
				}
			}
		});

		return () => {
			isMounted = false;
			unSubscribe();
		};
	}, []);

	return (
		<UserContext.Provider
			value={{
				loginUser,
				user,
				logoutUser,
				loading,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;

export const User = () => {
	return useContext(UserContext);
};
