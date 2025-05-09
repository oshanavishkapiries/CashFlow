import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="default"
              className="text-sm bg-primary text-background hover:opacity-90 flex items-center gap-2"
              onClick={() => {
                window.open("https://github.com/oshanavishkapiries/CashFlow", "_blank");
              }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
