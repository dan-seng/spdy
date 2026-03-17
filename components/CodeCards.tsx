"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Command = string;
type Done = string;
const done: Done = "✔ Done";

const commands: Command[] = [
  "npm install",
  "npm run build",
  "npm run deploy -- --prod",
  "Installing packages...",
];
export default function CodeCards() {
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (lineIndex >= commands.length) return;

    let i = 0;
    const text = commands[lineIndex];

    const typing = setInterval((): void => {
      setCurrentText(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(typing);

        // push completed line
        setLines((prev: string[]) => [...prev, text]);
        setCurrentText("");

        // move to next line
        setTimeout((): void => {
          setLineIndex((prev: number) => prev + 1);
        }, 600);
      }
    }, 40);

    return (): void => clearInterval(typing);
  }, [lineIndex]);

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="relative  overflow-hidden  border-white/10 sm:p-8 bg-linear-to-b from-white/30 via-zinc-900 to-black"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl max-w-2xl border border-white/10 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 p-4 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)]">
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-white/70">
                <div className="relative group h-3 w-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <button
                    className="
                            absolute inset-0 flex items-center justify-center
                            text-[10px] text-gray-700 font-bold
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-200
                          "
                  >
                    ×
                  </button>
                </div>
                <div className="relative group h-3 w-3">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <button
                    className="
                            absolute inset-0 flex items-center justify-center
                            text-[10px] text-gray-700 font-bold
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-200
                          "
                  >
                    -
                  </button>
                </div>
                <div className="relative group h-3 w-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <button
                    className="
                            absolute inset-0 flex items-center justify-center
                            text-[10px] text-gray-700 font-bold
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-200
                          "
                  >
                    {`<`}
                  </button>
                </div>
              </div>
              <p className="text-[11px] font-code tracking-[0.2em] text-zinc-500">
                app/spdy.js
              </p>
            </div>
            <div className="mb-3 flex items-center gap-2 text-[10px] tracking-[0.18em] text-zinc-500">
              <span className=" font-code rounded-md border border-white/10 bg-[#0f172a] px-2 py-1 text-white/80">
                spdy.ts
              </span>
              <span className="text-white/40 font-code">|</span>
              <span className="font-code">src/policies</span>
            </div>
            <pre className="font-code text-[15px] leading-6 ">
              <div className="hover:bg-gray-900 ">
                1 <span className="text-purple-400">import</span>
                <span className="text-yellow-400">{` { `}</span>
                <span className="text-blue-300">rule, ship</span>
                <span className="text-yellow-400">{` }`}</span>{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-amber-500">"@/core/guard"</span>;
              </div>
              <div className="hover:bg-gray-900 ">2 </div>
              <div className="hover:bg-gray-900 ">
                3<span className="text-purple-400"> export</span>{" "}
                <span className="text-blue-500">const</span>{" "}
                <span className="text-blue-300">securityPolicy</span>
                <span className="text-yellow-200"> = rule</span>
                <span className="text-yellow-400">{`(`}</span>
                <span className="text-purple-400">{`{`}</span>
              </div>
              <div className="hover:bg-gray-900 ">
                4 <span className="text-blue-300"> {"  "}region</span>:
                <span className="text-amber-500">"global"</span>,
              </div>
              <div className="hover:bg-gray-900 ">
                5 <span className="text-blue-300"> {"  "}quality</span>:{" "}
                <span className="text-green-200">100%</span>,
              </div>
              <div className="hover:bg-gray-900 ">
                6 <span className="text-blue-300"> {"  "}response</span>:{" "}
                <span className="text-amber-500">"auto"</span>,
              </div>
              <div className="hover:bg-gray-900 ">
                7 <span className="text-blue-300"> {"  "}alerts</span>:{" "}
                <span className="text-blue-400">{`[`}</span>
                <span className="text-amber-500">"Page", "Slack"</span>
                <span className="text-blue-400">{`]`}</span>
              </div>
              <div className="hover:bg-gray-900 ">
                8 <span className="text-purple-400">{`}`}</span>
                <span className="text-yellow-400">{`)`}</span>;
              </div>
              <div className="hover:bg-gray-900 ">9</div>
              <div className="hover:bg-gray-900 ">
                10 <span className="text-yellow-200"> ship</span>
                <span className="text-yellow-400">{`(`}</span>
                <span className="text-blue-500">securityPolicy</span>
                <span className="text-yellow-400">{`)`}</span>;
              </div>
              <div className="hover:bg-gray-900 ">
                11 <span className="cursor">|</span>
              </div>
            </pre>
          </div>

          <div className="rounded-2xl  max-w-2xl border border-white/10 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 p-4 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)]">
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-white/70">
                <div className="relative group h-3 w-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <button
                    className="
                            absolute inset-0 flex items-center justify-center
                            text-[10px] text-gray-700 font-bold
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-200
                          "
                  >
                    ×
                  </button>
                </div>
                <div className="relative group h-3 w-3">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <button
                    className="
                            absolute inset-0 flex items-center justify-center
                            text-[10px] text-gray-700 font-bold
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-200
                          "
                  >
                    -
                  </button>
                </div>
                <div className="relative group h-3 w-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <button
                    className="
                            absolute inset-0 flex items-center justify-center
                            text-[10px] text-gray-700 font-bold
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-200
                          "
                  >
                    {`<`}
                  </button>
                </div>
              </div>
              <p className="text-[11px] tracking-[0.2em] text-zinc-500 font-code">
                terminal
              </p>
            </div>
            <div className="font-code space-y-2 text-[20px]">
              <p className="hover:bg-gray-900">
                ${" "}
                <span className="bg-blue-500 text-white p-1">
                  ~/Projects/spdy{" "}
                </span>
                <span className="bg-green-600 text-white p-1 pl-1">main</span>
              </p>
              <div className="font-code text-zinc-200 space-y-1">
                {lines.map((line: string, i: number) => (
                  <p key={i}>$ {line}</p>
                ))}
                {lineIndex < commands.length && (
                  <p>
                    $ {currentText}
                    <span className="cursor">|</span>
                  </p>
                )}{" "}
                $ <span className="cursor">|</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
