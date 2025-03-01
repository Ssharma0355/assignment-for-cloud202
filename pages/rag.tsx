import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

type FormValues = {
  knowledgebasename: string;
  ragdescription: string;
};

const RAG: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted", data);
    router.push("/security");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 border border-green-800 rounded-lg"
    >
      {/* Header */}
      <div className="bg-[#3C7069] text-white p-3 rounded-t-lg">
        <h1 className="text-lg font-bold">RAG Configuration</h1>
      </div>

      {/* Knowledge Base Name */}
      <div className="flex flex-col">
        <label htmlFor="knowledgebasename" className="font-medium">
          Knowledge Base Name
        </label>
        <input
          type="text"
          id="knowledgebasename"
          className="border p-2 rounded"
          {...register("knowledgebasename", {
            required: "Knowledge base name is required",
          })}
        />
        {errors.knowledgebasename && (
          <span className="text-red-500 text-sm">
            {errors.knowledgebasename.message}
          </span>
        )}
      </div>

      {/* RAG Description */}
      <div className="flex flex-col">
        <label htmlFor="ragdescription" className="font-medium">
          Description
        </label>
        <input
          type="text"
          id="ragdescription"
          className="border p-2 rounded"
          {...register("ragdescription", {
            required: "RAG Description is required",
          })}
        />
        {errors.ragdescription && (
          <span className="text-red-500 text-sm">
            {errors.ragdescription.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add Configuration
      </button>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          onClick={() => router.back()} // Go back
        >
          Previous
        </button>

        <button
          type="button"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          onClick={() => router.push("/next-page")} // Go to next page (change route as needed)
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default RAG;
