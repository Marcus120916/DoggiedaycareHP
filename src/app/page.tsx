import Image from "next/image";
import { Github, Linkedin, Mail, Menu } from "lucide-react";



export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 pb-32 pt-32 flex flex-col gap-24 md:gap-32">
      {/* Sektion 1 */}
      <section className="py-24 relative border-b border-nature-900">
        <h1 className="text-5xl font-bold text-nature-900">test.</h1>
      </section>

      {/* Sektion 2 - Test av färger */}
      <section className="py-24 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-nature-600">test</h2>
        <div className="space-y-4">
          <p className="text-nature-300">test</p>
          <p className="text-nature-600">test</p>
          <p className="text-nature-900 text-3xl font-bold">test</p>
        </div>
      </section>
    </div>
  );
}