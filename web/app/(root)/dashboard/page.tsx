"use client";
import Navbar from "@/components/common/Navbar";
import React, { useEffect, useState } from "react";
import CardWrapper from "./card-wrapper";
import ExpenceCard from "./expence-card";
import AddButton from "./add-button";
import { getAllExpenceGroups } from "@/services/expence-group.service";
import { ExpenceGroup } from "@/types/expence-group";

const DashboardPage = () => {
  const [expenceGroups, setExpenceGroups] = useState<ExpenceGroup[]>([]);

  useEffect(() => {
    const fetchExpenceGroups = async () => {
      const groups = await getAllExpenceGroups();
      setExpenceGroups(groups as ExpenceGroup[]);
    };
    fetchExpenceGroups();
  }, []);

  return (
    <>
      <Navbar />
      <CardWrapper>
        {expenceGroups.map((group) => (
          <ExpenceCard key={group.id} group={group} />
        ))}
      </CardWrapper>
      <AddButton className="fixed bottom-10 right-10" />
    </>
  );
};

export default DashboardPage;
