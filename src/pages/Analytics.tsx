import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardChart } from "@/components/DashboardChart";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Analytics
          </h1>
          <p className="text-muted-foreground">
            Deep dive into your data with advanced analytics and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Bounce Rate"
            value="34.2%"
            change="-5.1%"
            changeType="positive"
            icon={TrendingUp}
            description="improvement"
          />
          <MetricCard
            title="Avg Session"
            value="5m 42s"
            change="+12.3%"
            changeType="positive"
            icon={BarChart3}
            description="duration"
          />
          <MetricCard
            title="Page Speed"
            value="2.1s"
            change="-0.3s"
            changeType="positive"
            icon={LineChart}
            description="load time"
          />
          <MetricCard
            title="CTR"
            value="3.8%"
            change="+0.5%"
            changeType="positive"
            icon={PieChart}
            description="click through"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DashboardChart
            title="Traffic Sources"
            description="Breakdown of where your visitors come from"
            type="area"
          />
          <DashboardChart
            title="User Behavior"
            description="How users interact with your site"
            type="line"
          />
        </div>

        <Card className="bg-gradient-card border-glass-border shadow-glow-card backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Top Performing Pages</CardTitle>
            <CardDescription className="text-muted-foreground">
              Pages with the highest engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { page: "/dashboard", views: "12,234", rate: "4.2%" },
                { page: "/products", views: "8,567", rate: "3.8%" },
                { page: "/about", views: "5,432", rate: "2.9%" },
                { page: "/contact", views: "3,210", rate: "2.1%" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-foreground">{item.page}</span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{item.views} views</span>
                    <span className="text-success">{item.rate}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;