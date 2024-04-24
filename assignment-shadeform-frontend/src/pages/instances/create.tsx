import { CreateInstanceForm } from "@/components/forms/CreateInstanceForm";
import { InstanceFormProvider } from "@/components/forms/CreateInstanceForm/InstanceFormContext";

export default function CreateInstanceScreen() {
  return (
    <InstanceFormProvider>
      <CreateInstanceForm />
    </InstanceFormProvider>
  );
}
