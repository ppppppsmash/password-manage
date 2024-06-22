"use client";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { SignInForm } from "./_components/signin-form"
import { SignUpForm } from "./_components/signup-form"
import { EvervaultCard } from "@/components/effective-ui/evervault-card"

export default function SignInPage() {

  return (
    <section className="container h-screen flex justify-center items-center bg-transparent relative">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Sign In</TabsTrigger>
          <TabsTrigger value="password">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <SignInForm />
        </TabsContent>
        <TabsContent value="password">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </section>
  )
}
