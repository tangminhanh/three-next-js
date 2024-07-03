'use client'
import React, { useState } from 'react';
import companies from '../lib/data'; // Adjust the path as needed
import Image from 'next/image';
import { Bar } from '../ui/bar';

const WorkExperience: React.FC = () => {
  const [selectedImageIndices, setSelectedImageIndices] = useState<number[]>(companies.map(() => 0));

  const handleButtonClick = (companyIndex: number, imageIndex: number) => {
    setSelectedImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      newIndices[companyIndex] = imageIndex;
      return newIndices;
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-col items-center">
        <h1 className="custom-font mb-2 text-xl md:text-2xl">Work Experience</h1>
        {/* <div className='timeline'>
          {companies.map((company, companyIndex) => (
            <div key={companyIndex} className="flex items-center mb-4">
              <Image
                src={company.image}
                alt={`${company.name} logo`}
                width={50}
                height={50}
                className="mr-4"
              />
              <strong>{company.name}</strong>
            </div>
          ))}
        </div> */}

        {/* </div> */}
        <div className="flex w-full mt-10 flex-wrap">
          {companies.map((company, companyIndex) => (
            <div key={companyIndex} className="flex w-full mb-10">
              <div className="w-1/2 pr-4">
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
              </div>
              <div className="w-1/2 pl-4">
                <div className="relative rounded-xl mr-auto md:mr-0 md:ml-auto shadow-xl flex bg-slate-800 h-[20rem] sm:max-h-[none] sm:rounded-xl lg:h-[25rem] xl:h-auto xl:max-h-[25rem] dark:bg-primary/70 dark:backdrop-blur dark:ring-1 dark:ring-inset dark:ring-white/10 col-start-6 col-end-10 target target-show">
                  <div className="relative w-full flex flex-col z-10">
                    <Bar />
                    <div className="relative min-h-0 flex-auto flex flex-col">
                      <div className="flex-none overflow-auto whitespace-nowrap flex" style={{ opacity: 1 }}>
                        <div className="relative flex-none min-w-full px-1">
                          <ul className="flex text-sm leading-6 text-slate-400">
                            {Array.isArray(company.display) && company.display.map((display, idx) => (
                              <li key={idx} className="flex-none">
                                <button
                                  type="button"
                                  className="relative py-2 px-3 text-secondary"
                                  onClick={() => handleButtonClick(companyIndex, idx)}
                                >
                                  {display}
                                  <span className="absolute z-10 bottom-0 inset-x-3 h-px bg-secondary"></span>
                                </button>
                              </li>
                            ))}
                          </ul>
                          <div className="absolute bottom-0 inset-x-0 h-px bg-slate-500/30"></div>
                        </div>
                      </div>
                      <div className="w-full flex-auto flex min-h-0 overflow-hidden">
                        <div className="w-full relative flex-auto rounded-xl">
                          {selectedImageIndices[companyIndex] !== undefined && selectedImageIndices[companyIndex] < company.proj_img.length && (
                            <img
                              src={company.proj_img[selectedImageIndices[companyIndex]]}
                              alt=""
                              className="h-auto"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorkExperience;
