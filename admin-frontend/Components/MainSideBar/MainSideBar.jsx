import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import { PiChartPieSliceFill } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { FaPaypal, FaUsers } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiSurveyLine } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { BsCalendarEvent } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdMenu,
} from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import Link from "next/link";
import { useTheme, useMediaQuery } from "@mui/material";
import { Payment } from "@mui/icons-material";

export function MainSideBar() {
  const [page, setPage] = useState({ link: "Overview", state: false });
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePageClick = (link) => {
    setPage((prevState) => ({
      link,
      state: prevState.link === link ? !prevState.state : true,
    }));
  };

  const drawer = (
    <div className="h-full bg-[#0C1E33] text-white">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, px: 2 }}
        >
          Rotary
        </Typography>
      </Toolbar>

      <List sx={{ mx: 1 }}>
        <Link href="/admin/dashboard" passHref>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ pl: 4, borderRadius: 1 }}
              className={`${
                page.link === "dashboard" ? "bg-gray-200 dark:bg-gray-800" : ""
              }`}
              onClick={() => handlePageClick("dashboard")}
            >
              <ListItemIcon>
                <PiChartPieSliceFill style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link href="/admin/advertisement" passHref>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                bgcolor:
                  page.link === "Advertisement" ? "grey.200" : "transparent",
                borderRadius: 1,
              }}
              onClick={() => handlePageClick("Advertisement")}
            >
              <ListItemIcon>
                <FaUsers style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Adverstisement" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/admin/modulemgmt" passHref>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                bgcolor:
                  page.link === "modulemgmt" ? "grey.200" : "transparent",
                borderRadius: 1,
              }}
              onClick={() => handlePageClick("modulemgmt")}
            >
              <ListItemIcon>
                <AiOutlineUser style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Module Management" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/admin/payment" passHref>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                bgcolor: page.link === "payment" ? "grey.200" : "transparent",
                borderRadius: 1,
              }}
              onClick={() => handlePageClick("payment")}
            >
              <ListItemIcon>
                <FaPaypal style={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Payment Track" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <nav>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { md: "none" }, ml: 1 }}
      >
        <MdMenu />
      </IconButton>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={!isMobile || mobileOpen}
        onClose={isMobile ? handleDrawerToggle : undefined}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          // background: "#0C1E33",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        ModalProps={{
          keepMounted: false,
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
}
