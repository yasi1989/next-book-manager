import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValue } from "../../types/type";

type FormFileInputProps = {
  form: UseFormReturn<FormValue>;
  name: "file";
  label: string;
  message?: string;
};

const FormFileInput = ({
  form,
  name,
  label,
  message = "",
}: FormFileInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { value, onChange, ...fieldProps } }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormDescription>{message}</FormDescription>
          <FormControl>
            <Input
              accept="image/*"
              type="file"
              onChange={(event) => onChange(event.target.files)}
              {...fieldProps}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFileInput;
