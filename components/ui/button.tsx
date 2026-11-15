import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-[15px] font-semibold leading-none transition-[background-color,border-color,color,transform] duration-150 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-150 hover:[&_svg:last-child]:translate-x-0.5",
    {
        variants: {
            variant: {
                default: "bg-navy text-white hover:bg-navy-hover",
                destructive: "bg-red-700 text-white hover:bg-red-800",
                outline: "border border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
                secondary: "border border-line bg-band text-navy hover:border-line-strong",
                ghost: "text-navy hover:bg-band",
                link: "text-navy underline decoration-transparent decoration-2 underline-offset-[6px] hover:decoration-primary",
                navy: "bg-navy text-white hover:bg-navy-hover",
                cream: "bg-band text-navy hover:bg-line",
            },
            size: {
                default: "h-12 px-6",
                sm: "h-9 px-3",
                lg: "h-12 px-7",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
