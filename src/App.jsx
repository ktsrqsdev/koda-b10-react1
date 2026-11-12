import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from "./pages/FormPage";
import DataPage from "./pages/DataPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FormPage />,
    },
    {
        path: "/data",
        element: <DataPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
