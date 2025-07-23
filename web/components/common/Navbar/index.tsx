import InfoMenu from "@/components/common/Navbar/info-menu";
import Logo from "@/components/common/Navbar/logo";
import NotificationMenu from "@/components/common/Navbar/notification-menu";
import UserMenu from "@/components/common/Navbar/user-menu";

export default function Navbar() {
  return (
    <header className="border-b px-4 md:px-6 sticky top-0 z-50 bg-background">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary hover:text-primary/90">
              <Logo />
            </a>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {/* Info menu */}
            <InfoMenu />
            {/* Notification */}
            <NotificationMenu />
          </div>
          {/* User menu */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
