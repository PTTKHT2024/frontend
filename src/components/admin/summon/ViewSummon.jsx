import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getSummom } from '../../utils/SummonApi';

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
      <p className="text-mainTitle"></p>
    </section>
  );
};

export default ViewSummon;
