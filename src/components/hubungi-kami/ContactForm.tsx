"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Gagal mengirim.");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Pesan Terkirim!</h3>
        <p className="text-gray-500 text-sm mb-6 max-w-xs">
          Tim SSB akan menghubungi Anda dalam 1–2 hari kerja melalui email yang Anda daftarkan.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline text-sm"
        >
          Kirim Pesan Lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">
            Nama Lengkap <span className="text-teal">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            maxLength={100}
            placeholder="contoh: Budi Santoso"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">
            Alamat Email <span className="text-teal">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            maxLength={200}
            placeholder="email@perusahaan.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">
          Nomor Telepon
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          maxLength={30}
          placeholder="+62 812 3456 7890"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-navy uppercase tracking-wide mb-1.5">
          Pesan <span className="text-teal">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          maxLength={5000}
          rows={5}
          placeholder="Ceritakan kebutuhan Anda — produk yang diminati, volume, atau pertanyaan lainnya..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/30 transition resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-xs font-medium">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Mengirim...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Kirim Pesan
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </span>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Dengan mengirim pesan, Anda menyetujui bahwa data Anda akan digunakan untuk keperluan komunikasi bisnis.
      </p>
    </form>
  );
}
