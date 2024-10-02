import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export function TopDiv() {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const tabContent = (index) => {
    return (
      <Box p={3}>
        <Typography
          variant="h6"
          sx={{ marginBottom: 2, color: theme.palette.primary.main }}
        >
          Manage Modules
        </Typography>
        <FormControlLabel
          control={<Checkbox sx={{ color: theme.palette.primary.main }} />}
          label="User Module"
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: theme.palette.primary.main }} />}
          label="Visa Module"
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: theme.palette.primary.main }} />}
          label="Payment Module"
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: theme.palette.primary.main }} />}
          label="Passport Module"
        />
      </Box>
    );
  };

  return (
    <div className="px-[2vw]">
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          height: isMobile ? "auto" : "40vh",
          paddingRight: isMobile ? "2vw" : "5vw",
        }}
      >
        <Tabs
          orientation={isMobile ? "horizontal" : "vertical"}
          variant="scrollable"
          value={selectedTab}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: isMobile ? 0 : 1,
            borderBottom: isMobile ? 1 : 0,
            borderColor: "divider",
            backgroundColor: theme.palette.background.paper,
            width: isMobile ? "100%" : "auto",
          }}
        >
          <Tab
            label="Users"
            sx={{
              color:
                selectedTab === 0
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
            }}
          />
          <Tab
            label="Core Committee"
            sx={{
              color:
                selectedTab === 1
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
            }}
          />
          <Tab
            label="Team Lead"
            sx={{
              color:
                selectedTab === 2
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
            }}
          />
        </Tabs>
        <Box sx={{ flexGrow: 1 }}>
          {selectedTab === 0 && tabContent(0)}
          {selectedTab === 1 && tabContent(1)}
          {selectedTab === 2 && tabContent(2)}
        </Box>
      </Box>
    </div>
  );
}
