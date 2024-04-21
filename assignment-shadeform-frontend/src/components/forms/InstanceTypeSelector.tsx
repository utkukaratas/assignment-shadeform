import { fetcher } from "@/lib/api";
import { useMemo } from "react";
import useSWR from "swr";


export function InstanceTypeSelector() {
  const { data, error } = useSWR(`/api/instances/types`, fetcher, {
    revalidateOnFocus: false,
  });

  const gpuTypes = useMemo(() => {
    return Object.groupBy(data.instance_types, ({ gpu_type }: any) => gpu_type);
  }, [data]);

  return (
    <div>
      instance type
      {JSON.stringify(gpuTypes)}
    </div>
  );
}
