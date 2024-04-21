import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { MailIcon } from "./MailIcon";
import { LockIcon } from "./LockIcon";
import "../App.css";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  // Login Code

  const { user, logoutUser, loginUser } = useAuth();
  const navigate = useNavigate();
  localStorage.setItem("user", JSON.stringify(user));

  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = { email, password };
    loginUser(userInfo);
  };

  // Login Code End

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["Home", "About", "Contact", "Projects"];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="shadow"
        variant="sticky"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-xl text-inherit custom-font">
              VIVEK NIGAM
            </p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarBrand>
            <p className="font-bold text-xl text-inherit custom-font">
              VIVEK NIGAM
            </p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-14 " justify="center">
          <NavbarItem isActive>
            <NavLink to="/">
              <Link aria-current="page">
                <code>{"<Home />"}</code>
              </Link>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/about">
              <Link color="foreground">
                <code>{"<About />"}</code>
              </Link>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/contact">
              <Link color="foreground">
                <code>{"<Contact />"}</code>
              </Link>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/projects">
              <Link color="danger">
                <code>{"<Projects />"}</code>
              </Link>
            </NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="center">
          <NavbarItem>
            <Link>
              {user ? (
                <Dropdown placement="bottom-start">
                  <DropdownTrigger>
                    <User
                      as="button"
                      avatarProps={{
                        isBordered: true,
                        src: "https://avatars.githubusercontent.com/u/68178450?v=4",
                      }}
                      className="transition-transform"
                      description="Admin"
                      name="Vivek Nigam"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="profile">Profile</DropdownItem>
                    <DropdownItem key="dashboard" href="/dashboard">
                      Dashboard
                    </DropdownItem>
                    <DropdownItem
                      key="logout"
                      color="danger"
                      onClick={logoutUser}
                    >
                      <p className="text-red-500">Log Out</p>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Button color="success" variant="flat" onPress={onOpen}>
                  <code>{"<Login/>"}</code>
                </Button>
              )}
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" color={"foreground"} href="#" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    ref={userEmail}
                    required
                    name="email"
                    type="email"
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  <Input
                    ref={userPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    name="password"
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                  />
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                    <Link color="primary" href="#" size="sm">
                      Forgot password?
                    </Link>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit" name="submit">
                    Sign in
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default Header;
