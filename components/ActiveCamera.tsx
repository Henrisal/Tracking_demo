import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ActiveCamera() {
  return (
    <Card className="bg-[#1f2122] border-[#3a3d3e] text-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm text-gray-400">Active Camera</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-lg font-semibold">CAM-01</div>
      </CardContent>
    </Card>
  );
}

