import { useState } from "react";

import { Box, Grid, TextField, Typography } from "@mui/material";

import { useAuthStore } from "@/store";

export const Login: React.FC = () => {
  const login = useAuthStore((state) => state.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    login(username, password);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTimeout(() => {
        login(username, password);
      }, 100);
    }
  };

  return (
    <>
      <Box sx={{ marginTop: "200px" }}>
        <Grid container spacing={2} textAlign="center">
          <Grid item xs={12}>
            <Typography variant="h5" component="h5">
              BIENVENIDO
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="username"
              type="text"
              label="Usuario"
              variant="filled"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              autoComplete="off"
              required
              sx={{ backgroundColor: "#fff" }}
              onKeyDown={handleKeyDown}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Contraseña"
              type="password"
              variant="filled"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              sx={{ backgroundColor: "#fff" }}
              onKeyDown={handleKeyDown}
            />
          </Grid>
          <Grid item xs={12}>
            <button onClick={() => onSubmit()} className="btn">
              Iniciar sesión
            </button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
