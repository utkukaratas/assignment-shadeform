import { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function InstanceSelector({ selectedGPU, instanceTypes }: any) {
  const gpusGroupedByCount: any = useMemo(() => {
    if (!instanceTypes) return [];
    const gpusByType = Object.groupBy(
      instanceTypes.instance_types,
      ({ gpu_type }: any) => gpu_type
    );
    const selectedInstanceTypes = gpusByType[selectedGPU]!;
    return Object.groupBy(
      selectedInstanceTypes,
      ({ num_gpus }: any) => num_gpus
    );
  }, [instanceTypes, selectedGPU]);

  return (
    <div className="w-full">
      <Tabs defaultValue="1" className="w-full">
        <TabsList className="w-full">
          {Object.keys(gpusGroupedByCount).map((gpuCount) => {
            return (
              <TabsTrigger className="w-full" key={gpuCount} value={gpuCount}>
                {gpuCount}x GPUS
              </TabsTrigger>
            );
          })}
        </TabsList>

        {Object.keys(gpusGroupedByCount).map((gpuCount) => {
          return (
            <TabsContent key={gpuCount} value={gpuCount}>
              {gpusGroupedByCount[gpuCount].map(
                (gpuInstance: any, idx: number) => {
                  const available = gpuInstance.availability.some(
                    (avl: any) => !!avl.available
                  );
                  return (
                    <div
                      key={idx}
                      className="flex justify-center border border-slate-200 hover:border-slate-500 cursor-pointer mb-4 p-4 rounded-lg"
                    >
                      <div className="flex-1">{gpuInstance.cloud}</div>
                      <div className="flex-1">
                        Mem: {gpuInstance.memory_in_gb} GB
                      </div>
                      <div className="flex-1">
                        Storage: {gpuInstance.storage_in_gb} GB
                      </div>
                      <div className="flex-1">${gpuInstance.hourly_price}</div>
                      <div className="flex-1">
                        Available: {available ? "✓" : "✖"}
                      </div>
                      {/* {JSON.stringify(gpuInstance)} */}
                    </div>
                  );
                }
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
