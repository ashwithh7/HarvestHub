import { Link } from "react-router-dom";
import { Sprout, ArrowLeft } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              HarvestHub
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Link to="/">
            <button className="flex items-center text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
