import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import useRuta from "../components/utils/useRuta";

const SignIn = () => {
  useRuta({ link: "/SignIn", ruta: "Ingreso" });
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingreso
        </Typography>
        <Box component="form">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
          />
          <Button type="submit" fullWidth variant="contained">
            Enviar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
              ¿Olvido su clave?
              </Link>
            </Grid>
            
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
