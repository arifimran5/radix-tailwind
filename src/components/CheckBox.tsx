import { BsCheck } from 'react-icons/bs';
import * as CB from '@radix-ui/react-checkbox';

const CheckBox = () => {
  return (
    <form className='flex items-center gap-3'>
      <CB.Root
        id='c1'
        className='bg-blue-600 w-6 h-6 rounded flex items-center justify-center shadow-md'
      >
        <CB.CheckboxIndicator>
          <BsCheck />
        </CB.CheckboxIndicator>
      </CB.Root>
      <label className='text-white' htmlFor='c1'>
        Accept Terms & Conditions
      </label>
    </form>
  );
};

export default CheckBox;
