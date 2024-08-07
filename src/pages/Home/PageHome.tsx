import React from 'react';
import { useNavigate } from 'react-router-dom';

export const PageHome = () => {
  const navi = useNavigate();
  return (
    <div className="w-screen h-screen bg-black ">
      <span
        className="text-white hover:cursor-pointer"
        onClick={() => {
          navi('/vector');
        }}
      >
        벡터 교실로 이동.
      </span>
    </div>
  );
};
