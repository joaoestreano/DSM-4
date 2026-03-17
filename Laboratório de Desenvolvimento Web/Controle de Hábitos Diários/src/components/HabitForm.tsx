import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
  Typography,
  SelectChangeEvent,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SaveIcon from '@mui/icons-material/Save';
import { useAppDispatch } from '../store/hooks';
import { addHabit, editHabit, Habit } from '../store/habitsSlice';

const PRESET_CATEGORIES = ['Saúde', 'Estudo', 'Lazer', 'Alimentação', 'Fitness', 'Geral'];

interface HabitFormProps {
  editingHabit?: Habit | null;
  onCancelEdit?: () => void;
}

const HabitForm: React.FC<HabitFormProps> = ({ editingHabit, onCancelEdit }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [nameError, setNameError] = useState(false);

  useEffect(() => {
    if (editingHabit) {
      setName(editingHabit.name);
      setCategory(editingHabit.category);
    } else {
      setName('');
      setCategory('');
    }
  }, [editingHabit]);

  const handleSubmit = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);

    if (editingHabit) {
      dispatch(editHabit({ id: editingHabit.id, name: name.trim(), category: category || 'Geral' }));
      if (onCancelEdit) onCancelEdit();
    } else {
      dispatch(addHabit({ name: name.trim(), category: category || 'Geral' }));
    }

    setName('');
    setCategory('');
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 3,
        borderRadius: 3,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, color: '#e2e8f0', fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
      >
        {editingHabit ? '✏️ Editar Hábito' : '✨ Novo Hábito'}
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <TextField
          label="Nome do hábito *"
          value={name}
          onChange={(e) => { setName(e.target.value); setNameError(false); }}
          error={nameError}
          helperText={nameError ? 'Nome é obrigatório' : ''}
          sx={{ flex: '1 1 200px', ...textFieldSx }}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />

        <FormControl sx={{ flex: '1 1 160px' }}>
          <InputLabel sx={{ color: '#94a3b8' }}>Categoria</InputLabel>
          <Select
            value={category}
            label="Categoria"
            onChange={(e: SelectChangeEvent) => setCategory(e.target.value)}
            sx={selectSx}
          >
            {PRESET_CATEGORIES.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start', mt: 0.5 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            startIcon={editingHabit ? <SaveIcon /> : <AddCircleOutlineIcon />}
            sx={btnSx}
          >
            {editingHabit ? 'Salvar' : 'Adicionar'}
          </Button>
          {editingHabit && (
            <Button
              variant="outlined"
              onClick={onCancelEdit}
              sx={{ ...btnOutlineSx }}
            >
              Cancelar
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    color: '#e2e8f0',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
    '&:hover fieldset': { borderColor: '#6366f1' },
    '&.Mui-focused fieldset': { borderColor: '#6366f1' },
  },
  '& .MuiInputLabel-root': { color: '#94a3b8' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#6366f1' },
};

const selectSx = {
  color: '#e2e8f0',
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.12)' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#6366f1' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#6366f1' },
  '& .MuiSvgIcon-root': { color: '#94a3b8' },
};

const btnSx = {
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  borderRadius: 2,
  px: 3,
  py: 1.5,
  fontFamily: "'Sora', sans-serif",
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': { background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' },
};

const btnOutlineSx = {
  borderColor: 'rgba(255,255,255,0.2)',
  color: '#94a3b8',
  borderRadius: 2,
  px: 2,
  py: 1.5,
  textTransform: 'none',
  fontFamily: "'Sora', sans-serif",
  '&:hover': { borderColor: '#94a3b8', background: 'rgba(255,255,255,0.04)' },
};

export default HabitForm;
