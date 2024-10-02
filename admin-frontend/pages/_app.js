import "@/styles/globals.css";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import store from "../store/store";
import { persistedStore } from "../store/store";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <div>
      {/* <Component {...pageProps} /> */}
      <Provider store={store}>
        {/* <Loading /> */}
        <PersistGate persistor={persistedStore} loading={null}>
          <Component {...pageProps} />
          <ToastContainer autoClose={2000} />
        </PersistGate>
      </Provider>
    </div>
  );
}
