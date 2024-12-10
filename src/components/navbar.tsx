import { Link } from "react-router";
import {
  Slash,
  ChevronLeft,
  HomeIcon,
  BellIcon,
  User,
  LogOut,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      <nav className="bg-[#102D61] sticky top-0 text-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-10 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <a href="/">
                  <img
                    className="w-[11.5%]"
                    src="/img/logo-insw.png"
                    alt="logo-insw"
                    srcSet=""
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end">
              <div className="flex flex-shrink-0 items-center justify-end space-x-4">
                <p className="text-xs">
                  {today.toLocaleDateString("id-ID", options) +
                    ` - ` +
                    today.toLocaleTimeString("id-ID")}
                </p>
                <div className="relative">
                  <BellIcon className="w-[1rem] h-[1rem]" />
                  <div className="absolute top-[-4px] right-[-4px] bg-red-500 text-white text-[0.6rem] rounded-full w-3 h-3 flex items-center justify-center">
                    0
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>DW</AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-[#102D61] border-none text-white">
                    <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-500" />
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="hover:bg-white hover:text-[#102D61]">
                        <User />
                        <span>Profil</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuItem className="hover:bg-white hover:text-[#102D61]">
                      <LogOut />
                      <span>Keluar</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-[#FCFCFB] sticky top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-8 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/" className="text-[#102D61]">
                        Beranda
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">SSM QC</BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end">
              <div className="flex flex-shrink-0 items-center space-x-4">
                <Link
                  to={"/"}
                  className="flex text-xs items-center text-[#102D61]"
                >
                  <span className="mr-1 text-xs">
                    <ChevronLeft className="w-[1rem] h-[1rem]" />
                  </span>{" "}
                  Beranda Permohonan
                </Link>
                <Link
                  to={"/"}
                  className="flex text-xs items-center text-[#102D61]"
                >
                  <span className="mr-1">
                    <HomeIcon className="w-[1rem] h-[1rem]" />
                  </span>{" "}
                  Beranda Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
