'use client';

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container, SearchInput, CartButton, ProfileButton } from "./";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AuthModal } from "./modals";

interface Props {
  hasSeaarch?: boolean;
  hasCart?: boolean;
  className?: string
}

export const Header: React.FC<Props> = ({ hasSeaarch = true, hasCart = true, className }) => {
  const router = useRouter();
  const searchParams =  useSearchParams();
  const [opnenAuthModal,setOpenAuthModal] = React.useState(false);
 
  React.useEffect(()=> {
    let toastMessage = "";
    if(searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
    }

    if(searchParams.has('verified')) {
      toastMessage = 'Поочта успешно подтверждеа!';
    }

    if (toastMessage) {
      router.replace('/');
      toast.success(toastMessage, { duration: 3000 });
    }
  },[]);
  
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">

        {/* Левая часть*/}

        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
              <p className="text-sm leading-3 text-gray-400">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        {hasSeaarch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/* Правая часть*/}

        <div className="flex items-center gap-3">
          <AuthModal open={opnenAuthModal} onClose={() => setOpenAuthModal(false)}/>
          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)}/>
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  )
}
