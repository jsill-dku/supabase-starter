import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  isLoading = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";

  const variantStyles = {
    primary: "bg-supabase text-white hover:bg-supabase-dark",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled || isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}