import { useState } from 'react';

interface IDates {
  date: number;
  weekday: any;
}

export const useDate = () => {
  let dates: IDates[] = [];

  let now = new Date();

  for (let i = 0; i < 14; i++) {
    dates.push({
      date: now.getDate(),
      weekday: new Date(now).toLocaleDateString('id-ID', { weekday: 'short' }),
    });
    now.setDate(now.getDate() + 1);
  }

  return [dates];
};
