import React, { useEffect, useState } from "react"

export default function LaunchModal() {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 10000)

        return () => clearTimeout(timer)
    }, [])

    if (!show) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#143047]/40 px-4 backdrop-blur-sm">
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#f2c98b]/70 bg-[#fffaf4] p-6 text-center shadow-2xl sm:p-8">
                {/* Close Button */}
                <button
                    type="button"
                    onClick={() => setShow(false)}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-[#143047] shadow-md transition hover:bg-[#fff1dc]"
                    aria-label="Close announcement modal"
                >
                    ×
                </button>

                {/* Icon */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f7c76f]/35 text-3xl">
                    🌱
                </div>

                <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#2f8f7b]">
                    Opening Update
                </p>

                <h2 className="text-2xl font-bold leading-tight text-[#143047] sm:text-3xl">
                    Kinder Coming August 2026
                </h2>

                <p className="mt-4 text-base leading-7 text-[#41576a]">
                    All other flexible learning options and drop-in care coming{" "}
                    <span className="font-bold text-[#d8841f]">October 2026</span>.
                </p>

                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-[#f2c98b]/30">
                    <div className="h-full w-full animate-[shrink_3s_linear_forwards] rounded-full bg-[#2f8f7b]" />
                </div>
            </div>
        </div>
    )
}