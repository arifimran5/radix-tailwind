import * as Modal from '@radix-ui/react-dialog';
const Dialog = () => {
  return (
    <div>
      <Modal.Root>
        <Modal.Trigger className='px-6 py-2 font-medium text-white bg-blue-600 rounded'>
          Open Modal
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Overlay className='fixed inset-0 transition-all duration-150 backdrop-blur-[2px] bg-black/70' />
          <Modal.Content className='bg-white rounded-md shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[450px] max-h-[85vh] p-6 transition-all'>
            <Modal.Title className='text-xl font-bold'>
              Are you sure want to Logout
            </Modal.Title>
            <Modal.Description className='text-gray-500'>
              tussi na jao na {`:(`}
            </Modal.Description>
            <Modal.Close className='px-6 py-2 mt-3 font-medium text-white bg-blue-600 rounded'>
              Logout
            </Modal.Close>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  );
};

export default Dialog;
