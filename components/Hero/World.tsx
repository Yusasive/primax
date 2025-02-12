import World from "@/components/reusable/World";
import WorldImage from "@/public/images/World.png";

export default function WroldPage() {
  return (
    <div>
      <World
        title="Connect By Tribapay"
        description="Payment processing gateway that allows businesses to seamlessly process and accept online payments locally and across borders through integration of our Developer APIs or No-code tools."
        image={WorldImage}
        bgColor="#f9f9f9"
      />
    </div>
  );
}
