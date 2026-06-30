"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import Loader from "./Loader";

type LoaderContextType = {
  showLoader: () => void;
  hideLoader: () => void;
};

const LoaderContext = createContext<LoaderContextType | null>(null);

export function LoaderProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider
      value={{
        showLoader,
        hideLoader,
      }}
    >
      {loading && (
        <Loader
          duration={1200}
          onFinish={hideLoader}
        />
      )}

      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error(
      "useLoader must be used inside LoaderProvider"
    );
  }

  return context;
}