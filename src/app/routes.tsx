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
      { path: "blog", Component: Blog },
      { path: "about", Component: AboutContact },
      { path: "*", Component: NotFound },
    ],
  },
]);
