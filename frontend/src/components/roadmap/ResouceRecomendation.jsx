import {
  BookOpen,
  Video,
  FileText,
  Code2,
  ArrowRight,
} from "lucide-react";

function ResourceRecommendations({ resources }) {
  const getIcon = (type) => {
    switch (type) {
      case "Video":
        return <Video size={20} className="text-red-400" />;

      case "Documentation":
        return <BookOpen size={20} className="text-cyan-400" />;

      case "Practice":
        return <Code2 size={20} className="text-green-400" />;

      default:
        return <FileText size={20} className="text-violet-400" />;
    }
  };

  return (
    <section className="rounded-3xl border border-slate-800 bg-[#111827] p-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            AI Recommended Resources
          </h2>

          <p className="mt-2 text-gray-400">
            Handpicked resources to help you complete your current roadmap
            module faster.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl border border-violet-500 px-5 py-3 text-violet-400 transition hover:bg-violet-500 hover:text-white">

          View All

          <ArrowRight size={18} />

        </button>

      </div>

      {/* Resource Cards */}

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {resources.map((resource) => (

          <div
            key={resource.id}
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-violet-500"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">

              {getIcon(resource.type)}

            </div>

            <p className="mt-5 text-sm text-violet-400">

              {resource.type}

            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">

              {resource.title}

            </h3>

            <p className="mt-2 text-sm text-gray-400">

              {resource.provider}

            </p>

            <div className="mt-6 flex items-center justify-between">

              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-gray-300">

                {resource.duration}

              </span>

              <button className="text-sm font-medium text-violet-400 hover:text-violet-300">

                Open

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ResourceRecommendations;