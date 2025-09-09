import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Generate encoded query string for todo list based on local date
 * @param localDate - Format 'YYYY-MM-DD', e.g. '2025-09-08'
 * @param zone - Default 'Asia/Jakarta'
 * @param page - Default 1
 * @param limit - Default 10
 * @returns Encoded query string for API
 */
export const dateQuery = (
  localDate: string,
  zone = 'Asia/Jakarta',
  page = 1,
  limit = 10
): string => {
  const start = dayjs.tz(`${localDate} 00:00:00`, zone).utc().toISOString();
  const end = dayjs.tz(`${localDate} 23:59:59`, zone).utc().toISOString();

  const params = new URLSearchParams({
    dateGte: start,
    dateLte: end,
    page: page.toString(),
    limit: limit.toString(),
  });

  return params.toString(); // encoded string
};
