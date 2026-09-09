import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.subject.trim()) next.subject = "Please add a subject.";
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!site.formEndpoint) {
      // No backend configured yet — fall back to opening the user's mail client.
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
      window.location.href = `${site.social.email}?subject=${encodeURIComponent(values.subject)}&body=${body}`;
      setStatus("sent");
      return;
    }

    // Integration point: POST to site.formEndpoint once configured.
    fetch(site.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then(() => setStatus("sent"))
      .catch(() => setStatus("idle"));
  };

  if (status === "sent") {
    return (
      <div className="panel panel-corners flex flex-col items-center justify-center gap-3 rounded-lg p-10 text-center">
        <CheckCircle2 className="text-success" size={28} />
        <p className="font-medium">Thanks — your message is on its way.</p>
        <p className="text-sm text-text-soft">I'll get back to you as soon as I can.</p>
        <button
          onClick={() => {
            setValues(initialState);
            setStatus("idle");
          }}
          className="mt-2 text-sm text-accent hover:underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="panel panel-corners rounded-lg p-6 sm:p-7 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          id="name"
          label="Name"
          value={values.name}
          error={errors.name}
          onChange={(v) => setValues((s) => ({ ...s, name: v }))}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(v) => setValues((s) => ({ ...s, email: v }))}
        />
      </div>
      <Field
        id="subject"
        label="Subject"
        value={values.subject}
        error={errors.subject}
        onChange={(v) => setValues((s) => ({ ...s, subject: v }))}
      />
      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono-label text-xs text-text-faint">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-danger">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-[var(--accent-ink)] transition-transform hover:scale-[1.01] active:scale-[0.99] sm:w-auto cursor-pointer"
      >
        <Send size={15} />
        Send Message
      </button>
      {!site.formEndpoint && (
        <p className="text-xs text-text-faint">
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  type = "text",
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-mono-label text-xs text-text-faint">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
