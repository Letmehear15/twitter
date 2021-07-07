import { formatDistance } from 'date-fns';
import { enGB } from 'date-fns/locale';

export const convertDate = (date: Date) =>
  formatDistance(new Date(date), new Date(), { locale: enGB });
