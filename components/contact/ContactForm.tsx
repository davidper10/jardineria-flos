"use client";

import { FormEvent, useState } from "react";

import type {
  ContactFormData,
  ContactService,
} from "@/types/contact";

const availableServices: ContactService[] = [
  "Jardín",
  "Riego",
  "Piscina",
  "Proyecto técnico",
  "Paisajismo integral",
];

const initialFormData: ContactFormData = {
  name: "",
  phone: "",
  email: "",
  location: "",
  services: [],
  surface: 250,
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [files, setFiles] = useState<File[]>([]);

  const [status, setStatus] =
    useState<"idle" | "sending" | "success" | "error">("idle");

  const [errorMessage, setErrorMessage] =
    useState("");

  function handleServiceToggle(
    service: ContactService
  ) {
    setFormData((current) => {
      const exists =
        current.services.includes(service);

      return {
        ...current,

        services: exists
          ? current.services.filter(
              (item) => item !== service
            )
          : [...current.services, service],
      };
    });
  }

  function handleFiles(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFiles = Array.from(
      event.target.files ?? []
    );

    setFiles(selectedFiles);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const payload = new FormData();

    payload.set("name", formData.name);
    payload.set("phone", formData.phone);
    payload.set("email", formData.email);
    payload.set("location", formData.location);
    payload.set("surface", String(formData.surface));
    payload.set("message", formData.message);

    formData.services.forEach((service) => {
      payload.append("services", service);
    });

    files.forEach((file) => {
      payload.append("files", file);
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ?? "No se pudo enviar la solicitud."
        );
      }

      setStatus("success");
      setFormData(initialFormData);
      setFiles([]);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se pudo enviar la solicitud."
      );
    }
  }

  return (
    <div
      className="
        rounded-3xl
        border border-stone-200
        bg-white
        p-8
        shadow-sm
        lg:p-10
      "
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="
                mb-2
                block
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-stone-700
              "
            >
              Nombre completo *
            </label>

            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  name: event.target.value,
                })
              }
              placeholder="Ej: Carlos Mendoza"
              className="
                w-full
                rounded-xl
                border border-stone-300
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#256348]
                focus:ring-2
                focus:ring-emerald-100
              "
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="
                mb-2
                block
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-stone-700
              "
            >
              Teléfono / WhatsApp *
            </label>

            <input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  phone: event.target.value,
                })
              }
              placeholder="+34 612 345 678"
              className="
                w-full
                rounded-xl
                border border-stone-300
                px-4
                py-3
                text-sm
                outline-none
                focus:border-[#256348]
                focus:ring-2
                focus:ring-emerald-100
              "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="
                mb-2
                block
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-stone-700
              "
            >
              Email *
            </label>

            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  email: event.target.value,
                })
              }
              placeholder="tuemail@ejemplo.com"
              className="
                w-full
                rounded-xl
                border border-stone-300
                px-4
                py-3
                text-sm
                outline-none
                focus:border-[#256348]
                focus:ring-2
                focus:ring-emerald-100
              "
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="
                mb-2
                block
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-stone-700
              "
            >
              Localidad del proyecto *
            </label>

            <input
              id="location"
              type="text"
              required
              value={formData.location}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  location: event.target.value,
                })
              }
              placeholder="Ej: Las Rozas, Madrid"
              className="
                w-full
                rounded-xl
                border border-stone-300
                px-4
                py-3
                text-sm
                outline-none
                focus:border-[#256348]
                focus:ring-2
                focus:ring-emerald-100
              "
            />
          </div>
        </div>

        <div>
          <span
            className="
              mb-3
              block
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-stone-700
            "
          >
            ¿Qué servicios necesitas?
          </span>

          <div
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {availableServices.map((service) => {
              const selected =
                formData.services.includes(service);

              return (
                <button
                  key={service}
                  type="button"
                  onClick={() =>
                    handleServiceToggle(service)
                  }
                  className={`
                    rounded-xl
                    border
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-medium
                    transition
                    ${
                      selected
                        ? "border-[#256348] bg-emerald-50 text-[#256348]"
                        : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                    }
                  `}
                >
                  {service}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div
            className="
              mb-3
              flex
              items-center
              justify-between
            "
          >
            <label
              htmlFor="surface"
              className="
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-stone-700
              "
            >
              Superficie aproximada
            </label>

            <strong className="text-sm text-[#256348]">
              {formData.surface.toLocaleString("es-ES")} m²
            </strong>
          </div>

          <input
            id="surface"
            type="range"
            min="20"
            max="3000"
            step="10"
            value={formData.surface}
            onChange={(event) =>
              setFormData({
                ...formData,
                surface: Number(event.target.value),
              })
            }
            className="
              h-2
              w-full
              cursor-pointer
              accent-[#256348]
            "
          />

          <div
            className="
              mt-2
              flex
              justify-between
              text-xs
              text-stone-400
            "
          >
            <span>20 m²</span>
            <span>3.000 m²</span>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="
              mb-2
              block
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-stone-700
            "
          >
            Cuéntanos tu idea
          </label>

          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(event) =>
              setFormData({
                ...formData,
                message: event.target.value,
              })
            }
            placeholder="Describe brevemente qué quieres transformar, qué problemas quieres resolver o qué resultado buscas..."
            className="
              w-full
              resize-none
              rounded-xl
              border border-stone-300
              px-4
              py-3
              text-sm
              outline-none
              focus:border-[#256348]
              focus:ring-2
              focus:ring-emerald-100
            "
          />
        </div>

        <div>
          <label
            htmlFor="files"
            className="
              mb-2
              block
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-stone-700
            "
          >
            Planos o fotografías
          </label>

          <label
            htmlFor="files"
            className="
              block
              cursor-pointer
              rounded-2xl
              border-2
              border-dashed
              border-stone-300
              bg-stone-50
              p-8
              text-center
              transition
              hover:border-[#256348]
            "
          >
            <span className="text-3xl">
              📎
            </span>

            <p className="mt-3 text-sm font-medium text-stone-700">
              Selecciona fotografías o planos
            </p>

            <p className="mt-1 text-xs text-stone-400">
              JPG, PNG o PDF
            </p>
          </label>

          <input
            id="files"
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFiles}
            className="hidden"
          />

          {files.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {files.map((file) => (
                <span
                  key={`${file.name}-${file.size}`}
                  className="
                    rounded-lg
                    bg-stone-100
                    px-3
                    py-1.5
                    text-xs
                    text-stone-700
                  "
                >
                  📎 {file.name}
                </span>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="
            w-full
            rounded-xl
            bg-[#256348]
            py-4
            font-bold
            text-white
            shadow-md
            transition
            hover:bg-[#204f3b]
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {status === "sending"
            ? "Enviando solicitud..."
            : "Enviar solicitud"}
        </button>

        <p className="text-center text-xs text-stone-400">
          Recibirás confirmación por email. Adjuntaremos un PDF con tu
          solicitud a nuestro equipo.
        </p>
      </form>

      {status === "success" && (
        <div
          className="
            mt-6
            rounded-xl
            border
            border-emerald-200
            bg-emerald-50
            px-5
            py-4
            text-sm
            font-medium
            text-emerald-800
          "
        >
          ✓ Tu solicitud se ha enviado correctamente. Te contactaremos en
          breve.
        </div>
      )}

      {status === "error" && (
        <div
          className="
            mt-6
            rounded-xl
            border
            border-red-200
            bg-red-50
            px-5
            py-4
            text-sm
            font-medium
            text-red-700
          "
        >
          ✕ {errorMessage}
        </div>
      )}
    </div>
  );
}