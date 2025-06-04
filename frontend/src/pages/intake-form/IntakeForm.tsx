import "@/App.css";
import { useState, useEffect} from "react";
import { Progress } from "@/components/ui/progress";
import useMultiStepForm from "@/hooks/useMultiStepForm";
import {sections} from "@/features/intake-form/config/formSections";

// Hook form

// Zod 

// import { toast } from "sonner";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { DatetimePicker } from "@/components/ui/datetime-picker";


const SECONDS = 60;
const MILLISECONDS = 1000;
const MINUTES = 3;
const DEFAULT_TIME_REMAINING = MINUTES * SECONDS * MILLISECONDS; // 3 minutes in milliseconds 


/**
 * Main application component.
 *
 * @returns
 */
function IntakeForm() {
  const [progress, setProgress] = useState(100);
//   const [timeRemaining, setTimeRemaining] = useState(DEFAULT_TIME_REMAINING);

  const { index, currentSection, next, prev } = useMultiStepForm(sections);

  useEffect(() => {
    const totalSections = sections.length;
    setProgress(((index + 1) / totalSections) * 100);
    // setTimeRemaining(new Date(DEFAULT_TIME_REMAINING).getTime() - new Date(MINUTES * SECONDS * MILLISECONDS - index).getTime());
  }, [index]);


  return (
    <div>
      <Progress value={progress} className="w-full" />
      {/* <div>Estimated time remaining {timeRemaining}</div> */}
      <div>{progress} %</div>
      {currentSection && currentSection.content}
      <div className="flex w-full justify-between">
        <button
          className="bg-black rounded-[12px] px-4 text-white py-2"
          onClick={prev}
          disabled={index === 0}
        >
          Previous
        </button>
        <button
          className="bg-black rounded-[12px] px-4 text-white py-2"
          onClick={next}
          disabled={index === sections.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default IntakeForm;
