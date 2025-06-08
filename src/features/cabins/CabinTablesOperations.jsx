import Filter from '../../ui/Filter';
import Sort from '../../ui/Sort';
import TableOperations from '../../ui/TableOperations';

function CabinTablesOperations() {
  return (
    <TableOperations>
      <Filter
        filteredValue={'discount'}
        options={[
          { value: 'all', label: 'All' },
          { value: 'with-discount', label: 'With Discount' },
          { value: 'no-discount', label: 'No Discount' },
        ]}
      />

      <Sort
        options={[
          {
            value: 'name-asc',
            label: 'Sort by name (A-Z)',
          },
          {
            value: 'name-desc',
            label: 'Sort by name (Z-A)',
          },
          {
            value: 'regularPrice-asc',
            label: 'Sort by price (from lowest)',
          },
          {
            value: 'regularPrice-desc',
            label: 'Sort by price (from highest)',
          },
          {
            value: 'maxCapacity-asc',
            label: 'Sort by capacity (from smallest)',
          },
          {
            value: 'maxCapacity-desc',
            label: 'Sort by capacity (from biggest)',
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTablesOperations;
