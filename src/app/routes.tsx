import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Doctors } from "./components/Doctors";
import { DoctorDetail } from "./components/DoctorDetail";
import { Blog } from "./components/Blog";
import { AboutContact } from "./components/AboutContact";
import { TreatmentDetail } from "./components/TreatmentDetail";
import { Treatments } from "./components/Treatments";
import { NotFound } from "./components/NotFound";
import { AdminLogin } from "./components/AdminLogin";
import { AdminPanel } from "./components/AdminPanel";
import { AdminRoute } from "./components/AdminRoute";
import { BlogDetail } from "./components/BlogDetail";
import { TreatmentSubcategoryDetail } from "./components/TreatmentSubcategoryDetail";

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
      { path: "about", Component: AboutContact },
      { path: "admin/login", Component: AdminLogin },
      {
        path: "admin",
        Component: AdminRoute,
        children: [{ index: true, Component: AdminPanel }],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
