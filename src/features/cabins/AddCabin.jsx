// import { useState } from 'react';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import CabinTable from '../cabins/CabinTable';

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button variation="primary" size="medium">
          Add new cabin
        </Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="table">
        <Button variation="primary" size="medium">
          Cabin table
        </Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button
//         variation="primary"
//         size="medium"
//         onClick={() => setIsOpenModal((open) => !open)}
//       >
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
