import { MetricCard } from "@/components/MetricCard";
import { DashboardChart } from "@/components/DashboardChart";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  Activity, 
  DollarSign, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Eye 
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <MetricCard
            title="Total Revenue"
            value="$45,231.89"
            change="+20.1%"
            changeType="positive"
            icon={DollarSign}
            description="from last month"
          />
          <MetricCard
            title="Active Users"
            value="2,350"
            change="+15.3%"
            changeType="positive"
            icon={Users}
            description="from last month"
          />
          <MetricCard
            title="Conversion Rate"
            value="3.24%"
            change="-2.1%"
            changeType="negative"
            icon={TrendingUp}
            description="from last month"
          />
          <MetricCard
            title="Page Views"
            value="12,234"
            change="+8.2%"
            changeType="positive"
            icon={Eye}
            description="from last week"
          />
          <MetricCard
            title="Orders"
            value="573"
            change="+12.5%"
            changeType="positive"
            icon={ShoppingCart}
            description="from last month"
          />
          <MetricCard
            title="Session Duration"
            value="4m 32s"
            change="+5.4%"
            changeType="positive"
            icon={Activity}
            description="average time"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DashboardChart
            title="Revenue Overview"
            description="Monthly revenue and growth trends"
            type="area"
          />
          <DashboardChart
            title="User Analytics"
            description="User engagement and conversion metrics"
            type="line"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
