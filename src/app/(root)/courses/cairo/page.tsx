import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { cairoCourseContent } from "@/lib/data";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Cairo() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-5 relative">
        <div className="flex h-full py-20 pt-40 justify-center items-center bg-green-100">
          <div className="main-container flex flex-col md:flex-row gap-20 md:gap-0">
            <div className="flex flex-col w-full md:w-3/5 mr-auto justify-center items-end gap-10 text-end">
              <h1 className="text-5xl font-semibold">Cairo Course</h1>
              <div className="flex flex-col gap-5 text-end items-end justify-center">
                <p className="text-lg">
                  with <span className="font-bold ">Falco</span>
                </p>
                <p className="text-lg">Course level: Beginner</p>
              </div>
              <p className="text-base">
                Unlock the potential of blockchain development with Cairo, a
                revolutionary programming language designed for creating secure
                and scalable smart contracts on various platforms. This
                beginner-friendly course will guide you through the intricacies
                of Cairo, empowering you to craft innovative decentralized
                applications (dApps). <br />
                <br />
                Throughout the course, you'll gain hands-on experience with
                Cairo's unique features, such as its built-in formal
                verification for writing provably-correct smart contracts. We'll
                dive deep into the architecture of the STARK-based blockchain,
                explore how to optimize for ultra-efficient zero-knowledge
                proofs, and learn best practices for security and performance.
                <br />
                <br />
                By the end of this journey, you'll be equipped with the
                necessary skills to leverage Cairo's advanced capabilities,
                setting a strong foundation for your future as a blockchain
                developer.
              </p>
              <div className="w-full flex flex-col gap-5">
                <p className="text-lg">Skills you'll obatin</p>
                <div className="w-full flex flex-wrap gap-2 justify-end items-center ">
                  <Badge>Rust</Badge>
                  <Badge>Cairo</Badge>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-2/5 justify-center items-center gap-5">
              <Link
                href={"/learn/cairo/intro"}
                className="bg-black text-white rounded-md w-[150px] py-6 text-center hover:bg-slate-900 duration-150"
              >
                Get started
              </Link>
              <div className="w-2/6 bg-slate-300 h-[1px]" />
              <p className="text-md">
                <span className="font-bold">1580 </span>
                learners enrolled
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col main-container justify-center items-end pt-20">
          <div className="flex flex-col gap-10 w-full md:w-3/5 mr-auto">
            <div className="w-full flex flex-row gap-4 items-end justify-between">
              <div className="flex flex-col gap-4 justify-between">
                <h1 className="font-bold text-xl">What you will learn</h1>
                <p className="text-base">This course have 40 lessons</p>
              </div>
              <Button className="font-bold">Get Started</Button>
            </div>

            <div className="flex flex-col">
              <Accordion
                type="single"
                collapsible
                className="gap-5 flex flex-col"
              >
                {cairoCourseContent.map((item, key) => {
                  return (
                    <AccordionItem value={`chapter-${item.chapter}`} key={key}>
                      <AccordionTrigger className=" flex flex-row justify-between">
                        <div className="flex flex-row justify-between w-full items-center px-5">
                          <p className="text-lg font-bold">{item.title}</p>
                          <div className="flex flex-col gap-2 text-sm font-light">
                            <p>14 lessons</p>
                            <p>1 hour 1min</p>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col divide-y">
                          {item.contents.map((content) => {
                            return (
                              <Link
                                href={"/"}
                                key={content.id}
                                className="flex flex-row justify-between items-center px-2 py-4"
                              >
                                <div className="flex flex-row items-center gap-2">
                                  <Play size={25} />
                                  <p>{content.title}</p>
                                </div>
                                <p>{content.time}</p>
                              </Link>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
