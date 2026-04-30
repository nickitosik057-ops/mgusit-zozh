import React, { useMemo, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function MGUSITZozApp() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">МГУСиТ ЗОЖ</h1>
      </header>
      <main className="container mx-auto p-4">
        <p className="text-lg">Добро пожаловать в приложение МГУСиТ ЗОЖ!</p>
      </main>
      <SpeedInsights />
    </div>
  );
}
