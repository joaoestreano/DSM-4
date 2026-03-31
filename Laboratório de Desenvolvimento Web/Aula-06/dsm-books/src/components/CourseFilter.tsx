import { useBooks } from "../context/BookContext"; 
import { MenuItem, Select, Typography, Box, SelectChangeEvent } from "@mui/material"; 
import { useState } from "react"; 

export default function CourseFilter() {
  const { books } = useBooks();
  
  const [selectedCourse, setSelectedCourse] = useState(""); 
  // Define o estado para aceitar número ou string vazia
  const [selectedSemester, setSelectedSemester] = useState<number | "">("");

  // Gera listas únicas de disciplinas e semestres [cite: 160]
  const courses = [...new Set(books.map(book => book.course))];
  const semesters = [...new Set(books.map(book => book.semester))].sort((a, b) => a - b);

  // Lógica de filtragem por disciplina e semestre [cite: 163, 317]
  const filteredBooks = books.filter(book => {
    const matchCourse = selectedCourse === "" || book.course === selectedCourse;
    const matchSemester = selectedSemester === "" || book.semester === selectedSemester;
    return matchCourse && matchSemester;
  });

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Filtrar por Disciplina e Semestre</Typography> 

      <Typography variant="body2">Disciplina:</Typography>
      <Select 
        value={selectedCourse} 
        onChange={e => setSelectedCourse(e.target.value)} 
        displayEmpty
        fullWidth
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Todas as Disciplinas</MenuItem> 
        {courses.map(course => (
          <MenuItem key={course} value={course}>{course}</MenuItem> 
        ))}
      </Select>

      <Typography variant="body2">Semestre:</Typography>
      <Select 
        value={selectedSemester.toString()} 
        onChange={(e: SelectChangeEvent) => {
          const val = e.target.value;
          setSelectedSemester(val === "" ? "" : Number(val));
        }} 
        displayEmpty
        fullWidth
        sx={{ mb: 4 }}
      >
        <MenuItem value="">Todos os Semestres</MenuItem>
        {semesters.map(sem => (
          <MenuItem key={sem} value={sem.toString()}>{sem}º Semestre</MenuItem>
        ))}
      </Select>

      {/* Listagem dos livros filtrados [cite: 184, 186] */}
      {filteredBooks.map((book, idx) => (
        <Typography key={idx} variant="body1" sx={{ mb: 1, p: 1, borderBottom: '1px solid #eee' }}>
          <strong>{book.title}</strong> - {book.course} ({book.semester}º Semestre)
        </Typography>
      ))}
    </Box>
  );
}