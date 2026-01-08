import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link";
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from 'lucide-react';

const Sidebar = () => {
    return (
        <Command className="bg-secondary rounded-none">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>
                        <LayoutDashboard className="wr-2 h-4 w-4"/>
                        <Link href="/dashboard">
                        Dashboard
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Newspaper className="wr-2 h-4 w-4"/>
                        <Link href="/post">
                        Post
                        </Link>
                    </CommandItem>
                    <CommandItem>
                        <Folders className="wr-2 h-4 w-4"/>
                        <Link href="#2">
                        Categories
                        </Link>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User className="wr-2 h-4 w-4"/>
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <CreditCard className="wr-2 h-4 w-4"/>
                        <span>Billing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <Settings className="wr-2 h-4 w-4"/>
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
 
export default Sidebar;