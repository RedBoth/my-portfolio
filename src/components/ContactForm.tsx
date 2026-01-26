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

  const inputClasses = (hasError: boolean) => `
    w-full px-4 py-3 rounded-lg bg-white/5 border 
    ${hasError ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-yellow/50'} 
    text-white placeholder-brand-muted/50 focus:outline-none focus:ring-1 
    ${hasError ? 'focus:ring-red-500' : 'focus:ring-brand-yellow/50'} 
    transition-all duration-300
  `;

  return (
    <div className="w-full max-w-4xl mx-auto relative group">
        
        <div className="absolute -inset-2 bg-gradient-to-r from-brand-purple via-brand-yellow to-brand-purple rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000"></div>

        <div className="relative bg-brand-secondary/80 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl">
            
            <div className="text-center mb-10">
                <span className="text-brand-yellow font-mono text-sm tracking-wider uppercase mb-2 block">Get in touch</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Creemos experiencias <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">memorables.</span>
                </h2>
                <p className="text-brand-muted text-lg max-w-xl mx-auto">
                    ¿Tienes un proyecto en mente o simplemente quieres saludar? Envíame un mensaje.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-brand-muted ml-1">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={inputClasses(!!(touched.name && errors.name))}
                        />
                        {touched.name && errors.name && <p className="text-red-400 text-xs ml-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-brand-muted ml-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={inputClasses(!!(touched.email && errors.email))}
                        />
                        {touched.email && errors.email && <p className="text-red-400 text-xs ml-1">{errors.email}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-brand-muted ml-1">Mensaje</label>
                    <textarea
                        name="message"
                        placeholder="Cuéntame sobre tu proyecto..."
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={inputClasses(!!(touched.message && errors.message))}
                        rows={5}
                    />
                    {touched.message && errors.message && <p className="text-red-400 text-xs ml-1">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-brand-yellow text-brand-dark font-bold text-lg py-4 rounded-xl hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            Enviando...
                        </span>
                    ) : (
                        "Enviar Mensaje >"
                    )}
                </button>

                {status === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center animate-fadeIn">
                        ¡Mensaje enviado con éxito! Te responderé pronto.
                    </div>
                )}
                {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center animate-fadeIn">
                        Ocurrió un error al enviar. Por favor intenta de nuevo.
                    </div>
                )}
            </form>

            {/* Footer de contacto (Opcional, como en la referencia) */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-brand-muted">
                <a href="mailto:mauro.kolman1255@gmail.com" className="hover:text-brand-yellow transition-colors flex items-center gap-2">
                    ✉️ mauro.kolman1255@gmail.com
                </a>
                <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/mauro-kolman/" target="_blank" className="hover:text-brand-yellow transition-colors">LinkedIn</a>
                    <a href="https://github.com/RedBoth" target="_blank" className="hover:text-brand-yellow transition-colors">GitHub</a>
                </div>
            </div>

        </div>
    </div>
  );
}