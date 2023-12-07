import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { solidityCourseContent } from "@/lib/data";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Solidity() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col gap-5 relative">
        <div className="flex h-full py-20 justify-center items-center bg-green-100">
          <div className="main-container flex flex-col md:flex-row gap-20 md:gap-0">
            <div className="flex flex-col w-full md:w-3/5 mr-auto justify-center items-end gap-10 text-end">
              <h1 className="text-5xl font-semibold">Solidity Course</h1>
              <div className="flex flex-col gap-5 text-end items-end justify-center">
                <p className="text-lg">
                  with <span className="font-bold ">Falco</span>
                </p>
                <p className="text-lg">Course level: Beginner</p>
              </div>
              <p className="text-base">
                Dive into the world of Smart Contract Development with Solidity,
                a key programming language for creating decentralized
                applications on the Ethereum blockchain. Build and deploy
                secure, efficient contracts by mastering Solidity, along with
                essential tools and frameworks. This course covers Smart
                Contract logic, Ethereum Virtual Machine basics, and best
                practices for gas optimization and security.
              </p>
              <div className="w-full flex flex-col gap-5">
                <p className="text-lg">Skills you'll obatin</p>
                <div className="w-full flex flex-wrap gap-2 justify-end items-center ">
                  <Badge>Solidity</Badge>
                  <Badge>Javascript</Badge>
                  <Badge>Smart Contracts</Badge>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-2/5 justify-center items-center gap-5">
              <Button className="w-[150px] py-6">Get started</Button>
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
                {solidityCourseContent.map((item, key) => {
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
