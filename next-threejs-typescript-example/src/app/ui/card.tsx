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
      <Card title="Experience" value="1 YEAR" type="pending" />
      <Card title="Completed" value="10+ PROJECTS" type="invoices" />
      <Card title="Worked in" value="4 COMPANIES" type="customers" />
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
      <div className="flex p-3 dark:drop-shadow-[0_0_0.8rem_#ffffff70]">
        {Icon ? <Icon className="h-5 w-5 text-green-400" /> : null}
        <h3 className="font-semibold ml-2 text-sm text-green-500 font-medium">{title}</h3>
      </div>
      <p className="custom-font truncate text-gray-500 rounded-xl bg-gray-200 px-2 py-4 text-center text-2xl">
        {value}
      </p>
    </div>
  );
}
