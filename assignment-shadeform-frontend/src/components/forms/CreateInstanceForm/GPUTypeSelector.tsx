import { clsx } from "clsx";
import Image from "next/image";
import { useMemo } from "react";
import { useInstanceFormContext } from "./InstanceFormContext";

export function GPUTypeSelector({ instanceTypes }: any) {
  const { gpuType, setGpuType } = useInstanceFormContext();

  const gpuTypes = useMemo(() => {
    if (!instanceTypes) return [];
    return Object.groupBy(
      instanceTypes.instance_types,
      ({ gpu_type }: any) => gpu_type
    );
  }, [instanceTypes]);

  return (
    <div className="flex flex-wrap gap-4">
      {Object.keys(gpuTypes)?.map((instType: any) => {
        return (
          <div
            key={instType}
            className={clsx([
              "pt-5 cursor-pointer box-border border hover:border-slate-400 flex flex-col justify-center items-center rounded-sm",
              instType === gpuType ? "border-slate-900 shadow-xl " : "",
            ])}
            onClick={() => setGpuType(instType)}
          >
            <span className="font-xl font-semibold">{instType}</span>
            <Image
              src="/nvidia-logo.png"
              width="120"
              height="20"
              alt="Nvidia logo"
            />
          </div>
        );
      })}
    </div>
  );
}
