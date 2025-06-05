import { useFormContext } from "react-hook-form";

const ReviewSection = () => {
  const { getValues } = useFormContext();
  return (
    <div className="space-y-4">
      {Object.entries(getValues()).map(([key, value]) => (
        <div key={key} className="flex justify-between">
          <span className="font-semibold">{key}:</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
