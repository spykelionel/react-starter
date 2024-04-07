import { Layout } from "@components";
import { Home } from "@pages";
import { createBrowserRouter } from "react-router-dom";

const children = [
  { element: <Home />, path: "/" },
  { element: <>report-crime</>, path: "report-crime" },
  { element: <>Fraud-detection</>, path: "fraud-detection" },
  { element: <>Statistics</>, path: "statistics" },
  { element: <>Blog</>, path: "blog" },
  { element: <>Tips</>, path: "tips" },
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    errorElement: (
      <a href="/" className="text-center">
        This page does not exist
      </a>
    ),
    children,
  },
]);
