import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Doctors } from "./components/Doctors";
import { DoctorDetail } from "./components/DoctorDetail";
import { Blog } from "./components/Blog";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { TreatmentDetail } from "./components/TreatmentDetail";
import { Treatments } from "./components/Treatments";
import { NotFound } from "./components/NotFound";
import { AdminLogin } from "./components/AdminLogin";
import { AdminRoute } from "./components/AdminRoute";
import { BlogDetail } from "./components/BlogDetail";
import { TreatmentSubcategoryDetail } from "./components/TreatmentSubcategoryDetail";
import { AdminShell } from "./components/AdminShell";
import { AdminArticlesPage } from "./components/AdminArticlesPage";
import { AdminLeadsPage } from "./components/AdminLeadsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "doctors", Component: Doctors },
      { path: "doctors/:id", Component: DoctorDetail },
      { path: "treatments", Component: Treatments },
      { path: "treatments/:id", Component: TreatmentDetail },
      { path: "treatments/:id/:subcategoryId", Component: TreatmentSubcategoryDetail },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "admin/login", Component: AdminLogin },
      {
        path: "admin",
        Component: AdminRoute,
        children: [
          {
            Component: AdminShell,
            children: [
              { index: true, element: <Navigate to="/admin/articles" replace /> },
              { path: "articles", Component: AdminArticlesPage },
              { path: "leads", Component: AdminLeadsPage },
            ],
          },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
