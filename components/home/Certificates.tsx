import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import Container from "@/lib/container";

export default function Certificates() {
  return (
   <section id="certificates" className="py-32">
      <Container>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 md:p-14">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-lg font-bold uppercase tracking-[0.4em] text-blue-500">
                Certificates
              </p>

              <h2 className="text-4xl font-bold md:text-5xl">
                Continuous Learning & Achievements
              </h2>

              <p className="mt-6 leading-8 text-zinc-400">
                A collection of certificates earned from online courses,
                seminars, workshops, competitions, and other professional
                achievements throughout my learning journey.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-5">
              <div className="flex items-center gap-3">
                <Award className="h-12 w-12 text-blue-500" />

                <div>
                  <h3 className="text-5xl font-bold">0+</h3>
                  <p className="text-zinc-400">
                    Certificates Earned
                  </p>
                </div>
              </div>

              <Link
                href="/certificates"
                className="inline-flex items-center gap-2 rounded-full border border-blue-500 px-6 py-3 text-blue-400 transition hover:bg-blue-500 hover:text-white"
              >
                View All Certificates
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}