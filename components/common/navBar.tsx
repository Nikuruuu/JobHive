import {
  Briefcase,
  Building2,
  FileText,
  Menu,
  Users,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./logo";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface JobHiveNavbarProps {
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const JobHiveNavbar = ({
  menu = [
    { title: "Home", url: "#" },
    {
      title: "For Job Seekers",
      url: "#",
      items: [
        {
          title: "Browse Jobs",
          description: "Discover thousands of job opportunities",
          icon: <Briefcase className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Companies",
          description: "Explore top companies and their culture",
          icon: <Building2 className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Career Resources",
          description: "Tips and guides to advance your career",
          icon: <FileText className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Salary Insights",
          description: "Get insights into salary ranges and trends",
          icon: <Users className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "For Employers",
      url: "#",
      items: [
        {
          title: "Post Jobs",
          description: "Reach qualified candidates with your job postings",
          icon: <Briefcase className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Talent Solutions",
          description: "Advanced tools to find and hire the best talent",
          icon: <Users className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company Profiles",
          description: "Showcase your company culture and values",
          icon: <Building2 className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Support",
          description: "Get help with your hiring needs",
          icon: <HelpCircle className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "About",
      url: "#",
    },
    {
      title: "Contact",
      url: "#",
    },
  ],
  auth = {
    login: { title: "Sign In", url: "#" },
    signup: { title: "Post a Job", url: "#" },
  },
}: JobHiveNavbarProps) => {
  return (
    <section
      className="
      py-4 bg-background border-b border-border
      lg:transition-all lg:duration-200 lg:h-[12vh] lg:z-[10000] lg:fixed lg:top-0 lg:left-0 lg:w-full lg:py-0
    "
    >
      <div
        className="
        container
        lg:flex lg:items-center lg:h-full lg:justify-between lg:w-[92%] lg:mx-auto lg:max-w-none
      "
      >
        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:space-x-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            <NavigationMenu className="relative z-50" viewport={false}>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="text-foreground border-border"
          >
            <a href={auth.login.url}>{auth.login.title}</a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary text-primary-foreground"
          >
            <a href={auth.signup.url}>{auth.signup.title}</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border hover:bg-muted"
                >
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-background">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center">
                      <Logo />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="text-foreground border-border hover:bg-muted"
                    >
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary text-primary-foreground"
                    >
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="hover:text-primary font-medium text-base transition-all duration-200 text-foreground bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-primary">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto bg-popover text-popover-foreground border border-border shadow-lg rounded-md p-4 min-w-[400px]">
          <div className="grid gap-3">
            {item.items.map((subItem) => (
              <div key={subItem.title}>
                <SubMenuLink item={subItem} />
              </div>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="hover:text-primary font-medium text-base transition-all duration-200 text-foreground inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent hover:bg-transparent px-4 py-2 focus:bg-transparent focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="border-b border-border"
      >
        <AccordionTrigger className="text-md py-0 font-semibold text-foreground hover:no-underline hover:text-primary">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="text-md font-semibold text-foreground hover:text-primary transition-colors"
    >
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary"
      href={item.url}
    >
      <div className="text-primary">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold text-foreground">
          {item.title}
        </div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { JobHiveNavbar };
