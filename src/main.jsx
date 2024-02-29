import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import App from "./App.jsx";
import UserContextProvider from "./context/UserAuthContext.jsx";
import "./index.css";
import { store } from "./redux/app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<Provider store={store}>
				<Toaster />
				<UserContextProvider>
					<App />
				</UserContextProvider>
			</Provider>
		</ChakraProvider>
	</React.StrictMode>,
);
