import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Image from "next/image";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export function CardAboutMe() {
  return (
    <>
      <a href="/gf"><Card title="Experience" value="1 YEAR" type="pending" /></a>
      <Card title="Completed" value="10+ PROJECTS" type="invoices" />
      <a href="/about-me/work"><Card title="Worked in" value="4 COMPANIES" type="customers" /></a>
    </>
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
    <div className="group rounded-lg border border-transparent p-2 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
  <div className="flex p-3 dark:drop-shadow-[0_0_0.8rem_#ffffff70] items-center">
    {Icon ? (
      <div className="flex items-center justify-center h-5 w-5 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <Icon className="h-5 w-5 text-indigo-400 hover:text-purple-500" />
      </div>
    ) : null}
    <h3 className="font-semibold ml-2 text-sm bg-gradient-to-r bg-clip-text text-transparent from-pink-400 via-purple-500 to-indigo-500 animate-text">
      {title}
    </h3>
  </div>
  <p className="custom-font truncate rounded-xl px-2 py-4 text-center text-2xl transition-all hover:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500">
    {value}
  </p>
</div>
  );
}
