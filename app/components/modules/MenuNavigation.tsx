"use client";
import React, { SetStateAction, useCallback, useEffect } from "react";

interface MenuProps {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>
  menuRef: React.RefObject<HTMLDivElement>;
}
export const MenuNavigation = ({show, setShow,  menuRef}: MenuProps) => {
    
  const clickHandler = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!show) return;
      if (menuRef.current.contains(target)) return;
      setShow(false);

      document.addEventListener("click", clickHandler);
      return () => {
        document.removeEventListener("click", clickHandler);
      };
    },
    [show, setShow, menuRef]
  );

  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [clickHandler]);
};

