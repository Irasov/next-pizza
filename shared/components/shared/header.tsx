'use client';

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container, SearchInput, CartButton, ProfileButton } from "./";
import Image from "next/image";
import { Button } from "../ui";
import { User } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  hasSeaarch?: boolean;
  hasCart?: boolean;
  className?: string
}

export const Header: React.FC<Props> = ({ hasSeaarch = true, hasCart = true, className }) => {
  const searchParams =  useSearchParams();
 
  React.useEffect(()=> {
    if(searchParams.has('paid')) {
      toast.success('Заказ успешно оплачен! Информация отправлена на почту.')
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
          <ProfileButton/>
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  )
}
