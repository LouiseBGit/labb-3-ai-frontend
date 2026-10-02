import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SummarizePage from "../pages/SummarizePage";
import AgendaPage from "../pages/AgendaPage";
import InvitationPage from "../pages/InvitationPage";
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "summarize",
                element: <SummarizePage />,
            },
            {
                path: "agenda",
                element: <AgendaPage />,
            },
            {
                path: "invitation",
                element: <InvitationPage />,
            },
        ],
    },
]);

export default router;
