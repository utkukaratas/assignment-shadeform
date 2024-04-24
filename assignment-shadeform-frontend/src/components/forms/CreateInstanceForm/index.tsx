import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Button } from "@/components/ui/button";
import { fetcher, post } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import useSWR from "swr";
import { GPUTypeSelector } from "./GPUTypeSelector";
import { InstanceDetailsForm } from "./InstanceDetailsForm";
import { useInstanceFormContext } from "./InstanceFormContext";
import { InstanceSelector } from "./InstanceSelector";

export function CreateInstanceForm() {
  const router = useRouter();
  const { name, instance, region } = useInstanceFormContext();

  const { data: instanceTypes } = useSWR(`/api/instances/types`, fetcher, {
    revalidateOnFocus: false,
  });

  const canSubmit = useMemo(() => {
    return name.length > 0 && !!instance && region.length > 0;
  }, [name, instance, region]);

  const handleSubmit = useCallback(async () => {
    // TODO: error handling
    // TODO: use schema from zod
    await post("/api/instances/create", {
      name,
      cloud: instance.cloud,
      region,
      shade_instance_type: instance.shade_instance_type,
      shade_cloud: false,
      configuration: instance.configuration,
    });

    // navigate to listing page
    router.push("/instances");
  }, [instance, region, router, name]);

  return (
    <DefaultLayout>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-1 xl:grid-cols-1">
        <h1 className="text-center text-3xl font-thin">Create An Instance</h1>

        <h3 className="text-xl">
          <span className="mr-3 rounded-full inline-flex justify-center items-center border w-8 h-8 border-slate-400 ">
            1
          </span>
          Choose a GPU type
        </h3>

        <GPUTypeSelector instanceTypes={instanceTypes} />

        <h3 className="text-xl">
          <span className="mr-3 rounded-full inline-flex justify-center items-center border w-8 h-8 border-slate-400 ">
            2
          </span>
          Choose an Instance
        </h3>

        <InstanceSelector instanceTypes={instanceTypes} />

        <h3 className="text-xl">
          <span className="mr-3 rounded-full inline-flex justify-center items-center border w-8 h-8 border-slate-400 ">
            3
          </span>
          Instance Details
        </h3>

        <InstanceDetailsForm />

        <h3 className="text-xl">
          <span className="mr-3 rounded-full inline-flex justify-center items-center border w-8 h-8 border-slate-400 ">
            4
          </span>
          Estimated Cost
        </h3>

        <div>
          <b>
            TODO: Some nice (sticky to bottom) table to display the cost of the
            current selection.
          </b>
        </div>

        <Button className="w-full" disabled={!canSubmit} onClick={handleSubmit}>
          Create Instance
        </Button>
      </div>
    </DefaultLayout>
  );
}
