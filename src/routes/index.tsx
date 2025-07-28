import config from "@/config";
import { MainLayout } from "@/layout";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/ContactUs";
import Finance from "@/pages/Finance";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Opportunities from "@/pages/Opportunities";
import Services from "@/pages/Service";
import Tips from "@/pages/Tips";
import { Route } from "@/types/routeType";


const publicRoutes = [
  {
    path: config.routes.home, // "/"
    component: Home,
  },
  {
    path: config.routes.service, // "/services"
    component: Services,
  },
  {
    path: config.routes.about, // "/about"
    component: About,
  },
   {
    path: config.routes.opportunities, // "/opportunities"
    component: Opportunities,
  }, 
  {
    path: config.routes.finance, // "/finance"
    component: Finance,
  }, 
  {
    path: config.routes.contact, // "/contact"
    component: Contact,
  }, {
    path: config.routes.blog, // "/Blog"
    component: Blog,
  }
  ,{
    path: config.routes.tips, // "/Tips"
    component: Tips,
  }, 
  {
    path: config.routes.notFound, // "/NotFound"
    component: NotFound,
  }, 
];


export { publicRoutes };
