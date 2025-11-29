import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";


import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "@/components/NavLink";

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onMenuClick={() => setSidebarOpen(true)} showMenuButton hideGetStarted showUserControls />

      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <div className="flex flex-col gap-4 mt-8">
            <NavLink to="/dashboard" onClick={() => setSidebarOpen(false)}>Dashboard</NavLink>
            <NavLink to="/materials" onClick={() => setSidebarOpen(false)}>Study Materials</NavLink>
            <NavLink to="/quiz" onClick={() => setSidebarOpen(false)}>Quizzes</NavLink>
            <NavLink to="/forum" onClick={() => setSidebarOpen(false)}>Forum</NavLink>
            <NavLink to="/leaderboard" onClick={() => setSidebarOpen(false)}>Leaderboard</NavLink>
          </div>
        </SheetContent>
      </Sheet>

      <div className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </div>

    </div>
  );
};
