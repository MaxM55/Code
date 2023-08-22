import React from 'react';
interface IItem {
  id?: string,
  text: string,
  // onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  svg?: JSX.Element;
  onClick?: () => void;
}

interface IGenericListProps {
  list: IItem[];
}

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, onClick = noop, className, id, href, svg}) => (
        <As
          className={className}
          // onClick={() => onClick}
          key={id}
          href={href}
        >
          {svg && svg}
          {text}
        </As>
      ))}
    </>
  );
}
