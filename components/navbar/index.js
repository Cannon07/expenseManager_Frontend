import { useState } from "react";
import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";

const NavBar = (props) => {
  const [activeColor, setActiveColor] = useState("primary");
  const [variant, setVariant] = useState("default");
  const [isActive, setIsActive] = useState(props.page);
  const { isDark } = useTheme();

  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];

  return (
    <Navbar isBordered={isDark} hideIn="xs" variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          TrackME
        </Text>
      </Navbar.Brand>
      <Navbar.Content activeColor={activeColor} variant={variant}>
        <Navbar.Link isActive href="/">
          HomePage
        </Navbar.Link>
        <Navbar.Link href="/transactions">Transaction</Navbar.Link>
        <Navbar.Link href="/category">Categories</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          + Add Transaction
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavBar;
