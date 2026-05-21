"use client";

import BasicModal from "./BasicModal";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type OpenAppModalOptions = {
  children: ReactNode;
  className?: string;
  zIndex?: number;
};

type ModalContextValue = {
  openModal: (opts: OpenAppModalOptions) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<OpenAppModalOptions | null>(null);

  const openModal = useCallback((opts: OpenAppModalOptions) => {
    setOptions(opts);
  }, []);

  const closeModal = useCallback(() => {
    setOptions(null);
  }, []);

  const value = useMemo(
    () => ({ openModal, closeModal }),
    [openModal, closeModal],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {options ? (
        <BasicModal
          open
          onClose={closeModal}
          className={options.className}
          zIndex={options.zIndex}
        >
          {options.children}
        </BasicModal>
      ) : null}
    </ModalContext.Provider>
  );
}

export function useAppModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useAppModal은 ModalProvider 안에서만 사용할 수 있습니다.");
  }
  return ctx;
}
