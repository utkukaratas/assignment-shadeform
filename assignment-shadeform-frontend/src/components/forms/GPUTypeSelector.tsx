import { fetcher } from "@/lib/api";
import { useMemo } from "react";
import useSWR from "swr";
import Image from "next/image";

export function GPUTypeSelector({ instanceTypes }: any) {
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
        // const conf
        return (
          <div
            key={instType}
            className="pt-5 cursor-pointer hover:border-slate-400 flex flex-col justify-center items-center border rounded-sm border-slate-300"
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
