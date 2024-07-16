import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./axiosPublic";


const useAllRequest = () => {
    const axiosSecure = useAxiosPublic()

        const { data: request = [], refetch } = useQuery({
            queryKey: ['request'],
            queryFn: async () => {
                const res = await axiosSecure.get('request');
                return res.data
            }
        })
        return [request, refetch]
};

export default useAllRequest;