"use client";

import { useActionState } from "react";
import Image from "next/image";
import {
    submitContactForm,
    type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = { success: false, message: "" };

export default function ContactSection() {
    const [state, formAction, isPending] = useActionState(
        submitContactForm,
        initialState
    );

    return (
        <section id="contact" className="py-24 bg-background-light">
            <div className="px-4 md:px-10 lg:px-20 max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-shadow duration-500 animate-float">
                    {/* Left info panel */}
                    <div className="md:w-5/12 relative bg-slate-900 min-h-[300px] flex flex-col justify-center p-10 text-white">
                        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1ml87QfiX5zMhtmH6RL73QqB_gv-kQVYd1s2oTA6NQjINmO6CwIQXoOde7TjV9DKibGKZPTt2Z6kOKdLPzTmfud6892yLbmJ0etXc1Cwfidp4xQGMbD_0IlaqNErYErpgh5xpTOuoB8iHmMxW3UD0_zJqik9ggCJX9CaNjc4AZ0GxNC6YogoqM0Zh-Fp7_7tmdGWMLJW6_0LGplge5J9I02iKLZd3Hrt5mphUUItJ5n6d8nWEUlY67HiOhZ0x4oBFlqF5gyQPrw4q"
                                alt="Abstract bokeh texture"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-serif font-bold mb-6">
                                Let&apos;s Plan Your Next Event
                            </h3>
                            <p className="text-slate-300 mb-8">
                                Ready to bring your vision to life? Fill out the form, and
                                let&apos;s start a conversation about your upcoming event.
                            </p>
                            <div className="flex flex-col gap-4">
                                {/* Email */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium group-hover:text-primary transition-colors">hello@eventgarde.com</span>
                                </div>
                                {/* Phone */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium group-hover:text-primary transition-colors">+1 (555) 123-4567</span>
                                </div>
                                {/* Location */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium group-hover:text-primary transition-colors">New York City, NY</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right form */}
                    <div className="md:w-7/12 p-8 md:p-12">
                        {state.success ? (
                            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    Inquiry Sent!
                                </h3>
                                <p className="text-slate-500 max-w-sm">{state.message}</p>
                            </div>
                        ) : (
                            <form action={formAction} className="flex flex-col gap-6">
                                {state.message && !state.success && (
                                    <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                                        {state.message}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2 group">
                                        <label className="text-sm font-bold text-slate-700 group-focus-within:text-primary transition-colors">
                                            Name
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 group">
                                        <label className="text-sm font-bold text-slate-700 group-focus-within:text-primary transition-colors">
                                            Email
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 group">
                                    <label className="text-sm font-bold text-slate-700 group-focus-within:text-primary transition-colors">
                                        Event Type
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="eventType"
                                            defaultValue=""
                                            required
                                            className="h-12 w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 text-slate-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                                        >
                                            <option value="" disabled>
                                                Select an option
                                            </option>
                                            <option value="corporate">Corporate Event</option>
                                            <option value="wedding">Wedding</option>
                                            <option value="social">Social Gathering</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 group">
                                    <label className="text-sm font-bold text-slate-700 group-focus-within:text-primary transition-colors">
                                        Project Details
                                    </label>
                                    <textarea
                                        name="details"
                                        placeholder="Tell us about your event..."
                                        rows={4}
                                        required
                                        className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-300"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md hover:bg-primary-hover transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    {isPending ? (
                                        <span className="flex items-center gap-2">
                                            <svg
                                                className="animate-spin h-4 w-4 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                />
                                            </svg>
                                            Sending…
                                        </span>
                                    ) : (
                                        "Send Inquiry"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
