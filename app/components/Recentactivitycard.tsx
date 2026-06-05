"use client";

import { useRecentActivity } from "./activitycard";

export default function RecentActivityCard() {
  const activity = useRecentActivity();

  const daysAgo =
    activity &&
    Math.floor(
      (Date.now() -
        new Date(activity.updated).getTime()) /
        (1000 * 60 * 60 * 24)
    );

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-[var(--text-primary)]">
          Recent Activity
        </h3>

        <span className="text-xs text-[var(--accent-soft)]">
          GitHub
        </span>
      </div>

      {activity ? (
        <>
          <div>
            <p className="text-xs text-[var(--text-muted)]">
              Project Name
            </p>

            <p className="text-sm text-[var(--text-primary)]">
              {activity.project}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xs text-[var(--text-muted)]">
              Updated
            </p>

            <p className="text-sm text-[var(--text-primary)]">
              {daysAgo} days ago
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            
            <p className="text-sm text-[var(--text-primary)]">
              No recent activity available.
            </p>
          </div>
        </>
      )}
    </>
  );
}