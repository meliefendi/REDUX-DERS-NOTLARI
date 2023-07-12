import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./reset.css"
import reportWebVitals from './reportWebVitals';
//chakra
import { ChakraProvider } from "@chakra-ui/react"
//redux provider
import { Provider } from 'react-redux';
import { store } from "./redux/store"

//react query(api)
import { QueryClient, QueryClientProvider } from 'react-query'


//const queryClient = new QueryClient();

//başka sayfalara gidip gelindiğinde verilerin tekrar tekrar çekilmesinin önüne geçmek için kullanılır.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,

    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>

    <QueryClientProvider client={queryClient}>

      <ChakraProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>


    </QueryClientProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
