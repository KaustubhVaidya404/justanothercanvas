export default function FooterComponent() {
  return (
    <div className="flex flex-row justify-center">
      <footer className="absolute bottom-4 text-sm text-gray-500">
        © {new Date().getFullYear()} JustAnotherCanvas. All rights reserved.
      </footer>
    </div>
  );
}
