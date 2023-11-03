import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return (
        <div className="flex items-center w-full bg:background z-50 p-6 dark:bg-[#1F1F1F]">
            <Logo />
            <div className="w-full md:ml-auto  justify-between md:justify-end flex items-center gap-x-2
            text-muted-foreground">
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>
            </div>
        </div>
    )
}