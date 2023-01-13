import Link from 'next/link';
import MyInput from '../../components/MyInput/MyInput';
import bankOptions from '../../data/bankOptions';
import { CardLayout } from '../../layouts/CardLayout/CardLayout';
import { NextPageWithLayout } from '../_app';

const MobileBanking: NextPageWithLayout = () => {
  return (
    <div className="rounded-[10px] bg-white p-10">
      <h1 className="mb-3 text-2xl font-bold">Mobile Banking</h1>
      <p className="mb-8 text-gray-500">Mobile Banking</p>
      <MyInput placeholder="Search..." className="mb-8 rounded-[30px] pl-9" />
      <div className="flex flex-wrap items-start gap-x-10 gap-y-12">
        {bankOptions.map((item) => {
          return (
            <Link
              href="/load-money/bank-account"
              key={item.id}
              className="group w-40"
            >
              <div className="mb-2 h-40 w-40 rounded-xl bg-gray-200 group-hover:bg-gray-300"></div>
              <p className="text-center">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

MobileBanking.getLayout = (page) => <CardLayout>{page}</CardLayout>;

export default MobileBanking;
