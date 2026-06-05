"use client";

import { useEffect, useState } from "react";

export type Activity = {
  project: string;
  updated: string;
};

export function useRecentActivity() {
  const [activity, setActivity] =
    useState<Activity | null>(null);

  useEffect(() => {
    fetch("http://192.168.18.24:3001/api/github")
      .then((res) => res.json())
      .then(setActivity)
      .catch(console.error);
  }, []);

  return activity;
}