import React from 'react';
import companies from '../lib/data'; // Adjust the path as needed
import Image from 'next/image';

const WorkExperience: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
      <div className="w-full flex flex-col items-center">
        <h1 className="custom-font mb-2 text-xl md:text-2xl">Work Experience</h1>
        <div className="flex w-full mt-10">
          <div className="w-1/2 pr-4">
           <ul>
    {companies.map((company, index) => (
      <li key={index} className="mb-8">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none">
          <div className="flex flex-col py-3">
            <div className="flex items-center mb-4">
              <Image
                src={company.image}
                alt={`${company.name} logo`}
                width={50}
                height={50}
                className="mr-4"
              />
              <strong>{company.name}</strong>
            </div>
            <p className="text-sm text-secondary font-medium">{company.role}</p>
            <dt className="text-2xl font-semibold leading-7 text-gray-100 mt-2">{company.proj_name}</dt>
            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
              <p className="flex-auto">{company.details}</p>
            </dd>
            <div className="flex space-x-2 mt-3">
              {Array.isArray(company.method) && company.method.map((method, idx) => (
                <span key={idx} className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800 bg-darkPrimary">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </dl>
      </li>
    ))}
  </ul>
          </div>
          <div className="w-1/2 pl-4">
            <ul>
                <div className="relative rounded-xl mr-auto md:mr-0 md:ml-auto shadow-xl flex bg-slate-800 h-[20rem] sm:max-h-[none] sm:rounded-xl lg:h-[25rem] xl:h-auto xl:max-h-[25rem] dark:bg-primary/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 col-start-6 col-end-10 target target-show">
                    <div class="relative w-full flex flex-col z-10">
                        <div class="flex-none border-b border-slate-500/30">
                            <div class="flex items-center h-8 space-x-1.5 px-3">
                                <div class="w-2.5 h-2.5 bg-red-400 rounded-full">
                                    </div>
                                <div class="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                                <div class="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                                </div></div>
                                <div class="relative min-h-0 flex-auto flex flex-col">
                                <div class="flex-none overflow-auto whitespace-nowrap flex" style="opacity: 1;">
                                <div class="relative flex-none min-w-full px-1">
                                    <ul class="flex text-sm leading-6 text-slate-400">
                                        <li class="flex-none"><button type="button" class="relative py-2 px-3 text-secondary">
                                            List.ts<span class="absolute z-10 bottom-0 inset-x-3 h-px bg-secondary"></span>
                                            </button>
                                        </li>
                                        <li class="flex-none"><button type="button" class="relative py-2 px-3">
                                            Configuration.ts<span class="absolute z-10 bottom-0 inset-x-3 h-px"></span></button></li></ul><div class="absolute bottom-0 inset-x-0 h-px bg-slate-500/30"></div></div></div><div class="w-full flex-auto flex min-h-0 overflow-hidden"><div class="w-full relative flex-auto rounded-xl"><img src="https://res.cloudinary.com/dho2pmur7/image/upload/c_scale,w_1080/v1682795344/PortfolioAsset/mnbzk60pq2yzhemwslt1.png" alt="" class="h-auto"></div></div></div></div></div>
              {companies.map((company, index) => (
                <li key={index} className="mb-4">
                  {company.details}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkExperience;
