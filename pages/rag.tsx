import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

type FormValues = {
  knowledgebasename: string;
  ragdescription: string;
  pattern: string;
  embeddings: string;
  metrics: string;
  chunking: string;
  vectordb:string;
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
      <div className="grid grid-cols-2 gap-4">
        {/* Pattern */}
        <div className="flex flex-col">
          <label htmlFor="pattern" className="font-medium">
            Pattern
          </label>
          <select
            id="pattern"
            className="border p-2 rounded"
            {...register("pattern", { required: "Pattern is required" })}
          >
            <option value="">Select Pattern</option>
            <option value="pattern1">Pattern 1</option>
            <option value="pattern2">Pattern 2</option>
          </select>
          {errors.pattern && (
            <span className="text-red-500 text-sm">
              {errors.pattern.message}
            </span>
          )}
        </div>

        {/* Embeddings */}
        <div className="flex flex-col">
          <label htmlFor="embeddings" className="font-medium">
            Embeddings
          </label>
          <select
            id="embeddings"
            className="border p-2 rounded"
            {...register("embeddings", { required: "Embeddings is required" })}
          >
            <option value="">Select Embeddings</option>
            <option value="embedding1">Embedding 1</option>
            <option value="embedding2">Embedding 2</option>
          </select>
          {errors.embeddings && (
            <span className="text-red-500 text-sm">
              {errors.embeddings.message}
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="flex flex-col">
          <label htmlFor="metrics" className="font-medium">
            Metrics
          </label>
          <select
            id="metrics"
            className="border p-2 rounded"
            {...register("metrics", { required: "Metrics is required" })}
          >
            <option value="">Select Metrics</option>
            <option value="metric1">Metric 1</option>
            <option value="metric2">Metric 2</option>
          </select>
          {errors.metrics && (
            <span className="text-red-500 text-sm">
              {errors.metrics.message}
            </span>
          )}
        </div>

        {/* Chunking */}
        <div className="flex flex-col">
          <label htmlFor="chunking" className="font-medium">
            Chunking
          </label>
          <select
            id="chunking"
            className="border p-2 rounded"
            {...register("chunking", { required: "Chunking is required" })}
          >
            <option value="">Select Chunking</option>
            <option value="chunking1">Chunking 1</option>
            <option value="chunking2">Chunking 2</option>
          </select>
          {errors.chunking && (
            <span className="text-red-500 text-sm">
              {errors.chunking.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="knowledgebasename" className="font-medium">
          Vector DB
        </label>
        <input
          type="text"
          id="vectordb"
          className="border p-2 rounded"
          {...register("vectordb", {
            required: "Vector DB is required",
          })}
        />
        {errors.vectordb && (
          <span className="text-red-500 text-sm">
            {errors.vectordb.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-[#3C7069] text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add Configuration
      </button>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          onClick={() => router.push("/basic-config")} // Go back
        >
          Previous
        </button>

        <button
          type="button"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          onClick={() => router.push("/workflow")} // Go to next page (change route as needed)
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default RAG;
