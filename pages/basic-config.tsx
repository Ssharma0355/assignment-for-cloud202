import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  appname: string;
  description: string;
};

const BasicConfig: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      {/* Header */}
      <div style={{ backgroundColor: "#3C7069" }} className="text-white p-3">
        <h1 className="text-lg font-bold">Basic Configuration</h1>
      </div>

      {/* App Name Field */}
      <div className="flex flex-col">
        <label htmlFor="appname" className="font-medium">
          App Name
        </label>
        <input
          id="appname"
          type="text"
          {...register("appname", { required: "App Name is required" })}
          className="border p-2 rounded"
        />
        {errors.appname && (
          <span className="text-red-500">{errors.appname.message}</span>
        )}
      </div>

      {/* Description Field */}
      <div className="flex flex-col">
        <label htmlFor="description" className="font-medium">
          Description
        </label>
        <textarea
          id="description"
          {...register("description", { required: "Description is required" })}
          className="border p-2 rounded"
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default BasicConfig;
