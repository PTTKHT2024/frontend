import React from 'react';

const Specification = () => {
  const tab = [
    'THÔNG TIN CHUNG',
    'ĐỘNG CƠ & KHUNG XE',
    'NGOẠI THẤT',
    'NỘI THẤT',
  ];
  return (
    <section>
      <div className="mt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 bg-white p-5 rounded-2xl shadow-md"></div>
          <div className="col-span-9 bg-white p-5 rounded-2xl shadow-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Specification;
