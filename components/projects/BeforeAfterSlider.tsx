"use client";

import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
};

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Después",
  alt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="space-y-4">
      <div
        className="
          relative
          aspect-[16/9]
          overflow-hidden
          rounded-3xl
          bg-stone-200
          shadow-xl
        "
      >
        <img
          src={afterImage}
          alt={`${alt} - resultado final`}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        <img
          src={beforeImage}
          alt={`${alt} - estado inicial`}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        />

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-stone-950/75
            px-3
            py-1.5
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-white
            backdrop-blur
          "
        >
          {beforeLabel}
        </span>

        <span
          className="
            absolute
            right-4
            top-4
            rounded-full
            bg-stone-950/75
            px-3
            py-1.5
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-white
            backdrop-blur
          "
        >
          {afterLabel}
        </span>

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            top-0
            w-0.5
            bg-white
            shadow-lg
          "
          style={{
            left: `${position}%`,
          }}
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-12
              w-12
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-stone-950/70
              text-lg
              font-bold
              text-white
              shadow-xl
              backdrop-blur
            "
          >
            ↔
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) =>
            setPosition(Number(event.target.value))
          }
          aria-label="Comparar imagen antes y después"
          className="
            absolute
            inset-0
            h-full
            w-full
            cursor-ew-resize
            opacity-0
          "
        />
      </div>

      <p className="text-center text-xs text-stone-500">
        Desliza horizontalmente para comparar el antes y el después.
      </p>
    </div>
  );
}