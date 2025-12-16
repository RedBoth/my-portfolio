import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (field: string, value: string) => {
    switch (field) {
      case "name":
        if (value.trim().length < 3) return "El nombre debe tener al menos 3 caracteres.";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Ingresa un correo válido.";
        break;
      case "message":
        if (value.trim().length < 10) return "El mensaje debe tener al menos 10 caracteres.";
        break;
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (touched[name]) {
      setErrors({ ...errors, [name]: validate(name, value) });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((field) => {
      const error = validate(field, (formData as any)[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xqadwrwb", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-black/30 p-6 rounded-lg shadow-lg w-full"
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full px-4 py-2 rounded bg-black/50 border border-brand-text/30 text-white"
        />
        {touched.name && errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full px-4 py-2 rounded bg-black/50 border border-brand-text/30 text-white"
        />
        {touched.email && errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full px-4 py-2 rounded bg-black/50 border border-brand-text/30 text-white"
          rows={5}
        />
        {touched.message && errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-brand-yellow text-black font-semibold py-2 rounded hover:bg-yellow-300 transition"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>

      {status === "success" && <p className="text-green-400">¡Mensaje enviado con éxito!</p>}
      {status === "error" && <p className="text-red-400">Ocurrió un error, intenta de nuevo.</p>}
    </form>
  );
}