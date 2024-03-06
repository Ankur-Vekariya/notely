import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

let tasks = [
  { name: "", description: "" },
  { name: "", description: "" },
  { name: "", description: "" },
  { name: "", description: "" },
  { name: "", description: "" },
  { name: "", description: "" },
  { name: "", description: "" },
];

export default function Home() {
  return (
    <Layout>
      <div className="mt-20 ml-10 mr-10 bg-gray-300  rounded-lg h-10">
        <h1 className="text-black">add task</h1>
      </div>
      <div className=" bg-white m-10  rounded-3xl">
        <div class="grid grid-cols-3 gap-1">
          {tasks?.map((item, index) => {
            return (
              <div className=" max-w-sm rounded-3xl overflow-hidden shadow-lg bg-gray-300   m-7 ">
                <div className="m-5">
                  <h1 className="text-black">add task</h1>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
