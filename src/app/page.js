import { Certificate } from "@/components/Certificate";
import { Feedback } from "@/components/Feedback";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mentors } from "@/components/Mentors";
import { Module } from "@/components/Module";
import { PromoCard } from "@/components/PromoCard";
import { Vanaja } from "@/components/Vanaja";
import { Why } from "@/components/Why";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Why/>
      <Module/>
      <Certificate/>
      <PromoCard/>
      <Mentors/>
      <Feedback/>
      <Vanaja/>
    </>

  );
}
