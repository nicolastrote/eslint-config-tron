import React, { FC } from 'react';

import './styles.scss';

const Foo: FC = () => <p>Foo</p>;
const Component: React.FC = () => <Foo />;

interface IProps {
  name: string;
  age: number;
}
const ComponentWithProps: FC<IProps> = ({ name, age }) => (
  <p>
    {name}, {age}
  </p>
);

const ComponentWithHooks: FC = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const n = count + 1;
    setCount(n);
  }, [count]);

  return (
    <button
      className="sample__button"
      type="button"
      onClick={(): void => setCount(count + 1)}
    >
      {count}
    </button>
  );
};

export default {
  Component,
  ComponentWithProps,
  ComponentWithHooks,
};
