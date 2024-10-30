import { Button } from "./ui/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";


export default function LandingBody() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 px-4 sm:px-6 lg:px-8">
        <main className="text-center space-y-6 sm:space-y-8 lg:space-y-12 max-w-4xl w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">JustAnotherCanvas</h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-md mx-auto">
            Unleash your creativity with our simple yet powerful canvas web app.
          </p>
          <div className="space-y-4 sm:space-y-6">
            <Button asChild size="lg" className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg">
              <SignedOut>
                  <SignInButton>
                    <Button>Start Drawing</Button>
                  </SignInButton>
                </SignedOut>
            </Button>
          </div>
        </main>
      </div>
    )
}