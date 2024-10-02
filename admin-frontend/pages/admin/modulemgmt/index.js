import React, { useState } from "react";
import { MainSideBar } from "@/Components/MainSideBar/MainSideBar";
import { HeroDivMgmt } from "@/Components/ModuleMgmt/HeroDivMgmt/HeroDivMgmt";
import { TopDiv } from "@/Components/ModuleMgmt/TopDiv/TopDiv";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  Divider,
  useTheme,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function ModuleMgmt() {
  const [openSection, setOpenSection] = useState("first");
  const theme = useTheme();

  const handleSectionClick = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <section className="flex gap-[1vw] py-[4vh]">
      <MainSideBar />
      <div className="w-[100vw]">
        <h1 className="text-3xl font-extrabold px-[2vw]">Module Management</h1>
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            margin: "auto",
            mt: 5,
          }}
        >
          <List component="nav">
            <ListItem>
              <ListItemButton
                onClick={() => handleSectionClick("first")}
                sx={{
                  backgroundColor:
                    openSection === "first"
                      ? "#0C1E33" // Set your desired blue color for selected tab
                      : "inherit",
                  color: openSection === "first" ? "#fff" : "inherit", // White text color for selected tab
                  "&:hover": {
                    backgroundColor:
                      openSection !== "first" ? "#F0F2F5" : "#0C1E60", // Light gray hover color
                    color: openSection !== "first" ? "black" : "white", // Default text color on hover
                  },
                }}
              >
                <ListItemText primary="Module Management - Top Level" />
                {openSection === "first" ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openSection === "first"} timeout="auto" unmountOnExit>
              <TopDiv />
            </Collapse>

            <Divider />

            <ListItem>
              <ListItemButton
                onClick={() => handleSectionClick("second")}
                sx={{
                  backgroundColor:
                    openSection === "second"
                      ? "#0C1E33" // Set your desired blue color for selected tab
                      : "inherit",
                  color: openSection === "second" ? "#fff" : "inherit", // White text color for selected tab
                  "&:hover": {
                    backgroundColor:
                      openSection !== "second" ? "#F0F2F5" : "#0C1E60", // Light gray hover color
                    color: openSection !== "second" ? "black" : "white", // Default text color on hover
                  },
                }}
              >
                <ListItemText primary="Module Management - User Level" />
                {openSection === "second" ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse
              in={openSection === "second"}
              timeout="auto"
              unmountOnExit
            >
              <HeroDivMgmt />
            </Collapse>
          </List>
        </Box>
      </div>
    </section>
  );
}
