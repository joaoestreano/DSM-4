import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { selectCompletedCount, selectTotalCount } from '../store/selectors';

const StatsBar: React.FC = () => {
  const completed = useAppSelector(selectCompletedCount);
  const total = useAppSelector(selectTotalCount);
  const progress = total > 0 ? (completed / total) * 100 : 0;

  if (total === 0) return null;

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography sx={{ color: '#94a3b8', fontSize: '0.82rem', fontFamily: "'Sora', sans-serif" }}>
          Progresso do dia
        </Typography>
        <Typography sx={{ color: '#6366f1', fontSize: '0.82rem', fontFamily: "'Sora', sans-serif", fontWeight: 700 }}>
          {completed}/{total} hábitos
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 6,
          borderRadius: 10,
          background: 'rgba(255,255,255,0.06)',
          '& .MuiLinearProgress-bar': {
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
            borderRadius: 10,
          },
        }}
      />
    </Box>
  );
};

export default StatsBar;
