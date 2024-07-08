import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Image from "next/image";
// import { useScrollContext } from '../SwipeContainers'; // Adjust the import path as needed

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export function CardAboutMe() {
  // const { scrollToWorkSection } = useScrollContext();

  return (
    <div className="grid gap-5 grid-cols-3">
      <Card title="Experience" value="1 YEAR" type="pending" />
      <Card title="Completed" value="10+ PROJECTS" type="invoices" />
      <Card title="Worked in" value="4+ COMPANIES" type="customers" />
    </div>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="group rounded-lg border border-transparent p-[0.5em] md:p-[1em] shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
  <div className="flex p-[0.5em] dark:drop-shadow-[0_0_0.8rem_#ffffff70] items-center">
    {Icon ? (
      <div className="flex items-center justify-center h-4 w-4  rounded-md bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <Icon className="h-5 w-5 text-indigo-400 hover:text-purple-500" />
      </div>
    ) : null}
    <h3 className="font-semibold ml-[0.5em] text-sm md:text-base bg-gradient-to-r bg-clip-text text-transparent from-pink-400 via-purple-500 to-indigo-500 animate-text">
      {title}
    </h3>
  </div>
  <p className="custom-font  rounded-xl px-[1em] py-[0.5em] md:px-[1.4em] md:py-[0.6em] md:text-lg text-center text-[1em] transition-all hover:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500">
    {value}
  </p>
</div>
  );
}
