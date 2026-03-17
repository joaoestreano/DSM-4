import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import HabitForm from './components/HabitForm';
import HabitItem from './components/HabitItem';
import CategoryFilter from './components/CategoryFilter';
import StatsBar from './components/StatsBar';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { clearCompleted, Habit } from './store/habitsSlice';
import { selectFilteredHabits, selectCompletedCount } from './store/selectors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0d0d1a', paper: '#1a1a2e' },
    primary: { main: '#6366f1' },
  },
  typography: {
    fontFamily: "'Sora', sans-serif",
  },
});

function App() {
  const dispatch = useAppDispatch();
  const habits = useAppSelector(selectFilteredHabits);
  const completedCount = useAppSelector(selectCompletedCount);
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'radial-gradient(ellipse at top left, #1a1040 0%, #0d0d1a 50%, #0a0a14 100%)',
          py: 5,
          px: 2,
        }}
      >
        <Box sx={{
          position: 'fixed', top: -120, left: -80, width: 400, height: 400,
          borderRadius: '50%', background: 'rgba(99,102,241,0.07)', filter: 'blur(80px)', pointerEvents: 'none',
        }} />
        <Box sx={{
          position: 'fixed', bottom: -100, right: -60, width: 300, height: 300,
          borderRadius: '50%', background: 'rgba(139,92,246,0.07)', filter: 'blur(80px)', pointerEvents: 'none',
        }} />

        <Container maxWidth="md" sx={{ position: 'relative' }}>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                background: 'linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.03em',
                mb: 1,
              }}
            >
              Hábitos Diários
            </Typography>
            <Typography sx={{ color: '#475569', fontFamily: "'Sora', sans-serif", fontSize: '0.9rem' }}>
              Construa consistência, um dia de cada vez
            </Typography>
          </Box>

          <HabitForm
            editingHabit={editingHabit}
            onCancelEdit={() => setEditingHabit(null)}
          />

          <StatsBar />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1, flexWrap: 'wrap', gap: 2 }}>
            <CategoryFilter />
            {completedCount > 0 && (
              <Button
                startIcon={<DeleteSweepIcon />}
                onClick={() => dispatch(clearCompleted())}
                variant="outlined"
                size="small"
                sx={{
                  borderColor: 'rgba(239,68,68,0.3)',
                  color: '#ef4444',
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.78rem',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 2,
                  '&:hover': { borderColor: '#ef4444', background: 'rgba(239,68,68,0.08)' },
                }}
              >
                Limpar concluídos ({completedCount})
              </Button>
            )}
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.04)', mb: 2 }} />

          {habits.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography sx={{ fontSize: '3rem', mb: 2 }}>🌱</Typography>
              <Typography sx={{ color: '#334155', fontFamily: "'Sora', sans-serif", fontSize: '0.9rem' }}>
                Nenhum hábito cadastrado ainda.<br />Comece adicionando o seu primeiro hábito!
              </Typography>
            </Box>
          ) : (
            habits.map((habit) => (
              <HabitItem
                key={habit.id}
                habit={habit}
                onEdit={(h) => setEditingHabit(h)}
              />
            ))
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
