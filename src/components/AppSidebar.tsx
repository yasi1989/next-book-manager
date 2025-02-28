import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Library, PlusCircle, BookOpen, LogInIcon } from "lucide-react";
import Link from "next/link";

const SideMenu = () => {
  const items = [
    { title: "Books", url: "/", icon: Library },
    { title: "Add Book", url: "/add/", icon: PlusCircle },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-lg text-white font-semibold text-foreground flex py-2 px-4 items-center gap-4">
          <BookOpen className="h-8 w-8 text-green-700" />
          BookManager
        </h1>
      </SidebarHeader>
      <SidebarContent className="text-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="text-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SignedOut>
              <SidebarMenuButton asChild size="lg">
                <Link href={"/sign-in"}>
                  <LogInIcon/><span>Logged In</span>
                </Link>
              </SidebarMenuButton>
            </SignedOut>
            <SignedIn>
              <SidebarMenuButton asChild>
                <UserButton />
              </SidebarMenuButton>
            </SignedIn>
            </SidebarMenuItem>
          </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideMenu;
