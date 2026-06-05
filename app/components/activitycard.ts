"use client";

import { useEffect, useState } from "react";

export type Activity = {
  project: string;
  updated: string;
};

export function useRecentActivity() {
  const [activity, setActivity] =
    useState<Activity | null>(null);

// fetch("https://192.168.18.24:3001/api/github")
  useEffect(() => {
fetch("https://beastcodzapi.vercel.app/api/github")    
      .then((res) => res.json())
      .then(setActivity)
      .catch(console.error);
  }, []);

  return activity;
}