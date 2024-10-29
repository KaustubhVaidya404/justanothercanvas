import AppBar from "@/components/appbar";
import FooterComponent from "@/components/footer";
import LandingBody from "@/components/landingbody";
import { Redirect } from "@/components/redirect";

export default function Home() {
  return (
    <div>
      <AppBar />
      <Redirect />
      <LandingBody />
      <FooterComponent />
    </div>
  );
}
