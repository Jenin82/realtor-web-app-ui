"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Settings, Building2, Users, LifeBuoy, ChevronsUpDown, ChevronRight, Sun } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Listing", url: "/dashboard/listing", icon: Building2 },
  { title: "Teams", url: "/dashboard/teams", icon: Users },
]

const settingsItems = [
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
  { title: "Support", url: "/dashboard/support", icon: LifeBuoy },
]

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-primary/15 flex items-center justify-center">
              <Sun className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold">Assetz</span>
          </div>
          <button className="rounded-md p-1 hover:bg-sidebar-accent" aria-label="Change organization">
            <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => {
                const isActive =
                  item.url === "/dashboard"
                    ? pathname === item.url
                    : pathname === item.url || pathname.startsWith(item.url + "/")
                const Icon = item.icon
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url} className="flex items-center">
                        <div
                          className={cn(
                            "mr-1.5 flex size-6 items-center justify-center rounded-md",
                            isActive ? "bg-primary/15 text-primary" : "text-muted-foreground"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {isActive && (
                      <SidebarMenuAction className="pointer-events-none">
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </SidebarMenuAction>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => {
                const isActive = pathname === item.url || pathname.startsWith(item.url + "/")
                const Icon = item.icon
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url} className="flex items-center">
                        <div
                          className={cn(
                            "mr-1.5 flex size-6 items-center justify-center rounded-md",
                            isActive ? "bg-primary/15 text-primary" : "text-muted-foreground"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {isActive && (
                      <SidebarMenuAction className="pointer-events-none">
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </SidebarMenuAction>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="my-2" />
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Arthur Tylor"
            />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <div className="text-sm font-medium">Arthur Tylor</div>
            <div className="text-xs text-muted-foreground">
              arthur@assetz.com
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
