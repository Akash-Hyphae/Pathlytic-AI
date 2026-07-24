import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

function AssessmentHeader({ current, total }) {
  return (
    <div className="mb-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Skill Assessment
          </h1>

          <p className="mt-2 text-zinc-400">
            Question {current} of {total}
          </p>
        </div>

        <Timer />
      </div>

      <div className="mt-6">
        <ProgressBar current={current} total={total} />
      </div>

    </div>
  );
}

export default AssessmentHeader;