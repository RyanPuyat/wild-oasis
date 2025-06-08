import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useCabins } from './useCabins';
import { useSearchParams } from 'react-router-dom';

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

function CabinTable() {
  //Abstracted to useCabin.js
  // const {
  //   isPending,
  //   data: cabins,
  //   error,
  // } = useQuery({
  //   queryKey: ['cabins'],
  //   queryFn: getCabins,
  // });

  const { isPending, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isPending) return <Spinner />;

  if (!cabins.length) return <Empty resourceName="cabins" />;

  // 1. Filter

  const filterValue = searchParams.get('discount') || 'all';

  //using If method
  // let filteredCabins;

  // if (filterValue === 'all') filteredCabins = cabins;
  // if (filterValue === 'no-discount')
  //   filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  // if (filterValue === 'with-discount')
  //   filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  //using objectlookup method

  const filters = {
    all: () => cabins,
    'no-discount': () => cabins.filter((cabin) => cabin.discount === 0),
    'with-discount': () => cabins.filter((cabin) => cabin.discount > 0),
  };

  const filteredCabins = (filters[filterValue] || filters['all'])();

  // 2.Sort

  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins?.sort((a, b) =>
    typeof a[field] === 'string'
      ? a[field].localeCompare(b[field]) * modifier
      : (a[field] - b[field]) * modifier
  );
  // console.log(modifier, sortedCabins);

  return (
    <div>
      <Menus>
        <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
          <Table.Header role="row">
            <div></div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>Discount</div>
            <div></div>
          </Table.Header>

          {/* //using render as compound pattern */}
          <Table.Body
            // data={filteredCabins}
            data={sortedCabins}
            render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
          />

          {/* traditional rendering */}
          {/* {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
          ))} */}
        </Table>
      </Menus>
    </div>
  );
}

export default CabinTable;
