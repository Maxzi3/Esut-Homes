
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "aos/dist/aos.css";
import MainLayout from "./Layouts/MainLayout";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import LodgesPage from "./Pages/LodgesPage";
import TestimonialPage from "./Pages/TestimonialPage";
import LodgesLearnMore from "./Pages/LodgesLearnMore";
import AddLodgePage from "./Pages/AddLodgePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/About" element={<AboutPage/>}/>
      <Route path="/Lodges" element={<LodgesPage/>}/>
      <Route path="/Testimonial" element={<TestimonialPage/>}/>
      <Route path="/Lodges/:id" element={<LodgesLearnMore/>}/>
      <Route path="/AddLodges" element={<AddLodgePage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Route>)
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
