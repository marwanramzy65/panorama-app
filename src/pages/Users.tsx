import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users as UsersIcon, UserPlus, UserCheck, UserX } from "lucide-react";

const Users = () => {
  const users = [
    { name: "Alex Johnson", email: "alex@example.com", status: "active", role: "Admin", lastSeen: "2 min ago" },
    { name: "Sarah Chen", email: "sarah@example.com", status: "active", role: "User", lastSeen: "5 min ago" },
    { name: "Mike Wilson", email: "mike@example.com", status: "inactive", role: "User", lastSeen: "2 days ago" },
    { name: "Emily Davis", email: "emily@example.com", status: "active", role: "Moderator", lastSeen: "1 hour ago" },
    { name: "David Brown", email: "david@example.com", status: "pending", role: "User", lastSeen: "Never" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Users
          </h1>
          <p className="text-muted-foreground">
            Manage your user base and monitor user activity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Users"
            value="2,847"
            change="+18.2%"
            changeType="positive"
            icon={UsersIcon}
            description="this month"
          />
          <MetricCard
            title="New Users"
            value="284"
            change="+25.1%"
            changeType="positive"
            icon={UserPlus}
            description="this week"
          />
          <MetricCard
            title="Active Users"
            value="1,923"
            change="+12.5%"
            changeType="positive"
            icon={UserCheck}
            description="online now"
          />
          <MetricCard
            title="Churn Rate"
            value="2.4%"
            change="-0.8%"
            changeType="positive"
            icon={UserX}
            description="monthly"
          />
        </div>

        <Card className="bg-gradient-card border-glass-border shadow-glow-card backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Users</CardTitle>
            <CardDescription className="text-muted-foreground">
              Latest user registrations and activity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-glass/30 border border-glass-border hover:bg-glass/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge 
                      variant={user.status === 'active' ? 'default' : user.status === 'pending' ? 'secondary' : 'destructive'}
                      className="capitalize"
                    >
                      {user.status}
                    </Badge>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{user.role}</p>
                      <p className="text-xs text-muted-foreground">{user.lastSeen}</p>
                    </div>
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

export default Users;