import React, { createContext, ReactNode, useContext, useState } from "react";

interface IInstanceFormContext {
  gpuType: string;
  instance: any; // TODO: typing
  name: string;
  region: string;
  setGpuType: (gpuType: string) => void;
  setInstance: (instance: any) => void;
  setName: (name: string) => void;
  setRegion: (region: string) => void;
}

const InstanceFormContext = createContext<IInstanceFormContext | undefined>(
  undefined
);

interface InstanceFormProviderProps {
  children: ReactNode;
}

export const InstanceFormProvider: React.FC<InstanceFormProviderProps> = ({
  children,
}) => {
  const [gpuType, setGpuType] = useState<string>("");
  const [instance, setInstance] = useState<any>();
  const [name, setName] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const value = {
    gpuType,
    instance,
    name,
    region,
    setName,
    setRegion,
    setGpuType,
    setInstance,
  };

  return (
    <InstanceFormContext.Provider value={value}>
      {children}
    </InstanceFormContext.Provider>
  );
};

export const useInstanceFormContext = () => {
  const context = useContext(InstanceFormContext);
  if (context === undefined) {
    throw new Error(
      "useInstanceFormContext must be used within an InstanceFormProvider"
    );
  }
  return context;
};
