import { cn } from "@/lib/utils";
import { ChevronsUpDown, Check } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";

export function InstanceDetailsForm({ regions }: any) {
  const [regionOpen, setRegionOpen] = useState(false);
  const [regionValue, setRegionValue] = useState("");

  return (
    <form>
      <Input className="w-80" type="text" placeholder="Instance Name" />

      <Popover open={regionOpen} onOpenChange={setRegionOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={regionOpen}
            className="w-80 mt-4 justify-between"
          >
            {regionValue
              ? regions?.find((r: any) => r.value === regionValue)?.label
              : "Select region..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandEmpty>Nothing found.</CommandEmpty>
            <CommandGroup>
              {regions?.map((r: any) => (
                <CommandItem
                  key={r.value}
                  value={r.value}
                  onSelect={(currentValue) => {
                    setRegionValue(currentValue === regionValue ? "" : currentValue);
                    setRegionOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      regionValue === r.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {r.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </form>
  );
}