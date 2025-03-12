import CardSection from "@/components/CardSection";
import Form from "@/components/Form";
import { HeroParallaxDemo } from "@/components/HeroParallax";
import { BackgroundBeamsWithCollisionDemo } from "@/components/HeroSection";
import Information from "@/components/Information";
import OurSystemWithStyles from "@/components/OurSystem";
import SubscriptionForm from "@/components/SubscriptionForm";
import { TimelineDemo } from "@/components/Timeline";

import Videoplay from "@/components/Videoplay";

export default function Home() {
  return (
    <>
      <BackgroundBeamsWithCollisionDemo />
      <SubscriptionForm />
      <div className="information">
      <Information />

      </div>
      
      <TimelineDemo />

      <HeroParallaxDemo />
      <OurSystemWithStyles />
      <Videoplay />
      <CardSection />
      <Form />
    </>
  );
}
