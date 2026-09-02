import MethodStep from "./MethodStep";

import { methodSteps } from "@/data/method";

export default function MethodTimeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div
        className="
          absolute
          bottom-0
          left-1/2
          top-0
          hidden
          w-px
          -translate-x-1/2
          bg-stone-200
          md:block
        "
      />

      <div className="space-y-14">
        {methodSteps.map((step, index) => (
          <MethodStep
            key={step.number}
            step={step}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}