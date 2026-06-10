'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  const  api = process.env.DADATA_API_KEY
  return (
    <AddressSuggestions
      token={String(api)}
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};