import { useCallback, useEffect, useState } from "react";

export const useLoadApi = <T = any>(
  request: (...args: any[]) => Promise<T>
) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async (...args: any[]): Promise<T> => {
    setIsLoading(true);
    try {
      const data = await request(...args);

      setData(data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      setError(error);
      throw error;
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = useCallback(async (...args: any[]) => {
    return await fetchData(args);
  }, []);

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};
