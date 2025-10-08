import { useQuery } from "@tanstack/react-query";
import { fetchBandsData } from "@/lib/api";

export function useBandsData() {
  return useQuery({
    queryKey: ['/api/bands-data'],
    queryFn: fetchBandsData,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
