import React from 'react';
import {
  Box,
  Checkbox,
  Typography,
  IconButton,
  Chip,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Habit } from '../store/habitsSlice';
import { useAppDispatch } from '../store/hooks';
import { toggleHabit, deleteHabit } from '../store/habitsSlice';

const CATEGORY_COLORS: Record<string, string> = {
  Saúde: '#10b981',
  Estudo: '#3b82f6',
  Lazer: '#f59e0b',
  Alimentação: '#ef4444',
  Fitness: '#8b5cf6',
  Geral: '#6b7280',
};

interface HabitItemProps {
  habit: Habit;
  onEdit: (habit: Habit) => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onEdit }) => {
  const dispatch = useAppDispatch();
  const color = CATEGORY_COLORS[habit.category] || '#6366f1';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        p: 2,
        borderRadius: 2.5,
        mb: 1.5,
        background: habit.completed
          ? 'rgba(99, 102, 241, 0.06)'
          : 'linear-gradient(135deg, #1e1e3a 0%, #1a1a2e 100%)',
        border: `1px solid ${habit.completed ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.06)'}`,
        transition: 'all 0.25s ease',
        opacity: habit.completed ? 0.72 : 1,
        '&:hover': {
          borderColor: 'rgba(99,102,241,0.4)',
          transform: 'translateX(4px)',
          boxShadow: '0 4px 20px rgba(99,102,241,0.12)',
        },
      }}
    >
      <Checkbox
        checked={habit.completed}
        onChange={() => dispatch(toggleHabit(habit.id))}
        icon={<RadioButtonUncheckedIcon sx={{ color: '#4a4a6a' }} />}
        checkedIcon={<CheckCircleIcon sx={{ color: '#6366f1' }} />}
        sx={{ p: 0.5 }}
      />

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          sx={{
            color: habit.completed ? '#64748b' : '#e2e8f0',
            fontFamily: "'Sora', sans-serif",
            fontWeight: 500,
            fontSize: '0.95rem',
            textDecoration: habit.completed ? 'line-through' : 'none',
            transition: 'all 0.2s',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {habit.name}
        </Typography>
      </Box>

      <Chip
        label={habit.category}
        size="small"
        sx={{
          background: `${color}22`,
          color: color,
          border: `1px solid ${color}44`,
          fontFamily: "'Sora', sans-serif",
          fontSize: '0.72rem',
          fontWeight: 600,
          height: 24,
        }}
      />

      <Tooltip title="Editar">
        <IconButton
          size="small"
          onClick={() => onEdit(habit)}
          sx={{
            color: '#4a4a7a',
            '&:hover': { color: '#6366f1', background: 'rgba(99,102,241,0.12)' },
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Excluir">
        <IconButton
          size="small"
          onClick={() => dispatch(deleteHabit(habit.id))}
          sx={{
            color: '#4a4a7a',
            '&:hover': { color: '#ef4444', background: 'rgba(239,68,68,0.12)' },
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default HabitItem;
