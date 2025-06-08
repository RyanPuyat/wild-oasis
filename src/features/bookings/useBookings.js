import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParams] = useSearchParams();

  //Filter

  const filterValue = searchParams.get('status');

  const filter =
    filterValue && filterValue !== 'all'
      ? { field: 'status', value: filterValue, method: 'eq' }
      : {};

  //Sort
  const sortItem = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortItem.split('-');
  const sortBy = { field, direction };

  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isPending, error, bookings };
}
