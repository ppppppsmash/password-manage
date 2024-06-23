"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/effective-ui/canvas-reveal-effect";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { SignInForm } from "./_components/signin-form"
import { SignUpForm } from "./_components/signup-form"

export default function SignPage() {
  return (
    <section className="container flex justify-center items-center bg-transparent relative">
      <SignInForm />
    </section>
  )
}
