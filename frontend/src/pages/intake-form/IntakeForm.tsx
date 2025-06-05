import "@/App.css";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import useMultiStepForm from "@/hooks/useMultiStepForm";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { IntakeFormSchema } from "@/features/intake-form/schemas/intakeForm";
import { intakeFormSchema } from "@/features/intake-form/schemas/intakeForm";
import { getSections } from "@/features/intake-form/config/FormSection";
import type { Section } from "@/features/intake-form/types/form";

import { Form } from "@/components/ui/form";

/**
 * Main application component.
 *
 * @returns
 */
function IntakeForm() {
  const [progress, setProgress] = useState(0);
  const sections = getSections<IntakeFormSchema>(
    useForm<IntakeFormSchema>().control
  );

  const form = useForm<IntakeFormSchema>({
    resolver: zodResolver(intakeFormSchema),
  });

  const { index, currentSection, next, prev } = useMultiStepForm<Section>(
    getSections(form.control)
  );

  useEffect(() => {
    const totalSections = sections.length;
    setProgress(((index + 1) / totalSections) * 100);
  }, [index, sections.length]);

  const onSubmit = (data: IntakeFormSchema) => {
    console.log(data);
  };

  return (
    <div>
      <Progress value={progress} className="w-full" />
      <div className="py-4 flex w-full justify-end text-[##868e96]">
        {Math.round(progress)} %
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="py-10 h-[50vh] w-full flex items-start justify-center"
        >
          <div className="w-[50%] grid grid-rows-[5rem_1fr_3rem] h-full">
            <h1 className="text-2xl font-bold text-center">
              {currentSection && currentSection.title}
            </h1>

            {/* CONTENT */}
            <div>{currentSection && currentSection.content}</div>

            {/* PREVIOUS */}
            <div className="flex w-full justify-between">
              <button
                className={` hover:bg-[#f1f3f5] border rounded-full flex items-center justify-center p-4 text-black ${
                  index === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={prev}
                disabled={index === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              {/* NEXT */}
              {index !== sections.length - 1 && (
                <button
                  className=" hover:bg-[#f1f3f5] border rounded-full flex items-center justify-center p-4 text-black"
                  onClick={next}
                  disabled={index === sections.length - 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              )}

              {/* SUBMIT */}
              {index === sections.length - 1 && (
                <button
                  type="submit"
                  className="bg-green-500 rounded-[12px] px-4 text-white py-2"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default IntakeForm;
