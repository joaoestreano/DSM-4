import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Button } from "@mui/material";
import { BooksProvider } from "./context/BookContext";
import Home from "./pages/Home";
import Course from "./pages/Course";

export default function App() {
  return (
    <BooksProvider>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/course">Filtrar por Disciplina</Button>
          </Toolbar>
        </AppBar>
        
        <Container sx={{ marginTop: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </BooksProvider>
  );
}