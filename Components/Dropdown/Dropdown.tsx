// import React from 'react';
// import styles from './dropdown.css';

// interface IDropdownProps {
//   button: React.ReactNode;
//   children: React.ReactNode;
//   isOpen?: boolean;
//   onOpen?: () => void;
//   onClose?: () => void;
// }

// const NOOP = () => {};

// export function Dropdown({button, children, isOpen, onClose = NOOP, onOpen = NOOP}: IDropdownProps) {
//   const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
//   React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
//   React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

//   const handleOpen = () => {
//     if (isOpen == undefined) {
//       setIsDropdownOpen(!isDropdownOpen);
//     }
//   }

//   return (
//     <div className={styles.container}>
//       <div onClick={handleOpen}>
//         {button}
//       </div>
//       {isDropdownOpen && (
//         <div className={styles.listContainer}>
//           <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
//             {children}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React from "react";
import styles from './dropdown.css';

interface IDropdownProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
const NOOP = () => { };

export function Dropdown({ children, onClick = NOOP, }: IDropdownProps) {
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <div className={styles.list}>
          {children}
        </div>
      </div>
          <div className={styles.closed} onClick={onClick}>
            Закрыть
          </div>
    </div>
  );
}