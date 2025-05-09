import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "monochrome";
  href?: string;
  showIcon?: boolean;
  iconOnly?: boolean;
}

export default function Logo({
  className,
  size = "md",
  variant = "default",
  href = "/",
  showIcon = true,
  iconOnly = false,
}: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const iconSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const variantClasses = {
    default:
      "text-primary",
    monochrome: "text-foreground",
  };

  const logoContent = (
    <div className="flex items-center gap-2">
      {showIcon && (
        <img
          src="/rlogo.png"
          alt="CashFlow Logo"
          className={cn("object-contain", iconSizeClasses[size])}
        />
      )}
      {!iconOnly && (
        <span
          className={cn(
            "font-bold",
            sizeClasses[size],
            variantClasses[variant],
            className
          )}
        >
          CashFlow
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="hover:opacity-90 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
