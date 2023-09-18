import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Search from "./components/Search";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Weather from "./components/Weather";


const queryClient = new QueryClient();
const  Hello = () => <h2>Welcome! Please Enter a City Name</h2>

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Search />} >
        <Route index element={<Hello />} />
        <Route path=':city' element={<Weather />} />
      </Route>
      

    )
  )

  
  

  return (
    
      <QueryClientProvider client={queryClient} >
        
        <RouterProvider router={router} />
      </QueryClientProvider>
      

    
  )
}

export default App
