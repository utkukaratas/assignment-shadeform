import { useMemo } from "react";
import useSWR from "swr";
import { GPUTypeSelector } from "@/components/forms/GPUTypeSelector";
import { InstanceDetailsForm } from "@/components/forms/InstanceDetailsForm";
import { InstanceSelector } from "@/components/forms/InstanceSelector";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/api";
import {
  InstanceFormProvider,
  useInstanceFormContext,
} from "@/components/forms/InstanceFormContext";

export default function CreateInstanceScreen() {
  return (
    <InstanceFormProvider>
      <InstanceForm />
    </InstanceFormProvider>
  );
}

// TODO: move to separate module
function InstanceForm() {
  const { name, instance } = useInstanceFormContext();

  const { data: instanceTypes } = useSWR(`/api/instances/types`, fetcher, {
    revalidateOnFocus: false,
  });

  const canSubmit = useMemo(() => {
    return name.length > 0 && !!instance;
  }, [name, instance]);

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

        <Button className="w-full" disabled={!canSubmit}>
          Create Instance
        </Button>
      </div>
    </DefaultLayout>
  );
}
