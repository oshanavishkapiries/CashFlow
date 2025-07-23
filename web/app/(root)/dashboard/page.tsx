"use client";
import Navbar from "@/components/common/Navbar";
import React from "react";
import CardWrapper from "./card-wrapper";
import ExpenceCard from "./expence-card";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <CardWrapper>
        {Array.from({ length: 10 }).map((_, index) => (
          <ExpenceCard key={index} />
        ))}
      </CardWrapper>
    </>
  );
};

export default DashboardPage;
