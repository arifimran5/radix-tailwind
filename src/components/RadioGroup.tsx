import * as Radio from '@radix-ui/react-radio-group';

const RadioGroup = () => {
  return (
    <div className='p-5 rounded-md bg-blue-600 font-medium text-white w-max'>
      <Radio.Root className='space-y-2' defaultValue='dog'>
        <div className='flex items-center gap-2'>
          <Radio.Item
            className='bg-white w-6 h-6 rounded-full shadow-md '
            value='dog'
            id='r1'
          >
            <Radio.Indicator className='relative flex justify-center items-center w-full h-full after:w-3 after:h-3 after:rounded-full after:bg-black' />
          </Radio.Item>
          <label htmlFor='r1'>Dog person</label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio.Item
            className='bg-white w-6 h-6 rounded-full shadow-md '
            value='cat'
            id='r2'
          >
            <Radio.Indicator className='relative flex justify-center items-center w-full h-full after:w-3 after:h-3 after:rounded-full after:bg-black' />{' '}
          </Radio.Item>
          <label htmlFor='r2'>Cat person</label>
        </div>
        <div className='flex items-center gap-2'>
          <Radio.Item
            className='bg-white w-6 h-6 rounded-full shadow-md '
            value='other'
            id='r3'
          >
            <Radio.Indicator className='relative flex justify-center items-center w-full h-full after:w-3 after:h-3 after:rounded-full after:bg-black' />{' '}
          </Radio.Item>
          <label htmlFor='r3'>Other pets</label>
        </div>
      </Radio.Root>
    </div>
  );
};

export default RadioGroup;
