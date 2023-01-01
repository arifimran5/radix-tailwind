import * as Menu from '@radix-ui/react-dropdown-menu';

const Dropdown = () => {
  return (
    <div>
      <Menu.Root>
        <Menu.Trigger className='px-6 py-2 font-medium text-white bg-blue-600 rounded'>
          Open DropDown
        </Menu.Trigger>
        {/* main dropdown portal */}
        <Menu.Portal>
          <Menu.Content className='min-w-[170px] bg-white/70 backdrop-blur-sm p-1 rounded-md shadow-md'>
            <Menu.Item className='dropdownItem'>Oldest</Menu.Item>
            <Menu.Item className='dropdownItem'>Newest</Menu.Item>
            {/* sub-menu on hover(desktop),click(touch-screen) */}
            <Menu.Sub>
              <Menu.SubTrigger className='dropdownItem'>
                Category
              </Menu.SubTrigger>
              <Menu.Portal>
                <Menu.SubContent className='min-w-[170px] bg-white/70 backdrop-blur-sm p-1 rounded-md shadow-md'>
                  <Menu.Item className='dropdownItem'>React</Menu.Item>
                  <Menu.Item className='dropdownItem'>Javascript</Menu.Item>
                  <Menu.Item className='dropdownItem'>CSS</Menu.Item>
                  <Menu.Item className='dropdownItem'>Node.js</Menu.Item>
                  <Menu.Item className='dropdownItem'>Typescript</Menu.Item>
                </Menu.SubContent>
              </Menu.Portal>
            </Menu.Sub>
            <Menu.Arrow className='fill-white/70' />
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>
    </div>
  );
};

export default Dropdown;
