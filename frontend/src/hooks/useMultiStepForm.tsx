import { useState } from "react";

/**
 *
 * Allows us to create multi-step form
 *
 * @param sections
 * @returns
 */
function useMultiStepForm<T>(sections: T[]) {
  const [index, setIndex] = useState<number>(0);


  /**
   * Move to next section
   */
  const next = () => {
    setIndex((prevIndex) => {
      if (prevIndex >= sections.length - 1) return prevIndex;
      return prevIndex + 1;
    });
  };

  /**
   * Move to the previous section
   */
  const prev = () => {
    setIndex((prevIndex) => {
      if (prevIndex <= 0) return prevIndex;
      return prevIndex - 1;
    });
  };

  /**
   * Go to a specific section
   */
  const goTo = (sectionIndex: number) => {
    if (sectionIndex < 0 || sectionIndex >= sections.length) throw new Error("Section index out of bounds");
    setIndex(sectionIndex);
  }


  return {
    index,
    currentSection: sections[index],
    next,
    prev,
    goTo,
  };
}

export default useMultiStepForm;
