"use client";

import { useRecentActivity } from "./activitycard";

export default function RecentActivityCard() {
  const activity = useRecentActivity();

  const daysAgo =
    activity &&
    Math.floor(
      (Date.now() - new Date(activity.updated).getTime()) /
        (1000 * 60 * 60 * 24),
    );

  return (
    <>
      <div className="flex flex-col items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-(--text-primary)">
          Recent Activity
        </h3>

        <span className="text-xs text-(--accent-soft)">GitHub</span>
      </div>

      {activity ? (
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center">
            <p className="text-xs text-(--text-muted)">Project Name</p>

            <p className="text-sm text-(--text-primary)">{activity.project}</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-xs text-(--text-muted)">Updated</p>

            <p className="text-sm text-(--text-primary)">{daysAgo} days ago</p>
          </div>
        </div>
      ) : (
        <>
          <div>
            <p className="text-sm text-(--text-primary) text-center">
              No recent activity available.
            </p>
          </div>
        </>
      )}
    </>
  );
}
