import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Insight = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Insight Bacaan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Buku Dibaca</span>
            <span className="font-medium">12</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Buku Sedang Dibaca</span>
            <span className="font-medium">3</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Rata-rata Buku / Bulan</span>
            <span className="font-medium">4.2</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Insight;
