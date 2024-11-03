"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input, Textarea } from "../ui/input";
import { cn } from "@/lib/utils";
import { EmailSender } from "@/action";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button while submitting
    setFeedback(""); // Clear previous feedback

    try {
      const res = await EmailSender(formData.email, formData.message);

      if (res.ok) {
        setFeedback("Your message has been sent successfully!");
      } else {
        setFeedback("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFeedback("An error occurred. Please try again later.");
    }

    setIsSubmitting(false); // Enable button again
    setFormData({ email: "", message: "" });
  };

  return (
    <div className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input custome-red">
      <h2 className="font-bold text-2xl text-neutral-200 ">
        Welcome to My Profile
      </h2>
      <p className="text-md mt-2 text-neutral-300">
        You can contact me using this form or by clicking the links below.
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="textarea">Your Message</Label>
          <Textarea
            id="message"
            placeholder="Write your message here"
            rows={5}
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </LabelInputContainer>
        <button
          className={`bg-gradient-to-br relative group/btn from-zinc-900 to-neutral-600 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Msg →"}
          <BottomGradient />
        </button>
        {feedback && (
          <p
            className={`mt-4 ${
              feedback.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {feedback}
          </p>
        )}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#E84A4A] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#E84A4A] to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
