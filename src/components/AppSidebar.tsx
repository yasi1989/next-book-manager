import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Library, PlusCircle, BookOpen } from "lucide-react";

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
    </Sidebar>
  );
};

export default SideMenu;
