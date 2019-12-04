import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export const MyDropdown = ({ title, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
      <Dropdown isOpen={dropdownOpen} size='sm' toggle={toggle}>
        <DropdownToggle className='bg-primary' caret>
          {title}
        </DropdownToggle>
        <DropdownMenu>{children}</DropdownMenu>
      </Dropdown>
    </div>
  );
};
