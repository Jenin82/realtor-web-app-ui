"use client"

import type { ReactNode } from "react"
import { Plus } from "lucide-react"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="flex h-14 items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mx-2 h-6" />
            <div className="font-semibold">Dashboard</div>
            <div className="ml-auto flex items-center gap-2">
              <Input placeholder="Search..." className="w-56 hidden md:block" />
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create Request
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/images/avatar.png" alt="@you" />
                <AvatarFallback>YT</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
