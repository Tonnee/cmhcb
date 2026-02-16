import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    withPadding?: boolean;
}

export function Container({
    children,
    className,
    withPadding = true,
}: ContainerProps) {
    return (
        <div className={clsx("w-full", withPadding && "px-4")}>
            <div className={clsx("max-w-289 mx-auto w-full", className)}>
                {children}
            </div>
        </div>
    );
}
