"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SearchBar, type SearchValues } from "@/components/buyer/search-bar";
import { BellDot, Building2Icon, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ProjectNavbar() {
  const router = useRouter();

  function handleSearch(values: SearchValues) {
    const params = new URLSearchParams();
    if (values.city) params.set("city", values.city);
    if (values.q) params.set("q", values.q);
    if (values.type) params.set("type", values.type);
    // Navigate to homepage with filters (can be changed to "/projects" when a listing page exists)
    router.push(`/?${params.toString()}`);
  }

  return (
    <header className="sticky top-0 z-40 bg-[#010101] backdrop-blur supports-[backdrop-filter]:bg-[#010101] m-2 rounded-2xl">
      <div className="w-full px-8 py-4">
        <div className="flex items-center gap-3 justify-between w-full">
          <Link href="/" className="shrink-0 rounded-md hover:opacity-90">
            <Building2Icon size={28} color="white" />
          </Link>
          <div className="flex-1 max-w-[900px]">
            <SearchBar onSearch={handleSearch} hideTopBar />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <BellDot size={18} color="white"/>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-white/10 hover:bg-white/20 p-1 py-2"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Sophia
              <ChevronDown size={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
