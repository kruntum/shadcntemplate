import { SheetMenu } from "@/components/sheet-menu";
import SidebarMenu from "@/components/sidebar-menu";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[auto_1fr]">
            <SidebarMenu />
            <div className="flex flex-col ml-0">
                <SheetMenu />
                {children}
            </div>
        </div>
    );
}
