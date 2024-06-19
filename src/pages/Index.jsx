import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bare-Bones App</h1>
      <p className="text-lg mb-8">This is a minimal web application with a simple layout and basic structure.</p>
      <Button variant="outline">Get Started</Button>
    </div>
  );
};

export default Index;