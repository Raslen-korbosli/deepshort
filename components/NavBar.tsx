import { ModeToggleButton } from '@/components/ModeToggleButton';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50  backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" scroll={true}>
          <div className="flex items-center space-x-2">
            {/* <Youtube className="text-red-500" size={32} /> */}
            <Image
              src={'/logo.png'}
              alt="nav logo"
              width={50}
              height={50}
              className="mr-0"
            />
            <span className="text-xl font-bold  ">DeepShort</span>
          </div>
        </Link>
        <div className="space-x-4 flex justify-center items-center">
          <Button variant="outline">Login</Button>

          <Button className="hidden sm:block">Sign Up</Button>
          <Separator
            className="SeparatorRoot"
            orientation="vertical"
            style={{ height: '30px' }}
          />
          <ModeToggleButton />
        </div>
      </div>
    </nav>
  );
}
