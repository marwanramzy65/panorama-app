import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from "recharts";

const data = [
  { name: "Jan", value: 400, growth: 240 },
  { name: "Feb", value: 300, growth: 139 },
  { name: "Mar", value: 200, growth: 980 },
  { name: "Apr", value: 278, growth: 390 },
  { name: "May", value: 189, growth: 480 },
  { name: "Jun", value: 239, growth: 380 },
  { name: "Jul", value: 349, growth: 430 },
];

interface DashboardChartProps {
  title: string;
  description: string;
  type?: "line" | "area";
}

export function DashboardChart({ title, description, type = "area" }: DashboardChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-glass border border-glass-border rounded-lg p-3 shadow-elegant backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm font-medium text-foreground">
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-gradient-card border-glass-border shadow-glow-card backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          {type === "area" ? (
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(258 90% 66%)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(258 90% 66%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 6% 20%)" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(240 5% 65%)"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(240 5% 65%)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(258 90% 66%)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 6% 20%)" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(240 5% 65%)"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(240 5% 65%)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(258 90% 66%)"
                strokeWidth={3}
                dot={{ fill: "hsl(258 90% 66%)", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(258 90% 66%)", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="growth"
                stroke="hsl(280 90% 70%)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "hsl(280 90% 70%)", strokeWidth: 2, r: 3 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}