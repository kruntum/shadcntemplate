"use client"

import { useState } from "react"
import Link from "next/link"
import {

    ChevronFirst,
    ChevronLast,
    Home,
    LineChart,
    Package,
    Package2,
    ShoppingCart,
    Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Badge } from "./ui/badge"



export default function DashboardPage() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className={cn(
            "hidden border-r bg-muted/40 lg:block",
            isCollapsed ? "w-[60px]" : "w-[240px]"
        )}
        >
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-3 lg:h-[60px]">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        {!isCollapsed && <span className="">Acme Inc</span>}
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto h-8 w-8"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? (
                            <ChevronLast className="h-4 w-4" />
                        ) : (
                            <ChevronFirst className="h-4 w-4" />
                        )}
                    </Button>
                </div>
                <div className="flex-1 overflow-auto">
                    <nav className="grid items-start px-2 text-sm font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Home className="h-4 w-4" />
                            {!isCollapsed && <span>Dashboard</span>}
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            {!isCollapsed && (
                                <>
                                    <span>Orders</span>
                                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        6
                                    </Badge>
                                </>
                            )}
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                        >
                            <Package className="h-4 w-4" />
                            {!isCollapsed && <span>Products</span>}
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Users className="h-4 w-4" />
                            {!isCollapsed && <span>Customers</span>}
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <LineChart className="h-4 w-4" />
                            {!isCollapsed && <span>Analytics</span>}
                        </Link>
                    </nav>
                </div>
                {!isCollapsed && (
                    <div className="mt-auto p-4">
                        <Card>
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>
                                    Unlock all features and get unlimited access to our support
                                    team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}