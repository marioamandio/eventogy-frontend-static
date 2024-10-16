import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDateRange(dates) {
  if (!dates || dates.length === 0) return '';

  const dateObjects = dates.map(dateStr => new Date(dateStr));

  dateObjects.sort((a, b) => a - b);

  const firstDate = dateObjects[0];
  const lastDate = dateObjects[dateObjects.length - 1];

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const formatDay = date => new Intl.DateTimeFormat('en-GB', { day: 'numeric' }).format(date);
  const formatMonth = date => new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(date);
  const formatYear = date => new Intl.DateTimeFormat('en-GB', { year: 'numeric' }).format(date);

  if (firstDate.toDateString() === lastDate.toDateString()) {
    return new Intl.DateTimeFormat('en-GB', options).format(firstDate);
  }

  return `From ${formatDay(firstDate)} to ${formatDay(lastDate)} ${formatMonth(firstDate)} ${formatYear(firstDate)}`;
}
