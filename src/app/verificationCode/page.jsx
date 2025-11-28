"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Image from "next/image";

export default function CodePage() {
  const router = useRouter();
  const OTP_LENGTH = 4;

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRefs = useRef([]);

  const focusInput = (idx) => {
    const el = inputRefs.current[idx];
    if (el) el.focus();
  };

  const handleChange = (idx, value) => {
    const char = value.slice(-1); // only keep last entered char
    if (!/^\d?$/.test(char)) return; // digits only

    setOtp((prev) => {
      const next = [...prev];
      next[idx] = char;
      return next;
    });

    if (char && idx < OTP_LENGTH - 1) {
      // move forward on valid digit
      focusInput(idx + 1);
    }
  };

  const handleKeyDown = (idx, e) => {
    const key = e.key;

    if (key === "Backspace") {
      if (otp[idx]) {
        // clear current digit
        setOtp((prev) => {
          const next = [...prev];
          next[idx] = "";
          return next;
        });
      } else if (idx > 0) {
        // go back if already empty
        focusInput(idx - 1);
        setTimeout(() => {
          setOtp((prev) => {
            const next = [...prev];
            next[idx - 1] = "";
            return next;
          });
        }, 0);
      }
    } else if (key === "ArrowLeft" && idx > 0) {
      focusInput(idx - 1);
    } else if (key === "ArrowRight" && idx < OTP_LENGTH - 1) {
      focusInput(idx + 1);
    } else if (key === "Enter") {
      onSubmit(e);
    }
  };

  const handlePaste = (idx, e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;

    setOtp((prev) => {
      const next = [...prev];
      for (let i = 0; i < OTP_LENGTH - idx; i++) {
        next[idx + i] = pasted[i] ?? next[idx + i];
      }
      return next.slice(0, OTP_LENGTH);
    });

    const finalIndex = Math.min(idx + pasted.length, OTP_LENGTH - 1);
    focusInput(finalIndex);
  };

  const codeValue = otp.join("");
  const isComplete = codeValue.length === OTP_LENGTH && otp.every((d) => d !== "");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isComplete || isSubmitting) return;

    try {
      setIsSubmitting(true);
      // TODO: call your verify endpoint here
      // await fetch("/api/verify", { method: "POST", body: JSON.stringify({ code: codeValue }) });

      // example: go to next step
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      // TODO: show toast/error UI
    } finally {
      setIsSubmitting(false);
    }
  };

  const onResend = async () => {
    // TODO: call your resend endpoint here
    // await fetch("/api/resend", { method: "POST" });
    // Optional: start a cooldown timer
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/backgrund3.jpg')" }}
    >
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md p-8 bg-white/25 border border-[#EDEDED] text-black backdrop-blur-lg rounded-[40px]"
        autoComplete="one-time-code"
      >
        <div className="flex justify-center mt-2 mb-6">
          <Image
            src="/logocode.svg"
            alt="Company Logo"
            width={47.11}
            height={41.63}
            className="object-contain"
            priority
          />
        </div>

        <div className="flex justify-center mt-2 mb-2">
          <h1 className="text-black text-[26px]">Enter verification code</h1>
        </div>

        <div className="flex justify-center mb-6">
          <p className="text-[#7B7B7B] text-[16px] sm:text-[20px] text-center">
            We’ve sent a code to <span className="text-black">hello@aliui.com</span>
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex gap-[18px] sm:gap-[30px] justify-center mb-6">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => (inputRefs.current[idx] = el)}
              value={digit}
              onChange={(e) => handleChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              onPaste={(e) => handlePaste(idx, e)}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              aria-label={`Verification digit ${idx + 1}`}
              className="w-[60px] h-[57px] sm:w-[70px] border text-center text-2xl font-medium border-[#EDEDED] rounded-[15px] bg-white outline-none focus:ring-2 focus:ring-[#424AFF]/40"
            />
          ))}
        </div>

        {/* Resend */}
        <div className="flex justify-center mb-6">
          <p className="text-[#7B7B7B] text-[16px] sm:text-[20px]">
            Didn’t get a code?{" "}
            <button
              type="button"
              onClick={onResend}
              className="text-black underline underline-offset-4 hover:opacity-80"
            >
              Click to resend
            </button>
          </p>
        </div>

        <div className="border border-[#EDEDED]" />

        {/* Actions */}
        <div className="flex gap-[20px] sm:gap-[40px] justify-center mt-4 mb-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="w-[150px] sm:w-[167px] h-[41px] border border-[#EDEDED] rounded-[15px] bg-white text-[#6B6B6B] text-[18px] sm:text-[20px]"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!isComplete || isSubmitting}
            className={`w-[150px] sm:w-[167px] h-[41px] border border-[#424AFF] rounded-[15px] text-[18px] sm:text-[20px] text-white ${
              isComplete && !isSubmitting ? "bg-[#424AFF]" : "bg-[#424AFF]/50 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </button>
        </div>
      </form>
    </div>
  );
}
