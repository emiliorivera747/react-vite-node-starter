import type { Section } from "@/features/intake-form/types/form";

import {
  FormControl,
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
      title: "What is your full name?",
      content: (
        <FormField<T, Path<T>>
          name={"fullName" as Path<T>}
          control={control as Control<T>}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl className="rounded-[12px] px-[1rem] py-[1rem] border">
                <input className=""placeholder="John Doe" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
    {
      title: "What is your Address?",
      content: (
        <FormField<T, Path<T>>
          name={"address" as Path<T>}
          control={control as Control<T>}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Address</FormLabel>
              <FormControl className="rounded-[12px]  px-[1rem] py-[1rem] border">
                <input placeholder="770 Saratoga Ave" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
  ];
};
