import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSummom } from '../../utils/SummonApi';
import { createMarkup } from '../../utils/UtilsFunction';

const ViewSummon = () => {
  const params = useParams();
  const [summon, setSummon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSummon = async () => {
      try {
        const res = await getSummom(params.id);
        if (res.status === 200) {
          setSummon(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching summon:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSummon();
  }, []);

  return (
    <section>
      {isLoading ? (
        <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
      ) : (
        <>
          <p className="text-mainTitleColor text-[22px] font-bold">
            {summon.title}
          </p>
          <hr />
        </>
      )}

      {isLoading ? (
        <span className="animate-pulse block w-full rounded-2xl h-5 bg-slate-400"></span>
      ) : (
        <p
          className="text-mainTitleColor mt-5"
          dangerouslySetInnerHTML={createMarkup(summon.content)}
        ></p>
      )}
    </section>
  );
};

export default ViewSummon;
