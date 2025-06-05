import type { Section } from "@/features/intake-form/types/form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import type { FieldValues, Control, Path } from "react-hook-form";

export const getSections = <T extends FieldValues>(
  control: Control<T>
): Section[] => {
  return [
    {
      title: "Personal Information",
      content: (
        <FormField<T, Path<T>>
          name={"fullName" as Path<T>}
          control={control as Control<T>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl className="rounded-[12px] p-2 py-3 border">
                <input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
    {
      title: "Adress",
      content: (
        <FormField<T, Path<T>>
          name={"address" as Path<T>}
          control={control as Control<T>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl className="rounded-[12px] p-2 py-3 border">
                <input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
  ];
};
