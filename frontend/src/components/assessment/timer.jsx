import { Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

function Timer() {

  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {

    const interval = setInterval(() => {

      setSeconds((prev) => {

        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#11111A] px-4 py-2">

      <Clock3
        size={18}
        className="text-cyan-400"
      />

      <span className="font-semibold text-white">

        {String(minutes).padStart(2, "0")}:
        {String(remainingSeconds).padStart(2, "0")}

      </span>

    </div>
  );
}

export default Timer;