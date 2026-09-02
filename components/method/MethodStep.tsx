import type { MethodStep as MethodStepType } from "@/types/method";

type MethodStepProps = {
  step: MethodStepType;
  reverse?: boolean;
};

export default function MethodStep({
  step,
  reverse = false,
}: MethodStepProps) {
  const number = String(step.number).padStart(2, "0");

  return (
    <article
      className="
        relative
        grid
        grid-cols-1
        items-center
        gap-6
        md:grid-cols-[1fr_auto_1fr]
        md:gap-10
      "
    >
      <div
        className={`
          ${reverse ? "md:order-3" : "md:order-1"}
          ${reverse ? "md:text-left" : "md:text-right"}
        `}
      >
        <span
          className="
            inline-flex
            rounded-full
            bg-emerald-100
            px-3
            py-1
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-[#256348]
          "
        >
          Fase {number}
        </span>

        <h2 className="mt-3 text-xl font-bold text-stone-900">
          {step.title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-stone-600">
          {step.description}
        </p>
      </div>

      <div
        className="
          relative
          z-10
          order-first
          mx-auto
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#256348]
          text-lg
          font-bold
          text-white
          shadow-lg
          md:order-2
        "
      >
        {number}
      </div>

      <div
        className={`
          hidden
          md:block
          ${reverse ? "md:order-1" : "md:order-3"}
        `}
      />
    </article>
  );
}