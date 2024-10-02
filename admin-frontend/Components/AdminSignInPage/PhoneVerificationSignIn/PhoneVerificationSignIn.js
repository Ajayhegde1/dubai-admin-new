"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import api from "@/utils/apiSetup";
import companyData from "@/utils/data";

export function PhoneVerificationSignIn() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const loginData = {
      username: userName,
      password: password,
    };
    try {
      const res = await api.post("/auth/signin", loginData);
      console.log(res);
      // setTimeout(() => {
      setLoading(false);
      //   router.push("/V1/adminPage"); // Navigate programmatically
      // }, 2000);
      if (res.status === 200) {
        localStorage.setItem(companyData.accessToken, res.data.token);
        const isFromSession = router.query.fromSession;
        isFromSession ? router.back() : router.push("/admin/dashboard");
      }
    } catch (error) {
      setLoading(false);
    }
  };
  // Simulate loading for 2 seconds

  return (
    <section className="w-[100vw] flex justify-center mt-[15vh]">
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          boxShadow: 3,
          height: "auto",
          width: { xs: "90%", sm: "30vw" },
          borderRadius: 2,
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Admin Login
          </Typography>
          <Divider sx={{ width: "100%", my: 1 }} />
        </Box>

        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>

          {/* <Box sx={{ mb: 3 }}>
            <FormControlLabel control={<Checkbox />} label="Remember me" />
          </Box> */}

          <Box sx={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              startIcon={loading ? <CircularProgress size={24} /> : null}
            >
              Sign In
            </Button>
          </Box>
        </form>
      </Box>
    </section>
  );
}
