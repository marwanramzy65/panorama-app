import { BarChart3, Calendar, Home, Settings, TrendingUp, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Overview", url: "/", icon: Home },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Users", url: "/users", icon: Users },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Performance", url: "/performance", icon: TrendingUp },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={`${isCollapsed ? "w-16" : "w-64"} bg-glass border-glass-border transition-all duration-300`}>
      <SidebarContent className="bg-gradient-secondary">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
                <p className="text-xs text-muted-foreground">Analytics Hub</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={`${isCollapsed ? "sr-only" : ""} text-muted-foreground px-6`}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-3">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                          isActive
                            ? "bg-primary/10 text-primary border border-primary/20 shadow-glow"
                            : "text-muted-foreground hover:text-foreground hover:bg-glass/50"
                        }`
                      }
                    >
                      <item.icon 
                        className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110`} 
                      />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}