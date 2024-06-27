// src/app/SwipeableContainer.tsx

import { ReactNode } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/navigation';

interface SwipeableContainerProps {
  children: ReactNode;
}

const SwipeableContainer = ({ children }: SwipeableContainerProps) => {
  const router = useRouter();

  const handlers = useSwipeable({
    onSwipedUp: () => {
      router.push('/about-me');
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <main {...handlers} className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
};

export default SwipeableContainer;
