
// MyComponent.tsx
import React, { FC } from 'react';

// Define the props interface
type HeaderProps = {
  name: string;
}

// Define the component using FC (Functional Component) type
const Header: FC<HeaderProps> = ({ name }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
};

export default Header;
