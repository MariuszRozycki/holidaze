// src/components/Button.tsx
import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const ButtonToTest: React.FC<ButtonProps> = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;
