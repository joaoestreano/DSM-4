import React from 'react';
import { Box, Chip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setFilterCategory } from '../store/habitsSlice';
import { selectCategories, selectFilterCategory } from '../store/selectors';

const CategoryFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const filterCategory = useAppSelector(selectFilterCategory);

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2.5 }}>
      {categories.map((cat) => (
        <Chip
          key={cat}
          label={cat}
          onClick={() => dispatch(setFilterCategory(cat))}
          sx={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            fontSize: '0.78rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            background:
              filterCategory === cat
                ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                : 'rgba(255,255,255,0.04)',
            color: filterCategory === cat ? '#fff' : '#94a3b8',
            border: `1px solid ${filterCategory === cat ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
            '&:hover': {
              background:
                filterCategory === cat
                  ? 'linear-gradient(135deg, #4f46e5, #7c3aed)'
                  : 'rgba(99,102,241,0.12)',
              color: '#fff',
            },
          }}
        />
      ))}
    </Box>
  );
};

export default CategoryFilter;
