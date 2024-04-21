import { InstanceTypeSelector } from "@/components/forms/InstanceTypeSelector";
import { LaunchForm } from "@/components/forms/LaunchForm";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function CreateInstanceScreen() {
  return (
    <DefaultLayout>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-1 xl:grid-cols-1">
        instances/create


        <InstanceTypeSelector />

        <LaunchForm />


      </div>
    </DefaultLayout>
  );
}
