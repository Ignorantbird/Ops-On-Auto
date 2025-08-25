import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonTertiaryProps {
  to?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonTertiary = ({ 
  to, 
  className, 
  children,
  onClick
}: ButtonTertiaryProps) => {
  const linkClass = cn(
    "inline-flex items-center text-primary font-medium hover:text-primary-dark underline-offset-4 hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm min-h-[44px]",
    className
  );

  if (to && !onClick) {
    return (
      <Link to={to} className={linkClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={linkClass}>
      {children}
    </button>
  );
};

export default ButtonTertiary;