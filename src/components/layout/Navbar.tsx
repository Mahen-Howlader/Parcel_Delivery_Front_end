import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "react-router"
import { ModeToggle } from "./ModeToggler"
import { authApi, useUserInfoQuery, useUserLogoutMutation } from "@/redux/features/auth/auth.api"
import { useAppDispatch } from "@/redux/hook"
import { role } from "@/constants/role"
import Search from "../Search"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/receiver", label: "Dashboard", role: role.receiver },
  { href: "/sender", label: "Dashboard", role: role.sender },
]

export default function Navbar() {
  const { data } = useUserInfoQuery(undefined);
  const [logout] = useUserLogoutMutation();
  const dispatch = useAppDispatch();

  async function handelLogout() {
    await logout(undefined)
    dispatch(authApi.util.resetApiState());
  };


  return (
    <div className="absolute top-10 z-10 w-full  text-white">
      <header className="container mx-auto  px-4 md:px-14">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 md:hidden"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className="py-1.5"
                          active={link.active}
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            {/* Main nav */}
            <div>
              <Link className="text-4xl text-logo text-white" to={"/"}>
                Creation
              </Link>
            </div>
          </div>
          <div>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden pt-2">
              <NavigationMenuList className="gap-x-10 ">
                {navigationLinks.map((link, index) => (
                  <>
                    {
                      link.role === "PUBLIC" && <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          active={link.active}
                          href={link.href}
                          className="font-medium text-white"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    }
                    {
                      link.role === data?.data?.role && <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          active={link.active}
                          href={link.href}
                          className="font-medium text-white"
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    }

                
                  </>
                ))}

                    <NavigationMenuLink>
                      <Search></Search>
                    </NavigationMenuLink>

              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-2">
            <ModeToggle></ModeToggle>
            {
              data?.data?.email && <Button className="cursor-pointer" onClick={() => handelLogout()} variant="secondary" size={"sm"}>
                Logout
              </Button>
            }
            {
              !data?.data?.email && <>
                <Button asChild variant="ghost" className="" size={"lg"}>
                  <Link to={"/login"}>Sign In</Link>
                </Button>
                <Button asChild size="sm" variant={"secondary"} className="text-lg btn-special-font">
                  <Link to={"/register"}>Register</Link>
                </Button></>
            }
          </div>
        </div>
      </header>
    </div>
  )
}
