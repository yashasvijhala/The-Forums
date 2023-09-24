import { buttonVariants } from '@/components/ui/Button';
import { getAuthSession } from '@/lib/auth';
import { Home as HomeIcon } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function Home() {
  const session = await getAuthSession();

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-8 shadow-md border border-gray-300">
          <div className="flex items-center mb-4">
            <HomeIcon className="h-6 w-6" />
            <span className="font-bold text-xl ml-2">Home</span>
          </div>
          <p className="text-gray-700 mb-4">
            Explore your favorite communities and stay updated.
          </p>
          <Link
            className={buttonVariants({
              className: 'mt-4',
            })}
            href={`/r/create`}
          >
            Create Community
          </Link>
        </div>
      </div>
    </div>
  );
}
