import Link from "next/link";
import Logo from "./logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavBar() {
  return (
    <header className="w-full py-4 border-b-black border-b-2">
      <nav className="flex flex-row justify-between container mx-auto items-center">
        <Logo />
        <ul className=" flex-row items-center hidden lg:flex justify-start">
          <li className="text-base mr-4">
            <Link href={"/"}>HOME</Link>
          </li>
          <li className="text-base mr-4">
            <Link href={"/"}>ABOUT</Link>
          </li>
          <li className="text-base mr-4">
            <Link href={"/"}>TAGS</Link>
          </li>
          <li className="text-base mr-4 ">
            <Link href={"/"}>AUTHORS</Link>
          </li>
          <li className="text-base ">
            <Link href={"/"}>CONTACT</Link>
          </li>
        </ul>
        <div className="flex flex-row items-center">
          <div className="hidden md:block">
            <button className="bg-white text-black ">SIGN IN</button>
            <button className="px-3 ml-2 py-2 bg-black text-white rounded-full">
              GET STARTED
            </button>
          </div>
          <div className="lg:hidden ml-2">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/"}>HOME</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/"}>ABOUT</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/"}>TAGS</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/"}>AUTHORS</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/"}>CONTACT</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/"}>SIGN IN</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/"}>GET STARTED</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
