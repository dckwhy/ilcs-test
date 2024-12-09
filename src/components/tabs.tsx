import React, { useState } from "react";

import { Button } from "./ui/button";
import DataUtama from "./data-utama";
import DataEntitas from "./data-entitas";
import DataPungutan from "./data-pungutan";

const TabsWithForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Data Utama", "Data Entitas", "Data Pungutan"];
  const tabContent = [
    <DataUtama onNext={() => setActiveTab(1)} />,
    <DataEntitas
      onNext={() => setActiveTab(2)}
      onPrev={() => setActiveTab(0)}
    />,
    <DataPungutan onPrev={() => setActiveTab(1)} />,
  ];

  return (
    <div className="w-full mx-auto">
      <div className="flex border-b border-gray-300 mb-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-1 py-2 text-center ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="p-4 border border-gray-300 rounded-md">
        {tabContent[activeTab]}
        <div className="flex justify-center mt-16 space-x-4">
          <Button
            variant="outline"
            onClick={() => setActiveTab((prev) => Math.max(prev - 1, 0))}
            disabled={activeTab === 0}
          >
            Sebelumnya
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              setActiveTab((next) => Math.min(next + 1, tabs.length - 1))
            }
            disabled={activeTab === tabs.length - 1}
          >
            Berikutnya
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TabsWithForm;
