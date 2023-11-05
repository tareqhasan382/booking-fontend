// DateRangePicker.tsx
import "react-date-range/dist/styles.css";
import { Controller, useForm } from "react-hook-form";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // Make sure to import the CSS

const DateRangePickerComponent: React.FC = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // Access the selected date range in the "data" object
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="dateRange" // Name of the field in the form data
        control={control}
        defaultValue={{ startDate: new Date(), endDate: new Date() }} // Initial date range
        render={({ field }) => (
          <DateRangePicker onChange={field.onChange} ranges={[field.value]} />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DateRangePickerComponent;
