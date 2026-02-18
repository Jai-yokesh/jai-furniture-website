import AboutPage from "@/pages/AboutPage";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CategoryPage from "@/pages/CategoryPage";
import ProductsPage from "@/pages/ProductsPage";
import WhatsappFloat from "@/components/WhatsappFloat";


function Router() {
  return (
  <Switch>
  <Route path="/" component={Home} />
  <Route path="/products" component={ProductsPage} />
  <Route path="/collections/:category" component={CategoryPage} />

  <Route path="/about" component={AboutPage} />  {/* ← ADD THIS */}

  <Route component={NotFound} />
</Switch>


  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WhatsappFloat />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
