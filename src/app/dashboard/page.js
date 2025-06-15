// Topic: File Colocation in Next.js
// In Next.js, file colocation means keeping files (like components, styles, and tests) close to where they are used.
// This helps in organizing the project and makes it easier to maintain.

// Example in this file:
// The 'page.js' file is colocated inside the 'dashboard' folder under 'app'.
// This is because it defines the route '/dashboard'.
// Keeping the file here makes it clear that it is responsible for the '/dashboard' route.

// If you need to use a component from the 'components' folder, you can import it here.
// For example:
// import DashboardComponent from '@/components/DashboardComponent';
// This allows you to separate reusable components while keeping route-specific logic in the 'app' directory.

import LineChart from "@/components/dashboard/line-chart";

function BarChart() {
  return <h3>Bar Chart</h3>;
}

const Dashboard = () => {
  return (
    <div>
      <h3>DASHBOARD:</h3>
      <LineChart />
    </div>
  );
};

export default Dashboard;
