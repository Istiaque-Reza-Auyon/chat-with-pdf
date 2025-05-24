// app/dashboard/page.tsx (or pages/dashboard.tsx)
import { auth } from '@clerk/nextjs/server';

export default function Dashboard() {
  const { userId } = auth(); // Optional: fetch session info

  return <div>Welcome to your dashboard, user {userId}!</div>;
}
